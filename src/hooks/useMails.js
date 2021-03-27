import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { mails, userMails } from "../data";
import { useAuth } from "../context/AuthContext";

const useMails = () => {
  const [userRequestedMails, setUserRequestedMails] = useState(null);
  const [inboxTotal, setInboxTotal] = useState(0);

  const [inboxUnreadCount, setInboxUnreadCount] = useState(0);

  const [mailList, setMailList] = useLocalStorage("mails", mails);
  const [userMailList, setUserMailList] = useLocalStorage(
    "user-mails",
    userMails
  );
  const auth = useAuth();
  useEffect(() => {
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
  }, [userMailList, auth.user.email, mailList]);
  useEffect(() => {
    if (userRequestedMails) {
      let listInbox = userRequestedMails.filter((m) => m.folder === "inbox");
      setInboxTotal(listInbox.length || 0);
      let listInboxUnread = userRequestedMails.filter(
        (m) => m.folder === "inbox" && m.isRead === false
      );
      setInboxUnreadCount(listInboxUnread.length || 0);
    }
  }, [userRequestedMails]);
  const readToggle = (id = "") => {
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
    setUserMailList(modifiedUserMailList);
  };

  return {
    userRequestedMails,
    inboxUnreadCount,
    inboxTotal,
    readToggle,
  };
};

export default useMails;
