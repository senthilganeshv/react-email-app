import { useContext, createContext } from "react";
import useMails from "../hooks/useMails";
const mailContext = createContext();

export const ProvideMails = ({ children }) => {
  const mails = useMails();
  return <mailContext.Provider value={mails}>{children}</mailContext.Provider>;
};

export const useUserMails = () => {
  return useContext(mailContext);
};
