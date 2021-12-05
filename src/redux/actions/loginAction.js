import { types } from "../types/types";
import { getAuth, signInWithPopup } from "firebase/auth";
import { google, facebook, db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

export const login = (name, phone, image) => {
  return {
    type: types.login,
    payload: {
      name,
      phone,
      image,
      logged: true,
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

export const loginPhoneAndPassword = (phone, password) => {
  return async (dispatch) => {
    const docRef = collection(db, "users");
    const getData = await getDocs(docRef);

    getData.forEach((doc) => {
      //doc.data() is never undefined for query doc snapshots

      //console.log(doc.data().phone);

      if (doc.data().phone === phone && doc.data().password === password) {
        dispatch(login(doc.data().name, doc.data().phone, doc.data().image));
      }

      //console.log(getData.data());
    });
  };
};
