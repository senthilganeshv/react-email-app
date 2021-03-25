import { useState, useEffect } from "react";
export const useLocalStorage = (key, defaultValue = "") => {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return JSON.parse(valueInLocalStorage);
      } catch (ex) {
        console.log(ex);
      }
    }
    return defaultValue;
  });

  useEffect(() => {
    console.log(state);
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
