import { db } from "../../firebase/firebase";
import { doc, updateDoc, getDocs, collection } from "@firebase/firestore";

export const updatePassword = (phone, password2) => {
  return async (dispatch) => {
    const getData = await getDocs(collection(db, "users"));
    let docId = "";
    getData.forEach((doc) => {
      if (phone === doc.data().phone) docId = doc.id;
    });

    const docRef2 = doc(db, "users", docId);

    await updateDoc(docRef2, {
      password: password2,
    });
  };
};
