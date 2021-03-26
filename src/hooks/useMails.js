import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { mails, userMails } from "../data";
import { useAuth } from "../context/AuthContext";

const useMails = () => {
  const [userRequestedMails, setUserRequestedMails] = useState(null);
  const [mailList, setMailList] = useLocalStorage("mails", mails);
  const [userMailList, setUserMailList] = useLocalStorage(
    "user-mails",
    userMails
  );
  const auth = useAuth();
  useEffect(() => {
    {
      let mailsOfUser = userMailList.filter((mail) => {
        return auth.user.email === mail.email;
      });
      mailsOfUser.map((userMail) => {
        mailList.forEach((m) => {
          if (userMail.mailId === m.id) {
            userMail.mailDetails = m;
          }
        });
      });
      setUserRequestedMails(mailsOfUser);
    }
  }, []);

  return {
    userRequestedMails,
  };
};

export default useMails;
