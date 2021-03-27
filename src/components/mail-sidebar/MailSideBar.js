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
        <ul className="folders">
          <li>
            <NavLink to="/mail/inbox" activeClassName="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="14"
                viewBox="0 0 18 18"
              >
                <path
                  id="ic_inbox_24px"
                  d="M19,3H4.99A1.976,1.976,0,0,0,3.01,5L3,19a1.991,1.991,0,0,0,1.99,2H19a2.006,2.006,0,0,0,2-2V5A2,2,0,0,0,19,3Zm0,12H15a3,3,0,0,1-6,0H4.99V5H19Z"
                  transform="translate(-3 -3)"
                />
              </svg>
              Inbox {inboxUnreadCount > 0 && inboxUnreadCount}
            </NavLink>
          </li>
          <li>
            <NavLink to="/mail/sent" activeClassName="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 16"
              >
                <path
                  id="ic_mail_outline_24px"
                  d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,14H4V8l8,5,8-5Zm-8-7L4,6H20Z"
                  transform="translate(-2 -4)"
                />
              </svg>
              Sent Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/mail/important" activeClassName="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 18 18"
              >
                <path
                  id="ic_report_24px"
                  d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27ZM12,17.3A1.3,1.3,0,1,1,13.3,16,1.3,1.3,0,0,1,12,17.3ZM13,13H11V7h2v6Z"
                  transform="translate(-3 -3)"
                />
              </svg>
              Important
            </NavLink>
          </li>
          <li>
            <NavLink to="/mail/drafts" activeClassName="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 18 22"
              >
                <path
                  id="ic_content_paste_24px"
                  d="M19,2H14.82A2.988,2.988,0,0,0,9.18,2H5A2.006,2.006,0,0,0,3,4V20a2.006,2.006,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V4A2.006,2.006,0,0,0,19,2ZM12,2a1,1,0,1,1-1,1A1,1,0,0,1,12,2Zm7,18H5V4H7V7H17V4h2Z"
                  transform="translate(-3)"
                />
              </svg>
              Drafts
            </NavLink>
          </li>
          <li>
            <NavLink to="/mail/trash" activeClassName="active">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 18"
              >
                <path
                  id="ic_delete_24px"
                  d="M6,19a2.006,2.006,0,0,0,2,2h8a2.006,2.006,0,0,0,2-2V7H6ZM19,4H15.5l-1-1h-5l-1,1H5V6H19Z"
                  transform="translate(-5 -3)"
                />
              </svg>
              Trash
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <h3>CATEGORIES</h3>
        <ul className="categories">
          <li>
            <span
              class="dot"
              style={{ backgroundColor: "var(--color-green)" }}
            ></span>
            Work
          </li>
          <li>
            <span
              class="dot"
              style={{ backgroundColor: "var(--color-red)" }}
            ></span>
            Documents
          </li>
          <li>
            <span
              class="dot"
              style={{ backgroundColor: "var(--color-blue)" }}
            ></span>
            Social
          </li>
          <li>
            <span
              class="dot"
              style={{ backgroundColor: "var(--color-turquoise-blue)" }}
            ></span>
            Advertising
          </li>
          <li>
            <span
              class="dot"
              style={{ backgroundColor: "var(--color-yellow)" }}
            ></span>
            Clients
          </li>
        </ul>
      </nav>
      <nav>
        <h3>LABELS</h3>
        <ul className="labels">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Family
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Work
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Home
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Children
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Holidays
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Music
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Photography
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              height="14px"
              width="14px"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            Film
          </li>
        </ul>
      </nav>
    </div>
  );
};
