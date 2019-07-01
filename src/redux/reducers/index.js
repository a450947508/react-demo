

import { combineReducers } from 'redux';
import count from "./count";
import city from "./city";
import word from "./word";
import qqq from "./mv";
import swipe1 from "./swipe1";
import swipe2 from "./swipe2";
import shouyelist from "./shouyelist";
import item from "./setitem";



export  const reducers = combineReducers({
    count,
    city,
    word,
    qqq,
    swipe1,
    swipe2,
    shouyelist,
    item

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