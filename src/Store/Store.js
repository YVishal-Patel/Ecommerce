import allReducer from "../Reducer";
import { createStore } from "redux";

const store = createStore(allReducer);

export default store;