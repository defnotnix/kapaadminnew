// apiClient.ts
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

const AUTH_SCHEME = "MakotaAllahuAkhbar "; // keep as-is (or switch to "Bearer " if your backend expects it)
const ACCESS_KEY = "sswtoken";

function getAccessToken(): string | null {
  return sessionStorage.getItem(ACCESS_KEY);
}

function setAccessToken(token?: string | null) {
  if (!token) return;
  sessionStorage.setItem(ACCESS_KEY, token);
}

// Create a single axios instance for the whole app
const api: AxiosInstance = axios.create({
  // baseURL: "/api", // uncomment/set if you use a base path
  withCredentials: false,
  timeout: 30_000,
});

// ----- Request interceptor: attach Authorization -----
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = getAccessToken();
  if (token) {
    config.headers = config.headers ?? {};
    // Only set Authorization if caller did not override it explicitly
    if (!config.headers["Authorization"]) {
      config.headers["Authorization"] = AUTH_SCHEME + token;
    }
  }
  return config;
});

// ----- Refresh: single-flight promise so we never spam the server -----
let refreshPromise: Promise<string | null> | null = null;

async function refreshToken(): Promise<string | null> {
  if (!refreshPromise) {
    const token = getAccessToken();
    refreshPromise = axios
      .post(
        "/authenticate/refresh/token/",
        {},
        {
          headers: { Authorization: AUTH_SCHEME + (token ?? "") },
        }
      )
      .then((res) => {
        // Accept token from header or body—support both, be flexible
        const headerToken =
          (res.headers?.["xauthorization"] as string | undefined) ||
          (res.headers?.["XAuthorization"] as string | undefined);
        const bodyToken =
          (res.data?.access as string | undefined) ||
          (res.data?.token as string | undefined);
        const newToken = headerToken ?? bodyToken ?? null;

        if (newToken) setAccessToken(newToken);
        return newToken;
      })
      .catch(() => null)
      .finally(() => {
        // allow new refresh attempts later
        refreshPromise = null;
      });
  }
  return refreshPromise;
}

// Helper: decide if this error looks like an "expired token" situation
function isAuthExpiredError(error: AxiosError): boolean {
  const status = error.response?.status;
  if (status === 401) return true; // canonical
  // Fallbacks if backend uses 403 + detail, etc.
  const detail =
    (error.response?.data as any)?.detail ||
    (error.response?.data as any)?.message ||
    (error.response?.data as any)?.error;
  if (typeof detail === "string" && /expired|invalid|token/i.test(detail)) {
    return true;
  }
  return false;
}

// ----- Response interceptor: auto-refresh then retry once -----
api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const original = error.config as
      | (AxiosRequestConfig & { _retry?: boolean })
      | undefined;
    if (!original) throw error;

    const alreadyTried = original._retry === true;

    if (isAuthExpiredError(error) && !alreadyTried) {
      original._retry = true;
      const newToken = await refreshToken();

      if (newToken) {
        original.headers = original.headers ?? {};
        original.headers["Authorization"] = AUTH_SCHEME + newToken;
        return api(original); // retry with fresh token
      }
    }

    // If we’re here, either not an auth error, or refresh failed, or already retried.
    throw error;
  }
);

export default api;
