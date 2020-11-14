import { combineReducers } from "redux";
import user from "./user";
import process from "./process";
import write from "./write";
import route from "./route";

export default combineReducers({ user, process, write, route });
