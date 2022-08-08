import auth from "@react-native-firebase/auth";

export default {
  logOut() {
    return auth().signOut();
  },
  signUp(email: string, password: string) {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          console.log("This email address is already in use!");
        }

        if (err.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        throw err;
      });
  },
  login(email: string, password: string) {
    return auth().signInWithEmailAndPassword(email, password);
  },
  loginAnonymous() {
    return auth()
      .signInAnonymously()
      .catch((err) => {
        if (err.code === "auth/operation-not-allowed") {
          console.log("Enable anonymous in your firebase console");
        }
        throw err;
      });
  },
  signOut() {
    return auth().signOut();
  },
};