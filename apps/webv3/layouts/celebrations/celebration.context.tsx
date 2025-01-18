"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

const Context: any = createContext(null);

export const useCelebrationContext: any = () => {
  return useContext(Context);
};

const initialState = {
  background: null,
  navStatus: false,
  pageLoading: true,
  preData: {},
};

const reducer = (
  state: any,
  action: {
    type: string;
    payload?: any;
  }
) => {
  switch (action.type) {
    case "SET_BACKGROUND":
      return {
        ...state,
        background: action.payload,
      };
    case "SET_NAV_STATUS":
      return {
        ...state,
        navStatus: action.payload,
      };

    case "OPEN_NAV":
      return {
        ...state,
        navStatus: true,
      };

    case "CLOSE_NAV":
      return {
        ...state,
        navStatus: false,
      };

    case "SET_PAGE_LOADING":
      return {
        ...state,
        pageLoading: action.payload,
      };
    case "SET_PRE_DATA":
      return {
        ...state,
        pageLoading: true,
        preData: action.payload,
      };
    default:
      return state;
  }
};

export function CelebrationContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </>
  );
}

export { Context as CelebrationContext };
