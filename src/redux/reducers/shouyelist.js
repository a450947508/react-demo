


import { GEISHOUYELIST } from "../actions";


const defaultState={
    list:[]
}



export default (state=defaultState,action)=>{

    switch(action.type){


        case  GEISHOUYELIST:
        return  {...state,list:action.list}
        break;
        
        default:
        return state;
        break;
    }
}