import { useEffect, useState } from "react";
import { useUserMails } from "../../context/MailsContext";
import { useParams } from "react-router";
import { MailRow } from "../mail-row";
import "./mail-container.css";
import { MailHeader } from "./MailHeader";
import { MailActions } from "./MailActions";
export const MailsContainer = () => {
  const [mails, setMails] = useState([]);
  const userMails = useUserMails();
  const { mailFolder } = useParams();

  useEffect(() => {
    if (userMails.userRequestedMails) {
      let mailsFromFolder = userMails.userRequestedMails.filter(
        (m) => m.folder === mailFolder
      );
      setMails(mailsFromFolder);
    }
  }, [mailFolder, userMails.userRequestedMails]);

  return (
    <div className="mail-container">
      <MailHeader folder={mailFolder} count={mails.length} />
      <MailActions />
      {mails &&
        mails.map((mail) => {
          return (
            <MailRow
              key={`mail-${mail.id}`}
              id={mail.id}
              name={mail.mailDetails.name}
              time={mail.mailDetails.timeStamp}
              subject={mail.mailDetails.subject}
              isRead={mail.isRead}
            />
          );
        })}
    </div>
  );
};
