import {CREATE_STORE,DEL_STORE} from '../actions/types'

const initialState={
    stores:[],
}

export default function foo(state=initialState,action){
    switch(action.type){
        case CREATE_STORE:
            state.stores.push(action.payload)
            console.log(action.payload);
            return{
                ...state,
            }
        case DEL_STORE:
            console.log(action);
            var x=state.stores.filter((item,index)=>{
                return index!=action.payload
            })
            console.log(x);
            return{
                ...state,
                stores:x
            }
        default:
            return state
    }
}