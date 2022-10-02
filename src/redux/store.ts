import { configureStore } from "@reduxjs/toolkit";
import config from "../pages/QuizConfiguration/QuizConfiguration.slice";

export const store = configureStore({
  reducer: { config },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
