


import { CHANGEINPUT } from "../actions";

export default (state = "阿伟死了", action) => {

    switch (action.type) {
        case CHANGEINPUT:
            return action.val
            break


        default:
            return state;
            break;
    }
}