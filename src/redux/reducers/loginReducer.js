import {types} from '../types/types'

export const loginReducer = (state = {}, action) => {

  switch (action.type) {
    case types.login:
      return {
        ...state,
        name: action.payload.name,
        number: action.payload.number,
        email: action.payload.email,
        image: action.payload.image
      }      
  
    default:
      return state
  }

}