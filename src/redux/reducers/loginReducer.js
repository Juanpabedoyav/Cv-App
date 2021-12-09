import { types } from "../types/types";

/* const initialValues = () => {
  //console.log(JSON.stringify(localStorage.getItem("logged")))
  console.log(JSON.parse(localStorage.getItem("user")))
  if (!JSON.parse(localStorage.getItem("user"))) {
    return {
      logged: false,
    };
  } else {
    return {      
      logged: true,
    };
  }
}; */

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        phone: action.payload.phone,
        email: action.payload.email,
        image: action.payload.image,
        logged: true,
      };
    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
