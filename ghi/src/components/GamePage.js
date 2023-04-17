import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../store/authApi";

const GamePage = () => {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);
	const [logout, result] = useLogoutMutation();

	const dispatch = useDispatch();
	const navigate = useNavigate();

	return token ? (
		<>
			<div>
				hi youre logged in {user.username} and your token is {token}
			</div>
			<button onClick={() => logout()}>Logout</button>
		</>
	) : (
		<>
			<div>you are not logged in</div>
			<button
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				onClick={() => navigate("/login")}>
				Go to login page
			</button>
			<button
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				onClick={() => navigate("/signup")}>
				Go to signup page
			</button>
		</>
	);
};

export default GamePage;
