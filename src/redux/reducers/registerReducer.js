import { types } from "../types/types";

const initialState = {
  users: [],
};
export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.registro:
      return {
        users: [action.payload],
      };
    default:
      return {
        state,
      };
  }
};
