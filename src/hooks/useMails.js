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
      mailsOfUser.forEach((userMail) => {
        mailList.forEach((m) => {
          if (userMail.mailId === m.id) {
            userMail.mailDetails = m;
          }
        });
      });
      setUserRequestedMails(mailsOfUser);
    }
  }, []);
  const readToggle = (id = "") => {
    console.log(`Mail read ${id}`);
    let modifiedMails = JSON.parse(JSON.stringify(userRequestedMails));
    modifiedMails.forEach((m) => {
      if (m.id === id) {
        m.isRead = !m.isRead;
      }
    });
    setUserRequestedMails(modifiedMails);

    let modifiedUserMailList = JSON.parse(JSON.stringify(userMailList));
    modifiedUserMailList.forEach((m) => {
      if (m.id === id && m.email === auth.user.email) {
        m.isRead = !m.isRead;

        delete m.mailDetails;
      }
    });
    console.log(modifiedUserMailList);
    console.log(modifiedMails);
    setUserMailList(modifiedUserMailList);
  };

  return {
    userRequestedMails,
    readToggle,
  };
};

export default useMails;
