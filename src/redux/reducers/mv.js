
const defaultState={
    mv:[]
}


export default (state=defaultState,action)=>{
    console.log(action);
    switch(action.type){

        case "clickshuju":
        console.log(action.mv)
        console.log("666666")
        return  {...state,mv:action.mv}
        
        break;

      
        default:
        return state;
        break;
    }
}