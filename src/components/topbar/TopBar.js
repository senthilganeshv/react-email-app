import { useAuth } from "../../context/AuthContext";
import { useUserMails } from "../../context/MailsContext";

import "./topbar.css";

export const TopBar = () => {
  const auth = useAuth();
  const userMails = useUserMails();

  return (
    <div className="top-bar">
      <div className="dashboard-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="12"
          viewBox="0 0 20 12"
        >
          <path
            id="ic_dehaze_24px"
            d="M2,15.5v2H22v-2Zm0-5v2H22v-2Zm0-5v2H22v-2Z"
            transform="translate(-2 -5.5)"
          />
        </svg>
      </div>
      <input type="text" placeholder="Search for something..." />
      <div className="actions">
        <div className="mail">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <path
              id="ic_email_24px"
              d="M20,4H4A2,2,0,0,0,2.01,6L2,18a2.006,2.006,0,0,0,2,2H20a2.006,2.006,0,0,0,2-2V6A2.006,2.006,0,0,0,20,4Zm0,4-8,5L4,8V6l8,5,8-5Z"
              transform="translate(-2 -4)"
            />
          </svg>
          {userMails && userMails.inboxUnreadCount > 0 && (
            <span className="count">{userMails.inboxUnreadCount}</span>
          )}
        </div>

        <div className="notification">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="19.5"
            viewBox="0 0 16 19.5"
          >
            <path
              id="ic_notifications_24px"
              d="M12,22a2.006,2.006,0,0,0,2-2H10A2,2,0,0,0,12,22Zm6-6V11c0-3.07-1.64-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.63,5.36,6,7.92,6,11v5L4,18v1H20V18Z"
              transform="translate(-4 -2.5)"
            />
          </svg>
          <span className="count">8</span>
        </div>
        <div className="logout" onClick={auth.signout}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              id="ic_exit_to_app_24px"
              d="M10.09,15.59,11.5,17l5-5-5-5L10.09,8.41,12.67,11H3v2h9.67ZM19,3H5A2,2,0,0,0,3,5V9H5V5H19V19H5V15H3v4a2,2,0,0,0,2,2H19a2.006,2.006,0,0,0,2-2V5A2.006,2.006,0,0,0,19,3Z"
              transform="translate(-3 -3)"
            />
          </svg>
          Logout
        </div>
      </div>
    </div>
  );
};
