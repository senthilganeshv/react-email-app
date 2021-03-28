import { useEffect, useState } from "react";
import { useUserMails } from "../../context/MailsContext";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { MailRow } from "../mail-row";
import "./mail-container.css";
import { MailHeader } from "./MailHeader";
import { MailActions } from "./MailActions";

export const MailsContainer = () => {
  const [mails, setMails] = useState([]);
  const [selectedMails, setSelectedMails] = useState([]);
  const userMails = useUserMails();
  const { mailFolder } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (userMails.userRequestedMails) {
      let mailsFromFolder = userMails.userRequestedMails.filter(
        (m) => m.folder === mailFolder
      );
      setMails(mailsFromFolder);
    }
  }, [mailFolder, userMails.userRequestedMails]);
  const handleMailSelect = (id) => {
    if (selectedMails.includes(id)) {
      let modifiedList = selectedMails.filter((m) => m !== id);
      setSelectedMails(modifiedList);
    } else {
      setSelectedMails([...selectedMails, id]);
    }
  };
  return (
    <div className="mail-container">
      <MailHeader folder={mailFolder} count={mails.length} />
      <MailActions
        readToggle={() => userMails.readToggle(selectedMails, true)}
        mailsDelete={() => userMails.deleteMails(selectedMails)}
      />
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
              categories={mail.categories}
              event={() => history.push(`/mail/view/${mail.id}`)}
              onSelect={() => handleMailSelect(mail.id)}
            />
          );
        })}
    </div>
  );
};
