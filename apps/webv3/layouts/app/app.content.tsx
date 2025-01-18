"use client";

import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

const Context = createContext<any>(null);

export const AppContext = ({ children }: PropsWithChildren) => {
  const [pageTransitionOverlay, setPageTransitionOverlay] = useState(false);

  return (
    <Context.Provider
      value={{
        pageTransitionOverlay,
        setPageTransitionOverlay,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => {
  return useContext(Context);
};
