import React, { useEffect, useState } from "react";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import UserContext from "./UserContext";

type Props = {
  children: React.ReactChild;
};

export default function ({ children }: Props): JSX.Element {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(function (user) {
      console.log("user !!!!!!! ", user);
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
  }, []);

  return (
    <UserContext.Provider value={{ user, initializing }}>
      {children}
    </UserContext.Provider>
  );
}
