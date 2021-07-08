import {types} from "./players.types";
import {addRolUtil,createRolPlayerUtil} from "./players.utils";

const initialState = {
    rols:[],
    players:[]
}

const playerReducer = (state = initialState, {type,payload})=>{
    switch (type){
        case types.ADD_ROL:
            return {...state,rols:addRolUtil(payload)}
        case types.CREATE_ROL_PLAYER:
             return createRolPlayerUtil(state.rols,state.players,payload);
        case types.CREATE:
                alert('bay;us')
        default:
            return state
    }
}

export default playerReducer;