import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "../../../entities/post/api/postsApi";
import postReducer from "../../../entities/post/model/slice/postsSlice"

export const store = configureStore({
    reducer: {
        [postsApi.reducerPath]: postsApi.reducer,
        posts: postReducer,
    },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      postsApi.middleware,
    ),
});