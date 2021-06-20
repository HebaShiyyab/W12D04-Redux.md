import { combineReducers, createStore } from "redux";
import loginReducers from "./login/index";
import articleReducers from "./article/index";
import 

const reducers = combineReducers({
  loginReducers,articleReducers
});
const store = createStore(reducers);

export default store;
