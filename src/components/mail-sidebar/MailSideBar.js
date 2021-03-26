import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserMails } from "../../context/MailsContext";

import "./mail-sidebar.css";
export const MailSideBar = () => {
  const [inboxUnreadCount, setInboxUnreadCount] = useState(0);
  const userMails = useUserMails();

  useEffect(() => {
    if (userMails.userRequestedMails) {
      let list = userMails.userRequestedMails.filter(
        (m) => m.folder === "inbox" && m.isRead === false
      );
      setInboxUnreadCount(list.length || 0);
    }
  }, [userMails.userRequestedMails]);
  return (
    <div className="mail-sidebar">
      <nav>
        <h3>FOLDERS</h3>
        <ul>
          <li>
            <NavLink to="/mail/inbox">
              Inbox {inboxUnreadCount > 0 && inboxUnreadCount}
            </NavLink>
          </li>
          <li>
            <NavLink to="/mail/sent">Sent Items</NavLink>
          </li>
          <li>
            <NavLink to="/mail/important">Important</NavLink>
          </li>
          <li>
            <NavLink to="/mail/drafts">Drafts</NavLink>
          </li>
          <li>
            <NavLink to="/mail/trash">Trash</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <h3>CATEGORIES</h3>
        <ul>
          <li>Work</li>
          <li>Documents</li>
          <li>Social</li>
          <li>Advertising</li>
          <li>Clients</li>
        </ul>
      </nav>
      <nav>
        <h3>LABELS</h3>
        <ul>
          <li>Family</li>
          <li>Work</li>
          <li>Home</li>
          <li>Children</li>
          <li>Holidays</li>
          <li>Music</li>
          <li>Photography</li>
          <li>Film</li>
        </ul>
      </nav>
    </div>
  );
};
