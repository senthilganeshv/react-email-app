import dashboard from "../../assets/dashboard.svg";
import menu from "../../assets/menu.svg";
import notification from "../../assets/notifications.svg";
import notificationNone from "../../assets/notifications-none.svg";
import email from "../../assets/email.svg";
import emailNone from "../../assets/email-none.svg";
import logout from "../../assets/logout.svg";
import { useAuth } from "../../context/AuthContext";

import "./topbar.css";

export const TopBar = () => {
  const auth = useAuth();

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
        <img
          src={notification}
          className="notification-icon"
          alt="notification"
        />
        <img src={email} className="notification-icon" alt="notification" />
        <div className="logout" onClick={auth.signout}>
          <img src={logout} className="logout-icon" alt="notification" />
          Logout
        </div>
      </div>
    </div>
  );
};
