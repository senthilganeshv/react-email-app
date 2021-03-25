import { Switch, Route } from "react-router-dom";

import { MailSideBar, MailsContainer, ComposeEmail } from "../components";
import { PrivateRoute } from "../components";

export const Mails = () => {
  return (
    <div className="main-container">
      <MailSideBar />
      <Switch>
        <Route path="/mail/compose">
          <ComposeEmail />
        </Route>
        <Route path="/mail/">
          <MailsContainer />
        </Route>
      </Switch>
    </div>
  );
};
