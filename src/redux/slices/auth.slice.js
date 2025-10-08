import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  isLogged: false,
  rol:""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginCase: (state, action) => {
      state.id = action.payload.id;
      state.isLogged = true;
      state.rol = action.payload.rol;
    },
    singOffCase: () => initialState,
  },
});

export const { loginCase, singOffCase } = authSlice.actions;
export default authSlice.reducer;
