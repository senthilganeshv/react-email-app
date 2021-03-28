import { Switch, Route } from "react-router-dom";
import { TopBar, SideBar } from "../components";
import { Mails } from "./Mails";
import { ProvideMails } from "../context/MailsContext";

import "./home.css";

export const Home = () => {
  return (
    <ProvideMails>
      <div className="app">
        <SideBar />
        <main>
          <TopBar />
          <Switch>
            <Route path="/mail/">
              <Mails />
            </Route>
            <Route path="*">
              <div>Sorry, looks like you took the wrong way.</div>
              <div>Let us guide you back!</div>
            </Route>
          </Switch>
        </main>
      </div>
    </ProvideMails>
  );
};
