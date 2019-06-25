
import { COUNTDESC } from "../actions";


export default (state=1901,action)=>{

    switch(action.type){

        case "COUNTADD":
       
        return  ++state
        break;

        case "countadd" :       
        return state+=action.num
        break;

        case  COUNTDESC:
        return  state-=action.num
        break;
        
        default:
        return state;
        break;
    }
}