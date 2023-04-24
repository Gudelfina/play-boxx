import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../store/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite/dist/flowbite.min.css";
import "./LoginForm.css";
import loginCard from "../images/loginCard.jpg";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, result] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ username, password });
    if (result.error) {
      showErrorToast();
    }
    e.target.reset();
  };

  const handleNewUserClick = () => {
    navigate("/signup");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const showErrorToast = () => {
    toast.error("Incorrect username or password", {
      position: "bottom-right",
      autoClose: 4000,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

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

  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-aesthetic py-10 px-2 sm:px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 shadow-md">
        <div
          className="flex flex-wrap content-center justify-center bg-white p-6 md:rounded-l-md"
          style={{ width: "24rem", height: "32rem" }}
        >
          <div className="w-72">
            <h1 className="text-xl font-semibold">Welcome back!</h1>
            <small className="text-gray-400">
              Please enter your information
            </small>
            <form className="mt-4" onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3 relative">
                <label
                  className={`${
                    isUsernameFocused || username.length > 0
                      ? "floating-label"
                      : ""
                  } absolute left-2 top-2 text-xs font-semibold text-gray-500 transition-all duration-200`}
                >
                  <span
                    className="cursor-text"
                    onClick={() => document.getElementById("username").focus()}
                    style={{ cursor: "text" }}
                  >
                    Username or email
                  </span>
                </label>
                <input
                  required
                  id="username"
                  type="text"
                  value={username}
                  className={`block w-full rounded-md border ${
                    isUsernameFocused ? "border-punch" : "border-gray-300"
                  } focus:border-punch focus:outline-none focus:ring focus:ring-punch py-1 px-1.5 text-gray-500 text-sm`}
                  onFocus={() => setIsUsernameFocused(true)}
                  onBlur={() => setIsUsernameFocused(false)}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please enter your username")
                  }
                  onChange={(e) => {
                    setUsername(e.target.value);
                    e.target.setCustomValidity("");
                  }}
                />
              </div>

              <div className="mb-3 relative">
                <label
                  className={`${
                    isPasswordFocused || password.length > 0
                      ? "floating-label"
                      : ""
                  } absolute left-2 top-2 text-xs font-semibold text-gray-500 transition-all duration-200`}
                >
                  <span
                    className="cursor-text"
                    onClick={() => document.getElementById("password").focus()}
                    style={{ cursor: "text" }}
                  >
                    Enter your password
                  </span>
                </label>
                <input
                  required
                  id="password"
                  type={showPassword === false ? "password" : "text"}
                  value={password}
                  className={`block w-full rounded-md border ${
                    isPasswordFocused ? "border-punch" : "border-gray-300"
                  } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-punch py-1 px-1.5 text-gray-500 text-sm`}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please enter your password")
                  }
                  onChange={(e) => {
                    setPassword(e.target.value);
                    e.target.setCustomValidity("");
                  }}
                />
              </div>

              <div className="mb-3 flex flex-wrap content-center">
                <input
                  id="showPassword"
                  type="checkbox"
                  className="mr-1 checked:bg-punch"
                  onClick={toggleShowPassword}
                />{" "}
                <label
                  htmlFor="showPassword"
                  className="mr-auto text-xs font-semibold"
                >
                  Show password
                </label>
              </div>

              <div className="mb-3">
                <button className="mb-1.5 block w-full text-center text-white bg-hoverpink hover:bg-punch px-2 py-1.5 rounded-md">
                  Sign in
                </button>
              </div>
            </form>
            <div className="text-center">
              <span className="text-xs text-gray-400 font-semibold">
                Don't have an account?{" "}
              </span>
              <a
                href="/signup"
                onClick={handleNewUserClick}
                className="text-xs text-hoverpink hover:text-punch after:content-['_↗']"
              >
                Register here
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden md:flex md:flex-wrap md:content-center md:justify-center md:rounded-r-md md:bg-center md:bg-no-repeat md:bg-cover md:w-full md:h-full"
          style={{ width: "24rem", height: "32rem" }}
        >
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={loginCard}
          />
        </div>
      </div>
    </div>
  );
}
