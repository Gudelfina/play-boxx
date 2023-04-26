import React, { useState, useEffect } from "react";
import { useSignupMutation } from "../store/authApi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import arcade from "../images/arcade.png";

export default function Signup() {
	// States for sending form data to backend for user creation
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [email, setEmail] = useState("");
	const [profilePicture, setProfilePicture] = useState("");
	const [passwordConfirmationError, setPasswordConfirmationError] =
		useState("");

	// States for show/hide password & password confirmation
	const [showPassword, setShowPassword] = useState(false);
	const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

	const [signup, result] = useSignupMutation();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (validatePassword(password, passwordConfirmation)) {
			setPasswordConfirmationError("");
			signup({
				first_name: firstName,
				last_name: lastName,
				username,
				password,
				email,
				profile_picture: profilePicture,
			});
			e.target.reset();
		}
	};

	// Toggles show/hide password and password confirmation, respectively
	const toggleShowPassword = () => {
		setShowPassword(!showPassword);
	};
	const toggleShowPasswordConfirm = () => {
		setShowPasswordConfirm(!showPasswordConfirm);
	};

	// Toast message and navigate to Landing Page if response is successful
	useEffect(() => {
		if (result.isSuccess) {
			toast.success(`Welcome, ${username}`, {
				position: "bottom-right",
				autoClose: 4000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			navigate("/");
		}
	}, [result.isSuccess, navigate, username]);

	// Validate password before sending POST request to create user
	const validatePassword = (password, passwordConfirmation) => {
		// Check if password & password confirmation is at least 8 characters and both match
		if (password.length <= 7 && password !== passwordConfirmation) {
			setPasswordConfirmationError(
				"Passwords do not match and enter a password with 8 or more characters"
			);
			return false;

			// Check if password & password confirmation is at least 8 characters
		} else if (password.length <= 7) {
			setPasswordConfirmationError(
				"Please enter a password with 8 or more characters"
			);
			return false;

			// Check if password & password confirmation both match
		} else if (password !== passwordConfirmation) {
			setPasswordConfirmationError("Passwords do not match!");
			return false;

			// Check if password & password confirmation both match
		} else if (password === passwordConfirmation) {
			return true;
		}
	};

	return (
		<div className="h-screen bg-beige/50">
			<div className="container h-full px-6 py-24">
				<div className="g-6 flex h-full items-center justify-center lg:justify-between">
					{/* Left column container with background */}
					<div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
						<img className="h-auto max-w-sm" alt="" src={arcade} />
						{/* <img
							src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
							className="w-full"
							alt="Phone image"
						/> */}
					</div>
					{/* Right column container with form */}
					<div className="md:w-8/12 lg:ml-6 lg:w-5/12">
						<form onSubmit={(e) => handleSubmit(e)}>
							{/* First name input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="text"
									name="floating_first_name"
									id="floating_first_name"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setFirstName(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_first_name"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									First Name
								</label>
							</div>
							{/* Last name input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="text"
									name="floating_last_name"
									id="floating_last_name"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setLastName(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_last_name"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Last Name
								</label>
							</div>
							{/* Username input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="text"
									name="floating_username"
									id="floating_username"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setUsername(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_username"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Username
								</label>
							</div>
							{/* Password input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<div className="text-2xl absolute top-[10px] right-3">
									{showPassword === false ? (
										<AiFillEye onClick={toggleShowPassword} />
									) : (
										<AiFillEyeInvisible onClick={toggleShowPassword} />
									)}
								</div>
								<input
									type={showPassword === false ? "password" : "text"}
									name="floating_password"
									id="floating_password"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_password"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Password
								</label>
								{passwordConfirmationError && (
									<span className="text-red-600 text-xs block mt-2">
										{passwordConfirmationError}
									</span>
								)}
							</div>
							{/* Password Confirmation input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<div className="text-2xl absolute top-[10px] right-3">
									{showPasswordConfirm === false ? (
										<AiFillEye onClick={toggleShowPasswordConfirm} />
									) : (
										<AiFillEyeInvisible onClick={toggleShowPasswordConfirm} />
									)}
								</div>
								<input
									type={showPasswordConfirm === false ? "password" : "text"}
									name="floating_password_confirmation"
									id="floating_password_confirmation"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setPasswordConfirmation(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_password_confirmation"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Password Confirmation
								</label>
							</div>
							{/* Email input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="email"
									name="floating_email"
									id="floating_email"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_email"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Email
								</label>
							</div>
							{/* Profie Picture URL input */}
							<div className="relative mb-6" data-te-input-wrapper-init>
								<input
									type="url"
									name="floating_profile_picture_url"
									id="floating_profile_picture_url"
									className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
									placeholder=" "
									onChange={(e) => setProfilePicture(e.target.value)}
									required
								/>
								<label
									htmlFor="floating_profile_picture_url"
									className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
									Profile Picture URL
								</label>
							</div>
							{/* Redirect to Login Page */}
							<div className="text-sm text-gray-500 mb-5">
								Already have an account?{" "}
								<Link
									className="hover:underline text-hoverpink after:content-['_↗']"
									to="/login">
									Login here
								</Link>
							</div>
							{/* Submit Button */}
							<button
								type="submit"
								className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
								Register
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
