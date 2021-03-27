import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { users } from "../data";

const useProvideAuth = () => {
  const [userInfo] = useLocalStorage("user-info", null);
  const [userList] = useLocalStorage("users", users);

  const [user, setUser] = useState(() => userInfo);

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
