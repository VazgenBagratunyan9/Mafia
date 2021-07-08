import {types} from "./players.types";

export const addRol = (rol)=>{
    return {
        type:types.ADD_ROL,
        payload:rol
    }
}

export const createRolPlayer = (playerInfo)=>{
    return {
        type:types.CREATE_ROL_PLAYER,
        payload:playerInfo
    }
}

export const create = ()=>{
    return {
        type:types.CREATE,
        payload:''
    }
}