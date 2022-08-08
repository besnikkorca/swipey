import React, { useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import UserContext from "./UserContext";
import { User } from "../../../src/types/user";

type Props = {
  children: React.ReactChild;
};

export default function ({ children }: Props): JSX.Element {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(function (user) {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return () => {
      return subscriber();
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, initializing }}>
      {children}
    </UserContext.Provider>
  );
}
