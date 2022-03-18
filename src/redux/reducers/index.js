//REDUCERS COMBINER
import { combineReducers } from "redux";
import { composersReducer } from "./composersReducer";
import { toggleReducer } from "./toggleReducer";
import { worksReducer } from "./worksReducer";
import { explorerReducer } from "./explorerReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  composers: composersReducer,
  works: worksReducer,
  toggle: toggleReducer,
  explorer: explorerReducer,
  search: searchReducer,
});

export default rootReducer;
