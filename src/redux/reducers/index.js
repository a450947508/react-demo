

import { combineReducers } from 'redux';
import count from "./count";
import city from "./city";
import word from "./word";
import qqq from "./mv";


export  const reducers = combineReducers({
    count,
    city,
    word,
    qqq
  })
  
  



// export const reducers =(state=defaultState,action)=>{
//     console.log(action);
//     switch(action.type){

//         case "COUNTADD":
//         state.count++;
//         return {...state,...{count:state.count}};
//         break;

//         case "countadd" :       
//         return {...state,...{count:state.count+action.num}}

//         case  "countdesc":
//         return {...state,...{count:state.count-action.num}}
        
//         default:
//         return state;
//         break;
//     }
// }