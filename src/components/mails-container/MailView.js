import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { useUserMails } from "../../context/MailsContext";

export const MailView = () => {
  const userMails = useUserMails();
  const [mail, setMail] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (userMails.userRequestedMails) {
      let mailSelect = userMails.userRequestedMails.find((m) => m.id == id);
      if (mailSelect) {
        userMails.readToggle([id]);
      }
      console.log(mailSelect);
      setMail(mailSelect);
    }
  }, [id]);
  return (
    <div className="mail-view">
      <div>From: {mail.from}</div>
      <div>To: {mail.to}</div>
    </div>
  );
};
