import { combineReducers } from "@reduxjs/toolkit";

import postsReducer from "./slices/postsSlice";
import userReducer from "./slices/userSlice";

const rootReducer = combineReducers({
    user: userReducer,
    posts: postsReducer,
});

export default rootReducer;
