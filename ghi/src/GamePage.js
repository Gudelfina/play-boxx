import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./store/userSlice";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "./store/authApi";

const GamePage = () => {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);
	const [logout, result] = useLogoutMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return token ? (
		<>
			<div>
				hi youre logged in {user.username} and your token is{token}
			</div>
			<button onClick={() => logout()}>Logout</button>
		</>
	) : (
		<>
			<div>you are not logged in</div>
			<button onClick={() => navigate("/")}>Go to login page</button>
		</>
	);
};

export default GamePage;
