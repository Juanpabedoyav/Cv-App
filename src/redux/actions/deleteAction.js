import { db } from "../../firebase/firebase";
import {
  getDocs,
  collection,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { logout } from "./loginAction";

export const deleteAsync = (phone) => {
  return async (dispatch) => {
    const estCollection = collection(db, "users");
    const q = query(estCollection, where("phone", "==", phone));

    const datos = await getDocs(q);
    datos.forEach((docu) => {
      deleteDoc(doc(db, "users", docu.id));
      //console.log(docu)
    });

    dispatch(logout());
  };
};
