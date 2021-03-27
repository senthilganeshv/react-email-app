import { Switch, Route, Redirect } from "react-router-dom";

import { MailSideBar, MailsContainer, ComposeEmail } from "../components";

import "./mails.css";
export const Mails = () => {
  return (
    <div className="mails">
      <MailSideBar />
      <Switch>
        <Route path="/mail/:mailFolder">
          <MailsContainer />
        </Route>
        <Route path="/mail/compose">
          <ComposeEmail />
        </Route>
        <Route path="/mail/">
          <Redirect to="/mail/inbox" />
        </Route>
      </Switch>
    </div>
  );
};
