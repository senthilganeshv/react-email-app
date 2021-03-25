import dashboard from "../../assets/dashboard.svg";
import menu from "../../assets/menu.svg";
import notification from "../../assets/notifications.svg";
import notificationNone from "../../assets/notifications-none.svg";
import email from "../../assets/email.svg";
import emailNone from "../../assets/email-none.svg";
import logout from "../../assets/logout.svg";
import { useAuth } from "../../context/Auth";

import "./topbar.css";

export const TopBar = () => {
  const auth = useAuth();

  return (
    <div className="top-bar">
      <img src={menu} className="dashboard-icon" alt="logo" />
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
