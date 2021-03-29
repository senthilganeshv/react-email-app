import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import "./login.css";
export const Login = () => {
  const [userLogin, setUserLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const auth = useAuth();
  if (auth.user && auth.user.isAuthenticated) {
    return <Redirect to="/mail/inbox" />;
  }
  const handleLogin = (event) => {
    event.preventDefault();
    let data = { ...userLogin };
    if (data.email !== "") {
      data.email = String(data.email).toLowerCase();
    }
    if (data.email !== "" && data.password !== "") {
      let userInfo = auth.signin(data);
      if (!userInfo) {
        setError("Incorrect email or password.");
      }
    } else {
      setError("Please enter required fields.");
    }
  };
  const handleChange = (event) => {
    setError(false);
    const target = event.target;
    let value = target.value;
    const name = target.name;
    setUserLogin({ ...userLogin, [name]: value });
  };
  return (
    <div className="login">
      <div className="container">
        <div className="left"></div>
        <form className="log-in" autoComplete="off">
          <h4>
            <span>Sahaj</span>
          </h4>
          <p>Welcome back! Log in to your account </p>

          <div className="label">
            <input
              placeholder="Email"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={handleChange}
              value={userLogin.email || ""}
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
          <div className="error">{error ? error : " "}</div>

          <button type="submit" onClick={handleLogin}>
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
