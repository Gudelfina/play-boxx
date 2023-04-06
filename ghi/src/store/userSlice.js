import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: {},
	token: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload.user;
			state.token = payload.access_token;
		},
		logOut: () => initialState,
	},
});

export const { setUser, logOut } = userSlice.actions;

export default userSlice.reducer;

export const selectCurrentUser = (state) =>
	state.user.user ? state.user.user : {};
export const selectCurrentToken = (state) => state.user.token;
