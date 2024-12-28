import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

const BreadcrumbContext = createContext<any>({});

// Provider

export const AdminNavLayoutContext = ({ children }: PropsWithChildren) => {
  const [breadcrumbs, setBreadcrumbs] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [chats, setChats] = useState([]);

  return (
    <BreadcrumbContext.Provider
      value={{
        // * Breadcrumb
        breadcrumbs,
        setBreadcrumbs,
        // * Notification
        notifications,
        setNotifications,
        // * Announcement
        announcements,
        setAnnouncements,
        // * Chat
        chats,
        setChats,
      }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useAdminNavContext = () => {
  return useContext(BreadcrumbContext);
};
