import { useAuth0 } from "@auth0/auth0-react";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [currentUser, setCurrentUser] = useState(null);
  // console.log(user);
  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("/api/user", {
        method: "POST",
        body: JSON.stringify({ email: user.email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      // console.log(data);
      if (data.status === 200) {
        setCurrentUser(data.data);
      }
      if (data.status === 404) {
        const res = await fetch("/api/adduser", {
          method: "POST",
          body: JSON.stringify({ email: user.email }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const addedUser = await res.json();
        console.log(addedUser);
        setCurrentUser(addedUser.data);
      }
    };
    if (user) getUser();
  }, [isAuthenticated]);
  // console.log(currentUser);
  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
