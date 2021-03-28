import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./login.css";
export const Login = () => {
  const [userLogin, setUserLogin] = useState({});
  const [error, setError] = useState(null);
  const auth = useAuth();
  if (auth.user && auth.user.isAuthenticated) {
    return <Redirect to="/mail/inbox" />;
  }
  const handleLogin = (event) => {
    event.preventDefault();
    let userInfo = auth.signin(userLogin);
    console.log(userInfo);
    if (!userInfo) {
      console.log("Error");
      setError("Incorrect email or password");
    }
  };
  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUserLogin({ ...userLogin, [name]: value });
  };
  console.log(error);
  return (
    <div className="login">
      <div className="container">
        <div className="left"></div>
        <form className="log-in" autoComplete="off">
          <h4>
            <span>Sahaj</span>
          </h4>
          <p>Welcome back! Log in to your account </p>
          {error ? <div className="error"></div> : null}

          <div className="label">
            <input
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={handleChange}
              value={userLogin.email || ""}
              className={error && "error"}
            />
          </div>
          <div className="label">
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              onChange={handleChange}
              value={userLogin.password || ""}
            />
          </div>

          <button type="submit" onClick={handleLogin}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
