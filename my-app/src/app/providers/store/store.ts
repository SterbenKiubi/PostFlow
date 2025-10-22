import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/post/api/postsApi";
import postReducer from "../../../entities/post/model/slice/postsSlice";
import { usersApi } from "../../../entities/user/api/usersApi";
import usersReducer from "../../../entities/user/model/slice/usersSlice";
import { commentsApi } from "../../../entities/comment/api/commentsApi";

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        posts: postReducer,
        [usersApi.reducerPath]: usersApi.reducer,
        users: usersReducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
      usersApi.middleware,
      commentsApi.middleware,
    ),
});