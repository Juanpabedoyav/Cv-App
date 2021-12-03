import { types } from "../types/types";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { google, facebook, db } from "../../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

export const login = (name, phone, email, image) => {
  return {
    type: types.login,
    payload: {
      name,
      phone,
      email,
      image,
    },
  };
};

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        //    console.log(user)
        //    console.log(user.displayName)
        dispatch(
          login(user.displayName, user.phoneNumber, user.email, user.photoURL)
        );
      })
      .catch((error) => console.log(error));
  };
};
export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        dispatch(
          login(user.displayName, user.phoneNumber, user.email, user.photoURL)
        );
      })
      .catch((error) => console.log(error));
  };
};

export const loginPhoneAndPassword = () => {
  return async (dispatch) => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
};
