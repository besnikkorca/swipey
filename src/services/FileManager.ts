import storage from "@react-native-firebase/storage";
export default {
  getFileDownloadUrl(path: string) {
    const reference = storage().ref(path);
    return reference.getDownloadURL();
  },
};
