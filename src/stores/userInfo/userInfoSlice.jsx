import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    name: "",
    email: "",
    phone: "",
    address: "",
  },
};

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      return { ...state, userInfo: { ...state.userInfo, ...action.payload } };
    },
    clearUserInfo: (state) => {
      return { ...state, userInfo: initialState.userInfo };
    },
  },
});

export const getUserInfo = (state) => state.userInfo.userInfo;

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
