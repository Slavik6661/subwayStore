import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { counterReducer } from "./store";
import { modalReducer } from "./modalMenu";

// const rootReduce = combineReducers({});
const rootReduce = combineReducers({
  modalReducer,
});
const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
