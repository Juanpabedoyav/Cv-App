import {types} from '../types/types'

export const PdfAction =(form)=>{
    return{
        type: types.formcv1,
        payload: form
    }
}

export const PdfAction2 =(form)=>{
    return{
      type: types.formcv2,
      payload: form
    }
}