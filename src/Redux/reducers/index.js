import { combineReducers } from "redux";
import user from "./user";
import process from "./process";
import code from "./code";

export default combineReducers({ user, process, code });
