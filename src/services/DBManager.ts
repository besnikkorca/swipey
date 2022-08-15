import firestore from "@react-native-firebase/firestore";
import { Collections } from "types/database";

export default {
  getDoc(collection: Collections, uid: string) {
    return firestore().collection(collection).doc(uid);
  },
  observeRealTime(
    collection: string,
    onNext: (snapshot: any) => void,
    onError: (error: Error) => void
  ) {
    return firestore().collection(collection).onSnapshot(onNext, onError);
  },
  addDoc(collection: Collections, uid: string, data: any) {
    return firestore()
      .collection(collection)
      .doc(uid)
      .set({
        ...data,
      });
  },
  updateDoc(collection: Collections, uid: string, data: any) {
    return firestore().collection(collection).doc(uid).update(data);
  },
};

// onNext: (snapshot: QuerySnapshot<T>) => void,
// onError?: (error: Error) => void,
