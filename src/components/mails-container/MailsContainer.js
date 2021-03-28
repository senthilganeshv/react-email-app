import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { useUserMails } from "../../context/MailsContext";
import { MailRow } from "../mail-row";
import { MailHeader } from "./mail-header/";
import { MailActions } from "./mail-actions/";
import "./mail-container.css";

export const MailsContainer = () => {
  const [mails, setMails] = useState([]);
  const [selectedMails, setSelectedMails] = useState([]);
  const userMails = useUserMails();
  const { mailFolder } = useParams();
  const history = useHistory();

  const folders = [
    {
      folder: "inbox",
      name: "Inbox",
    },
    {
      folder: "sent",
      name: "Sent Items",
    },
    {
      folder: "important",
      name: "Important",
    },
    {
      folder: "drafts",
      name: "Drafts",
    },
    {
      folder: "trash",
      name: "Trash",
    },
  ];
  let folderName = folders.find((f) => f.folder === mailFolder);
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
      <MailHeader
        folder={folderName.name}
        count={mailFolder === "inbox" && userMails.inboxUnreadCount}
      />
      <MailActions
        readToggle={() => userMails.readToggle(selectedMails, true)}
        mailsDelete={() => userMails.deleteMails(selectedMails)}
      />
      <div style={{ borderTop: "1px solid var(--color-border-light-grey)" }}>
        {mails &&
          mails.map((mail) => {
            return (
              <MailRow
                key={`mail-${mail.id}`}
                id={mail.id}
                name={mail.mailDetails.name}
                to={mail.mailDetails.to}
                time={mail.mailDetails.timeStamp}
                subject={mail.mailDetails.subject}
                isRead={mail.isRead}
                categories={mail.categories}
                folder={mailFolder}
                event={() => history.push(`/mail/view/${mail.id}`)}
                onSelect={() => handleMailSelect(mail.id)}
              />
            );
          })}
      </div>

      {mails.length === 0 && (
        <div className="no-mails">No mails in the current folder</div>
      )}
    </div>
  );
};
