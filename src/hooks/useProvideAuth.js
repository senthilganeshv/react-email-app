import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { users } from "../data";

const useProvideAuth = () => {
  const [userInfo, setUserInfo] = useLocalStorage("user-info");
  const [userList] = useLocalStorage("users", users);

  const [user, setUser] = useState(() => userInfo);
  useEffect(() => {
    setUser(userInfo);
  }, [userInfo]);

  const signin = ({ email, password }) => {
    let userInfo = userList.find(
      (user) => user.email === email && user.password === password
    );
    if (userInfo) {
      let userObj = {
        email: userInfo.email,
        isAuthenticated: true,
      };
      setUser(userObj);
      setUserInfo(userObj);
    }
    return userInfo;
  };
  const signout = () => {
    setUser(null);
    setUserInfo(null);
    return true;
  };

  return {
    user,
    signin,
    signout,
  };
};

export default useProvideAuth;
