import { createStore } from "redux";
import combinedReducers from "../reducers/__combined-reducers__";

export const store = createStore(combinedReducers);

export default store;
