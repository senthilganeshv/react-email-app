import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Login } from "./screens";
import { ProvideAuth } from "./context/AuthContext";

import "./App.css";
import { PrivateRoute } from "./components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { categories, labels } from "./data";

const App = () => {
  useLocalStorage("categories", categories);
  useLocalStorage("labels", labels);

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
