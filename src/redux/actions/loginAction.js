import { types } from "../types/types";
import { getAuth, signInWithPopup } from "firebase/auth";
import { google, facebook, db } from "../../firebase/firebase";
import { getDocs, collection } from "firebase/firestore";

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
    const docRef = collection(db, "users");
    const getData = await getDocs(docRef);
    // const dataa = getData.data();
    // if(dataa === undefined) console.log('no existe')
    console.log(getData);
    // const querySnapshot = await getDocs(collection(db, "cities"));
  };
};
