import {types} from '../types/types'
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { google, facebook } from '../../firebase/firebase'

export const login = (name, phone, email, image) =>{
    return{
        type:types.login,
        payload:{
            name,
            phone,
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
    //    console.log(user)
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
         dispatch(login(user.displayName, user.phoneNumber, user.email, user.photoURL))

      })
      .catch(error => console.log(error))
  
    }
    
  }

// export const loginPhoneAndPassword = (number) =>{
//     return (dispatch)=>{
//         const auth = getAuth()
//         signInWithEmailAndPassword(auth , number)
//         .then(({user})=>{
//             console.log(user)    
//             //dispatch(login(user.email, user.displayName))
    
//         }).catch(e=>{
//             console.log(e);
//         })
       
//     }
// }

