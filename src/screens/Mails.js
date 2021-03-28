import { Switch, Route, Redirect } from "react-router-dom";

import { MailSideBar, MailsContainer } from "../components";
import { MailView } from "../components/mail-view";

import "./mails.css";
export const Mails = () => {
  return (
    <div className="mails">
      <MailSideBar />
      <Switch>
        <Route path="/mail/view/:id">
          <MailView />
        </Route>
        <Route path="/mail/:mailFolder">
          <MailsContainer />
        </Route>
        <Route path="/mail/">
          <Redirect to="/mail/inbox" />
        </Route>

        <Route path="*">
          <div>Sorry, looks like you took the wrong way.</div>
          <div>Let us guid you back!</div>
        </Route>
      </Switch>
    </div>
  );
};
