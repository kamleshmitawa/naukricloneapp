import { combineReducers } from "redux";
import jobsReducer from "./jobs.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({
 login: loginReducer,
 jobs: jobsReducer
});
