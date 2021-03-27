import { useUserMails } from "../../context/MailsContext";

export const MailRow = ({ id, name, labels = "", subject, time }) => {
  const userMails = useUserMails();
  return (
    <div className="MailRow" onClick={() => userMails.readToggle(id)}>
      <div className="name">{name}</div>
      <div className="labels">{labels}</div>
      <div className="subject">{subject}</div>
      <div className="time">{time}</div>
    </div>
  );
};
