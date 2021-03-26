import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { users } from "../data";

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [userList] = useLocalStorage("users", users);

  const signin = ({ email, password }) => {
    let userInfo = userList.find(
      (user) => user.email === email && user.password === password
    );
    if (userInfo) {
      setUser({
        email: userInfo.email,
        isAuthenticated: true,
      });
    }

    return userInfo;
  };
  const signout = () => {
    return setUser(false);
  };

  return {
    user,
    signin,
    signout,
  };
};

export default useProvideAuth;
