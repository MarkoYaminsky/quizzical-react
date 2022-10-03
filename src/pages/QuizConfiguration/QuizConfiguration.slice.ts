import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../../redux";
import { IQUestionOptions } from "../../types";

const initialState: IQUestionOptions = {questionsAmount: "0", difficulty: null};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    submitConfiguration: (state, action: PayloadAction<IQUestionOptions>) => {
      state = action.payload;
      return state;
    },
  }
});

export const getQuizConfiguration = (state: RootState) => state.config;
export const { submitConfiguration } = configSlice.actions;
export default configSlice.reducer;