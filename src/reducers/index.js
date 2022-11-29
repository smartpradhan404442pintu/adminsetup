import { combineReducers } from "redux";
import typeReducer from "./typeReducer";
import selectReducer from "./selectReducer";


const rootReducer = combineReducers({

      type:typeReducer,
      select:selectReducer,

});
  

export default rootReducer;