import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore'
import { Collections } from 'types/database'

export default {
  findDoc<T extends FirebaseFirestoreTypes.DocumentData>(
    collection: Collections,
    uid: string
  ) {
    return firestore().collection<T>(collection).doc(uid)
  },
  getDoc<T extends FirebaseFirestoreTypes.DocumentData>(
    collection: Collections,
    uid: string
  ) {
    return this.findDoc<T>(collection, uid).get()
  },
  getDocData<T extends FirebaseFirestoreTypes.DocumentData>(
    collection: Collections,
    uid: string
  ) {
    return this.getDoc<T>(collection, uid).then((doc) => doc.data())
  },
  observeRealTime(
    collection: string,
    onNext: (snapshot: any) => void,
    onError: (error: Error) => void
  ) {
    return firestore().collection(collection).onSnapshot(onNext, onError)
  },
  addDoc(collection: Collections, uid: string, data: any) {
    return firestore()
      .collection(collection)
      .doc(uid)
      .set({
        ...data,
      })
  },
  updateDoc(collection: Collections, uid: string, data: any) {
    return firestore().collection(collection).doc(uid).update(data)
  },
}

// onNext: (snapshot: QuerySnapshot<T>) => void,
// onError?: (error: Error) => void,
