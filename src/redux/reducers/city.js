



import { CHANGEOUT } from "../actions";



export default (state="大武汉",action)=>{
   
    switch(action.type){
        case CHANGEOUT:
        return  state=action.str
        break;


        default:
        return state;
        break;
    }
}