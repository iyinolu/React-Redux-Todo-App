import filtersReducers from "./features/filters/filtersSlice";
import todosReducers from "./features/todos/todoSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todosReducers,
  filters: filtersReducers
});

export default rootReducer;
