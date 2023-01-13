import { combineReducers, createStore } from "redux";
import { counterReducer } from "./store";

// const rootReduce = combineReducers({});

const store = createStore(counterReducer);

export default store;
