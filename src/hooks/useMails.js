import { useState, useEffect } from "react";
import uuid from "react-uuid";
import moment from "moment";

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
    console.log("UseEffect UserRequestedMails");
    mailsOfUser.forEach((userMail) => {
      mailList.forEach((m) => {
        if (userMail.mailId === m.id) {
          userMail.mailDetails = m;
        }
      });
    });
    mailsOfUser.sort((a, b) => {
      return moment(b.timeStamp).diff(a.timeStamp);
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

  const readToggle = (id = [], toggle = false) => {
    let modifiedUserMailList = JSON.parse(JSON.stringify(userMailList));
    modifiedUserMailList.forEach((m) => {
      if (id.includes(m.id) && m.email === auth.user.email) {
        if (toggle) {
          m.isRead = !m.isRead;
        } else {
          if (!m.isRead) {
            m.isRead = !m.isRead;
          }
        }

        delete m.mailDetails;
      }
    });
    setUserMailList(modifiedUserMailList);
  };
  const getMail = (id) => {
    if (userRequestedMails) {
      let mailSelect = userRequestedMails.find((m) => m.id === id);
      if (mailSelect) {
        readToggle([id]);
      }
      return mailSelect;
    }
  };

  const deleteMails = (id = []) => {
    let modifiedUserMailList = JSON.parse(JSON.stringify(userMailList));
    modifiedUserMailList.forEach((m) => {
      if (id.includes(m.id)) {
        m.folder = "trash";
      }
    });
    setUserMailList(modifiedUserMailList);
  };

  const AddMail = (email) => {
    let mailRefTemplate = {
      id: 1,
      email: auth.user.email,
      mailId: 1,
      isRead: false,
      folder: "sent",
      isStarred: false,
      labels: [],
      categories: [],
      timeStamp: email.timeStamp,
    };

    let mails = JSON.parse(JSON.stringify(mailList));
    setMailList([...mails, email]);

    let modifiedUserMailList = JSON.parse(JSON.stringify(userMailList));
    let senderRef = { ...mailRefTemplate };
    senderRef.id = uuid();
    senderRef.mailId = email.id;
    senderRef.isRead = true;

    let toRef = { ...mailRefTemplate };
    toRef.id = uuid();
    toRef.email = email.to;
    toRef.mailId = email.id;
    toRef.folder = "inbox";

    let ccRef = { ...mailRefTemplate };
    ccRef.id = uuid();
    ccRef.email = email.cc;
    ccRef.mailId = email.id;
    ccRef.folder = "inbox";
    setUserMailList([...modifiedUserMailList, senderRef, toRef, ccRef]);
  };
  return {
    userRequestedMails,
    inboxUnreadCount,
    inboxTotal,
    readToggle,
    deleteMails,
    AddMail,
    getMail,
  };
};

export default useMails;
