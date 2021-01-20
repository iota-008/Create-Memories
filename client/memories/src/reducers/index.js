import { combineReducers } from "redux";

import posts from "./Posts";
import users from "./Users";

export const reducers = combineReducers({ posts: posts, users: users });
