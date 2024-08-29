import {configureStore} from '@reduxjs/toolkit'
//import { Provider } from 'react-redux'
const counterLogic=(state=0,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "add":return state+1;
        case "sub":return state-1;
        
    }
    return state;
}
const storeMyDetail=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "saveDetails":
            return action.data;
    }
    return state;
}
export const myStore = configureStore({
    reducer:{
        "counter":counterLogic,
        "myDetails":storeMyDetail
    }
})
