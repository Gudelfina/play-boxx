import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../store/authApi";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite/dist/flowbite.min.css";
import "./LoginForm.css";
import arcadeMachine from "../images/arcade-machine.svg";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, result] = useLoginMutation();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login({ username, password });
    if (result.error) {
      showErrorToast();
    }
    e.target.reset();
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
    <div className="h-screen bg-beige/50">
      <div className="container h-full px-6 py-24">
        <div className="w-72 mx-auto items-center flex flex-col text-center pt-20">
          <h1 className="text-4xl font-semibold">Welcome back!</h1>
          <small className="text-gray-400 text-lg">
            Please enter your information
          </small>
        </div>
        <div className="g-6 flex items-center justify-center lg:justify-between pl-16">
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="floating_username"
                  id="floating_username"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onInvalid={(e) =>
                    e.target.setCustomValidity(
                      "Please enter your username or email"
                    )
                  }
                  onChange={(e) => {
                    setUsername(e.target.value);
                    e.target.setCustomValidity("");
                  }}
                  required
                />
                <label
                  htmlFor="floating_username"
                  className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Username or email
                </label>
              </div>

              <div className="relative mb-6" data-te-input-wrapper-init>
                <div className="text-2xl absolute top-[10px] right-3">
                  {showPassword ? (
                    <AiFillEyeInvisible onClick={toggleShowPassword} />
                  ) : (
                    <AiFillEye onClick={toggleShowPassword} />
                  )}
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="floating_password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  onInvalid={(e) =>
                    e.target.setCustomValidity("Please enter your password")
                  }
                  onChange={(e) => {
                    setPassword(e.target.value);
                    e.target.setCustomValidity("");
                  }}
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-700 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <div className="text-sm text-gray-500 mb-5">
                Don't have an account?{" "}
                <Link
                  className="hover:underline text-hoverpink after:content-['_↗']"
                  to={"/signup" || "/play-boxx/signup"}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/signup");
                  }}
                >
                  Signup here
                </Link>
              </div>

              <button
                type="submit"
                className="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm w-full pt-4 px-5 py-2.5 text-center sm:w-auto"
              >
                Sign in
              </button>
            </form>
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12 pl-3 pb-2">
            <img className="h-auto max-w-xl" alt="" src={arcadeMachine} />
          </div>
        </div>
      </div>
    </div>
  );
}
