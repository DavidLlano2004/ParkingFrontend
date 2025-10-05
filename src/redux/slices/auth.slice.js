import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginCase: (state, action) => {
      state.id = action.payload.id;
      state.isLogged = true;
    },
    singOffCase: () => initialState,
  },
});

export const { loginCase, singOffCase } = authSlice.actions;
export default authSlice.reducer;
