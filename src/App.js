import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "./screens";
import { ProvideAuth } from "./context/AuthContext";

import "./App.css";
import { PrivateRoute } from "./components";
const App = () => {
  return (
    <Router>
      <ProvideAuth>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </ProvideAuth>
    </Router>
  );
};

export default App;
