export const MailRow = ({ name, labels = "", subject, time }) => {
  return (
    <div className="MailRow">
      <div className="name">{name}</div>
      <div className="labels">{labels}</div>
      <div className="subject">{subject}</div>
      <div className="time">{time}</div>
    </div>
  );
};
