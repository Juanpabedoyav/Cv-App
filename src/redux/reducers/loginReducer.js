import { types } from "../types/types";

export const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        name: action.payload.name,
        phone: action.payload.phone,
        image: action.payload.image,
        logged: action.payload.logged,
      };
      case types.logout:
        return{
          ...action.payload,
          logged: false
        }
    default:
      return state;
  }
};
