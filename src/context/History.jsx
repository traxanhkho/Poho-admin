import { useRouter } from "next/router";
import React, { createContext, useState, useEffect, useContext } from "react";

const HistoryContext = createContext();
export const HistoryProvider = ({ children }) => {
  const { asPath, push, pathname } = useRouter();
  const [history, setHistory] = useState([]);

  function back(fallbackRoute) {
    for (let i = history.length - 2; i >= 0; i--) {
      const route = history[i];
      if (!route.includes("#") && route !== pathname) {
        push(route);
        const newHistory = history.slice(0, i);
        setHistory(newHistory);
        return;
      }
    }
    if (fallbackRoute) {
      router.push(fallbackRoute);
    }
  }

  useEffect(() => {
    setHistory((previous) => [...previous, asPath]);
  }, [asPath]);

  return (
    <HistoryContext.Provider
      value={{
        back,
        history,
        setHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export function useHistory() {
  const context = useContext(HistoryContext);
  return context;
}
