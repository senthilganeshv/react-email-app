import { Switch, Route } from "react-router-dom";
import { TopBar, SideBar } from "../components";
import { PrivateRoute } from "../components";
import { Mails } from "./Mails";
import "./home.css";
export const Home = () => {
  return (
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
  );
};
