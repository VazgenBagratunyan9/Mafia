import { combineReducers } from "redux";

// import { persistReducer } from "redux-persist";
//
// import { authPersistConfig, shopPersistConfig } from "./persist.config";

// REDUCERS

import playerReducer from 'src/redux/players/players.reducer'


const rootReducer = combineReducers({
    players:playerReducer
});

export default rootReducer;
