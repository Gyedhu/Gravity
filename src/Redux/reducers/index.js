import { combineReducers } from "redux";
import user from "./user";
import process from "./process";
import code from "./code";
import route from "./route";

export default combineReducers({ user, process, code, route });
