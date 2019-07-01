


import { SETITEM } from "../actions";


const defaultState={
    item:[]
}



export default (state=defaultState,action)=>{

    switch(action.type){


        case  SETITEM:
        return  {...state,item:action.item}
        break;
        
        default:
        return state;
        break;
    }
}