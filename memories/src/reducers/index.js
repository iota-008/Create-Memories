//* combining posts and users reducers

import { combineReducers } from "redux";

import posts from "./Posts";
import users from "./Users";
import comments from "./Comments";
import bookmarks from "./Bookmarks";

export const reducers = combineReducers({ posts: posts, users: users, comments: comments, bookmarks: bookmarks });
