import "./mail-header.css";
export const MailHeader = ({ folder, count = 0 }) => {
  return (
    <div className="mail-header">
      <div className="mail-folder-title">
        {`${folder} `}
        {count > 0 && `(${count})`}
      </div>
      <div className="search">
        <input type="text" placeholder="Search email" />
        <div className="search-btn">Search</div>
      </div>
    </div>
  );
};
