import { db } from "../firebaseContent";

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const dataCollectionRef = collection(db, "registration");



class DataServices {

  adddata = (newdata) => {
    return addDoc(dataCollectionRef, newdata);
  };

  updateData = (id, updateddata) => {
    const dataDoc = doc(db, "registration", id);
    return updateDoc(dataDoc, updateddata);
  };

  deletedata = (id) => {
    const dataDoc = doc(db, "registration", id);
    return deleteDoc(dataDoc);
  };

  getAlldatas = () => {
    return getDocs(dataCollectionRef);
  };

  getdata = (id) => {
    const dataDoc = doc(db, "registration", id);
    return getDoc(dataDoc);
  };
}

export default new DataServices();
