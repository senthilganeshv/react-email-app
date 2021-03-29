import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useUserMails } from "../../context/MailsContext";
import { useAuth } from "../../context/AuthContext";

import "./sidebar.css";
export const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const userMails = useUserMails();
  const auth = useAuth();
  return (
    <div className="sidebar">
      <div>
        <div className="profile">
          <div>
            <img
              src="https://randomuser.me/api/portraits/med/men/67.jpg"
              alt=""
              className="avatar"
            />
          </div>
          <div className="profile-info">
            <span className="profile-name">{`${auth.user.name}`}</span>
            <span className="profile-role">
              {`${auth.user.role}`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="5"
                viewBox="0 0 10 5"
              >
                <path
                  id="ic_arrow_drop_down_24px"
                  d="M7,10l5,5,5-5Z"
                  transform="translate(-7 -10)"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="collapsed-content">IN+</div>
      </div>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              activeClassName="active"
              exact
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <path
                    id="ic_apps_24px"
                    d="M4,8H8V4H4Zm6,12h4V16H10ZM4,20H8V16H4Zm0-6H8V10H4Zm6,0h4V10H10ZM16,4V8h4V4ZM10,8h4V4H10Zm6,6h4V10H16Zm0,6h4V16H16Z"
                    transform="translate(-4 -4)"
                  />
                </svg>
                <span className="menu-text">Dashboards</span>
              </div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.41"
                  height="10"
                  viewBox="0 0 7.41 12"
                >
                  <path
                    id="ic_chevron_left_24px"
                    d="M15.41,7.41,14,6,8,12l6,6,1.41-1.41L10.83,12Z"
                    transform="translate(-8 -6)"
                  />
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/layouts"
              activeClassName="active"
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  fit=""
                  height="100%"
                  width="100%"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  ></path>
                </svg>
                <span className="menu-text">Layouts</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/graphs"
              activeClassName="active"
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                >
                  <path
                    id="ic_timeline_24px"
                    d="M23,8a2.006,2.006,0,0,1-2,2,1.7,1.7,0,0,1-.51-.07l-3.56,3.55A1.766,1.766,0,0,1,17,14a2,2,0,0,1-4,0,1.766,1.766,0,0,1,.07-.52l-2.55-2.55a1.966,1.966,0,0,1-1.04,0L4.93,15.49A1.7,1.7,0,0,1,5,16a2,2,0,1,1-2-2,1.7,1.7,0,0,1,.51.07L8.07,9.52A1.766,1.766,0,0,1,8,9a2,2,0,0,1,4,0,1.766,1.766,0,0,1-.07.52l2.55,2.55a1.966,1.966,0,0,1,1.04,0l3.55-3.56A1.7,1.7,0,0,1,19,8a2,2,0,0,1,4,0Z"
                    transform="translate(-1 -6)"
                  />
                </svg>
                <span className="menu-text">Graphs</span>
              </div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.41"
                  height="10"
                  viewBox="0 0 7.41 12"
                >
                  <path
                    id="ic_chevron_left_24px"
                    d="M15.41,7.41,14,6,8,12l6,6,1.41-1.41L10.83,12Z"
                    transform="translate(-8 -6)"
                  />
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mail/"
              onClick={() => setActiveMenu(!activeMenu)}
              activeClassName="active"
            >
              <div>
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
                <span className="menu-text">Mail</span>
              </div>
              <span className="menu-text ">
                {userMails.inboxUnreadCount > 0 && (
                  <span className="count">{`${userMails.inboxUnreadCount}/${userMails.inboxTotal}`}</span>
                )}
              </span>
            </NavLink>
            <ul className={`${activeMenu ? "active-menu" : "nested-menu"}`}>
              <li className="sub-active">
                <NavLink to="/mail/inbox" activeClassName="active">
                  Inbox
                </NavLink>
              </li>
              <li>Email view</li>
              <li>Compose email</li>
              <li>Email templates</li>
            </ul>
          </li>
          <li>
            <NavLink
              to="/metrics"
              activeClassName="active"
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="ic_donut_small_24px"
                    d="M11,9.16V2a10.056,10.056,0,0,0,0,20V14.84A3.246,3.246,0,0,1,9,12,3.246,3.246,0,0,1,11,9.16ZM14.86,11H22a9.844,9.844,0,0,0-9-9V9.16A2.807,2.807,0,0,1,14.86,11ZM13,14.84V22a9.844,9.844,0,0,0,9-9H14.86A2.807,2.807,0,0,1,13,14.84Z"
                    transform="translate(-2 -2)"
                  />
                </svg>
                <span className="menu-text">Metrics</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/widgets"
              activeClassName="active"
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                >
                  <path
                    id="ic_developer_board_24px"
                    d="M22,9V7H20V5a2.006,2.006,0,0,0-2-2H4A2.006,2.006,0,0,0,2,5V19a2.006,2.006,0,0,0,2,2H18a2.006,2.006,0,0,0,2-2V17h2V15H20V13h2V11H20V9ZM18,19H4V5H18ZM6,13h5v4H6Zm6-6h4v3H12ZM6,7h5v5H6Zm6,4h4v6H12Z"
                    transform="translate(-2 -3)"
                  />
                </svg>
                <span className="menu-text">Widgets</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forms"
              activeClassName="active"
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24.002"
                  viewBox="0 0 24 24.002"
                >
                  <g id="ic_border_color_24px" transform="translate(0 0.002)">
                    <path
                      id="Path_81"
                      data-name="Path 81"
                      d="M17.75,7,14,3.25l-10,10V17H7.75Zm2.96-2.96a1,1,0,0,0,0-1.41L18.37.29a1,1,0,0,0-1.41,0L15,2.25,18.75,6Z"
                    />
                    <path
                      id="Path_82"
                      data-name="Path 82"
                      d="M0,20H24v4H0Z"
                      fill="rgba(0,0,0,0.36)"
                    />
                  </g>
                </svg>
                <span className="menu-text">Forms</span>
              </div>
              <div className="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7.41"
                  height="10"
                  viewBox="0 0 7.41 12"
                >
                  <path
                    id="ic_chevron_left_24px"
                    d="M15.41,7.41,14,6,8,12l6,6,1.41-1.41L10.83,12Z"
                    transform="translate(-8 -6)"
                  />
                </svg>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/appviews"
              activeClassName="active"
              onClick={() => activeMenu === true && setActiveMenu(false)}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="20"
                  viewBox="0 0 22 20"
                >
                  <path
                    id="ic_desktop_mac_24px"
                    d="M21,2H3A2.006,2.006,0,0,0,1,4V16a2.006,2.006,0,0,0,2,2h7L8,21v1h8V21l-2-3h7a2.006,2.006,0,0,0,2-2V4A2.006,2.006,0,0,0,21,2Zm0,12H3V4H21Z"
                    transform="translate(-1 -2)"
                  />
                </svg>
                <span className="menu-text">App Views</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
