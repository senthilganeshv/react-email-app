import { Switch, Route } from "react-router-dom";

import { MailSideBar, MailsContainer, ComposeEmail } from "../components";
import { PrivateRoute } from "../components";
import { ProvideMails } from "../context/MailsContext";

import "./mails.css";
export const Mails = () => {
  return (
    <ProvideMails>
      <div className="mails">
        <MailSideBar />
        <Switch>
          <Route path="/mail/compose">
            <ComposeEmail />
          </Route>
          <Route path="/mail/:mailFolder">
            <MailsContainer />
          </Route>
        </Switch>
      </div>
    </ProvideMails>
  );
};
