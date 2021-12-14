import { types } from "../types/types";

const initialValues = () => {
  //console.log(JSON.stringify(localStorage.getItem("logged")))
  //console.log();
  if (!JSON.parse(localStorage.getItem("user"))?.user.logged) {
    return {
      logged: false,
    };
  } else {
    return {
      name: JSON.parse(localStorage.getItem("user")).user.name,
      phone: JSON.parse(localStorage.getItem("user")).user.phone,
      email: JSON.parse(localStorage.getItem("user")).user.email,
      image: JSON.parse(localStorage.getItem("user")).user.image,
      logged: true,
    };
  }
};

export const loginReducer = (state = initialValues(), action) => {
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
