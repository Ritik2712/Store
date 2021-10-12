import {CREATE_STORE,DEL_STORE} from './types'

export const createStore=(store)=>dispatch=>{
    dispatch({
        type:CREATE_STORE,
        payload:store
    })
    console.log("yehh");
}

export const deleteStore=(index)=>dispatch=>{
    dispatch({
        type:DEL_STORE,
        payload:index
    })
}
