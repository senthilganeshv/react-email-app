import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { users } from "../data";

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [userList] = useLocalStorage("users", users);

  const signin = ({ email, password }) => {
    let user = userList.find(
      (user) => user.email === email && user.password === password
    );
    console.log(user);
    if (user) {
      setUser({
        email: user.email,
        isAuthenticated: true,
      });
    }

    return user;
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
