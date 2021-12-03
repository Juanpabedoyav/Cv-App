import {types} from '../types/types'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { google, facebook } from '../../firebase/firebase'

export const login = (name, number, email, image) =>{
    return{
        type:types.login,
        payload:{
            name,
            number,
            email,
            image,
        }

    }
}

export const loginGoogle = () => {

  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
    .then(({user}) => {
       console.log(user)
    //    console.log(user.displayName)
       dispatch(login(user.displayName, user.phoneNumber, user.email, user.photoURL))

    })
    .catch(error => console.log(error))

  }

  
}
export const loginFacebook = () => {
    
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
      .then(({user}) => {
         console.log(user);
         dispatch(login(user.displayName, user.phoneNumber, user.email, user.photoURL))

      })
      .catch(error => console.log(error))
  
    }
    
  }

export const loginPhoneAndPassword = (number, password) =>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth , number, password)
        .then(({user})=>{
            console.log(user)
    
            // dispatch(login(user.email, user.displayName))
    
        }).catch(e=>{
            console.log(e);
        })
       
    }
    }

