import speedReducer from "./speed";
import totalTimeReducer from "./totalTime";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  speedReducer,
  totalTimeReducer,
});

export default rootReducer;
