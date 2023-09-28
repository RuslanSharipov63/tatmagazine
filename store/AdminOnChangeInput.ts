import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialStateType = {
  [x: string]: string;
};

const initialState: initialStateType = {
  time: "",
  magazineNumber: "",
  header: "",
  description: "",
  message: "",
  author: "",
};

const AdminOnChangeInput = createSlice({
  name: "adminonchangeinput",
  initialState,
  reducers: {
    handleChangeAction: (
      state, action: PayloadAction<{ item: string; value: string }>
    ) => {
      state[action.payload.item] = action.payload.value;
    },
  },
});

export const { handleChangeAction } = AdminOnChangeInput.actions;
export default AdminOnChangeInput.reducer;
