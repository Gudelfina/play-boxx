import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUserModal } from "./DeleteUserModal";
import { selectCurrentUser, selectCurrentToken } from "../store/userSlice";
import { setUpdateUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditProfilePage() {
	const [isDeleted, setIsDeleted] = useState(true);
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState(user.first_name);
	const [lastName, setLastName] = useState(user.last_name);
	const [username, setUsername] = useState(user.username);
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState(user.email);
	const [profilePicture, setProfilePicture] = useState(user.profile_picture);

	async function updateUser() {
		const url = `${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/api/users/${user.id}`;

		const updatedProfile = {
			first_name: firstName,
			last_name: lastName,
			username,
			password,
			email,
			profile_picture: profilePicture,
		};

		const fetchConfig = {
			method: "PUT",
			body: JSON.stringify(updatedProfile),
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		};

		try {
			const response = await fetch(url, fetchConfig);

			if (response) {
				console.log("User profile updated");
			} else {
				throw new Error(
					"Error occurred while updating the user. Try again later"
				);
			}
		} catch (e) {
			console.error("Error occurred:", e.message);
		}
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (username || email) {
			const response = await fetch(
				`${process.env.REACT_APP_PLAYBOXX_SERVICE_API_HOST}/api/users`
			);
			const data = await response.json();
			for (let db of data) {
				if (user.id !== db.id.toString()) {
					if (db.username === username || db.email === email) {
						toast.error("Username or email already exists", {
							position: "bottom-right",
							autoClose: 4000,
							closeOnClick: true,
							pauseOnHover: true,
							draggable: true,
						});
						return;
					}
				}
			}
		}
		updateUser();
		dispatch(
			setUpdateUser({
				id: user.id,
				first_name: firstName,
				last_name: lastName,
				username: username,
				email: email,
				profile_picture: profilePicture,
			})
		);
		navigate("/profile");
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						value={firstName}
						name="first_name"
						type="text"
						onChange={(e) => setFirstName(e.target.value)}></input>
					<label htmlFor="first_name">First Name</label>
				</div>
				<div>
					<input
						value={lastName}
						name="last_name"
						type="text"
						onChange={(e) => setLastName(e.target.value)}></input>
					<label htmlFor="last_name">Last Name</label>
				</div>
				<div>
					<input
						value={username}
						name="username"
						type="text"
						onChange={(e) => setUsername(e.target.value)}></input>
					<label htmlFor="username">Username</label>
				</div>
				<div>
					<input
						name="password"
						type="password"
						required
						onChange={(e) => setPassword(e.target.value)}></input>
					<label htmlFor="password">New/Old Password</label>
				</div>
				<div>
					<input
						value={email}
						name="email"
						type="text"
						onChange={(e) => setEmail(e.target.value)}></input>
					<label htmlFor="email">Email</label>
				</div>
				<div>
					<input
						value={profilePicture}
						name="profile_picture"
						type="text"
						onChange={(e) => setProfilePicture(e.target.value)}></input>
					<label htmlFor="profile_picture">Profile Picture</label>
				</div>
				<button
					className="bg-red-600 text-white active:bg-red-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
					type="submit">
					Edit Profile
				</button>
			</form>
			<DeleteUserModal
				isDeleted={isDeleted}
				setIsDeleted={setIsDeleted}
				scoreId={user.id}
			/>
		</>
	);
}
