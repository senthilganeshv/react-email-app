import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const auth = useAuth();
  return (
    <Route {...rest}>
      {auth.user && auth.user.isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      )}
    </Route>
  );
};
