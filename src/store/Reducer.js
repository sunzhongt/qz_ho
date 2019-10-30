import {combineReducers} from 'redux';

import {reducer as homeReducer} from "../Pages/home/store";
import {reducer as meReducer} from "../Pages/home/home_children/me/store";
import {reducer as studentReducer} from "../Pages/home/home_children/studentContent/store";

 
const reducer = combineReducers({
    home:homeReducer,
    me:meReducer,
    student:studentReducer
})

export default reducer;
