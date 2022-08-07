import auth from "@react-native-firebase/auth";

export default {
  signUp(email: string, password: string) {
    return auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          console.log("This email address is already in use!");
        }

        if (err.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.log("err - ", err);
        console.log("err.message - ", err.message);
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
        console.error(err);
      });
  },
  signOut() {
    return auth().signOut();
  },
};
