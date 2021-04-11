import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import {
  sayHiOnDispatch,
  includeMeaningOfLife
} from "./exampleAddons/enhancers";
import { print1, print2, print3 } from "./exampleAddons/middleware";

let preloadedState;

const persistedTodosString = localStorage.getItem("todos");
const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);
const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// Custom middleware
const delayedHello = (storeAPI) => (next) => (action) => {
  if (action.type === "todo/todoAdded") {
    setTimeout(() => {
      console.log("hello");
    }, 5000);
  }
  return next(action);
};

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  };
}

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(delayedHello)
);

export default store;
