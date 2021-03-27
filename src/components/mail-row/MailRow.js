import moment from "moment";
import { useUserMails } from "../../context/MailsContext";

import "./mail-row.css";

export const MailRow = ({ id, name, labels = "", subject, time, isRead }) => {
  const userMails = useUserMails();
  return (
    // onClick={() => userMails.readToggle(id)}
    <div
      className={`mail-row ${isRead ? "" : "unread"}`}
      onClick={() => userMails.readToggle(id)}
    >
      <label className="checkbox">
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
      <div className="name">
        <div>{name}</div>
        <div className="labels">{labels}</div>
      </div>
      <div className="time">{moment(time).format("MMM D")}</div>
      <div className="subject">{subject}</div>
    </div>
  );
};
