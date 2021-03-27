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
          </Switch>
        </main>
      </div>
    </ProvideMails>
  );
};
