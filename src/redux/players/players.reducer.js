import {types} from "./players.types";
import {addRolUtil,createRolPlayerUtil} from "./players.utils";

const initialState = {
    rols:[],
    players:[],
    count:0
}

const playerReducer = (state = initialState, {type,payload})=>{
    switch (type){
        case types.ADD_ROL:
            return {...state,rols:addRolUtil(payload),count: state.rols.length}
        case types.CREATE_ROL_PLAYER:
             return {...state,...createRolPlayerUtil(state.rols,state.players,payload)};
        default:
            return state
    }
}

export default playerReducer;