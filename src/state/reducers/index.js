// * N2 Here we will combine all of our reducers

import { combineReducers } from "redux";
import accountReducer from './accountReducer'

const reducers = combineReducers({
    //* Теперь все данные из accountReducer будут лежать в state.account
    account: accountReducer, 
})

export default reducers