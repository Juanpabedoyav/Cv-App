import { types } from "../types/types";

const initialValues = () => {
  //console.log(JSON.stringify(localStorage.getItem("logged")))
  if (!JSON.parse(localStorage.getItem("logged"))) {
    return {
      logged: false,
    };
  } else {
    return {
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
