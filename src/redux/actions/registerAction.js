import { types } from "../types/types";
// import { useDispatch } from "react-redux";
import { db } from "../../firebase/firebase";
import { addDoc, collection } from "@firebase/firestore";

export const register = (user) => {
  return {
    type: types.registro,
    payload: user,
  };
};

export const registerAction = (user) => {
  return (dispatch) => {
    addDoc(collection(db, "users"), user)
      .then((resp) => {
        //console.log(resp);
        dispatch(register(user));
      })
      .catch((err) => console.log(err.message));
  };
};
