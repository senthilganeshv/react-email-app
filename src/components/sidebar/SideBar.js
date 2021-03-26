import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";
export const SideBar = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active" exact>
              Dashboards
            </NavLink>
          </li>
          <li>
            <NavLink to="/layouts" activeClassName="active">
              Layouts
            </NavLink>
          </li>
          <li>
            <NavLink to="/graphs" activeClassName="active">
              Graphs
            </NavLink>
          </li>
          <li>
            <div
              href="#"
              onClick={() => setActiveMenu(!activeMenu)}
              className={`${activeMenu ? "active" : ""}`}
            >
              <span>Mail</span>
            </div>
            <ul className={`${activeMenu ? "active-menu" : "nested-menu"}`}>
              <li className="sub-active">
                <NavLink to="/mail/inbox" activeClassName="">
                  Inbox
                </NavLink>
              </li>
              <li>Email view</li>
              <li>Compose email</li>
              <li>Email templates</li>
            </ul>
          </li>
          <li>
            <NavLink to="/metrics" activeClassName="active">
              Metrics
            </NavLink>
          </li>
          <li>
            <NavLink to="/widgets" activeClassName="active">
              Widgets
            </NavLink>
          </li>
          <li>
            <NavLink to="/forms" activeClassName="active">
              Forms
            </NavLink>
          </li>
          <li>
            <NavLink to="/appviews" activeClassName="active">
              App Views
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
