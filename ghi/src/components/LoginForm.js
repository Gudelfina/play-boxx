import React, { useState, useEffect } from "react";
import { useLoginMutation } from "../store/authApi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "flowbite/dist/flowbite.min.css";
import { Label, TextInput, Button, Card } from "flowbite-react";
import "./LoginForm.css";
import { AiFillEyeInvisible, AiFillEye, AiOutlineLock } from "react-icons/ai";
import { FiUser } from "react-icons/fi";

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
    <div className="bg-red-100 min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <Card className="w-2/3 max-w-2xl rounded-lg overflow-hidden border border-gray-400">
          <form
            className="flex flex-col gap-4 px-4 py-6"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="username" value="Username or email" />
              </div>
              <TextInput
                id="username"
                type="text"
                icon={FiUser}
                placeholder="Enter username"
                required={true}
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please enter your username")
                }
                onChange={(e) => {
                  setUsername(e.target.value);
                  e.target.setCustomValidity("");
                }}
              />
            </div>
            <div className="relative">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                type={showPassword === false ? "password" : "text"}
                required={true}
                icon={AiOutlineLock}
                placeholder="Enter password"
                onInvalid={(e) =>
                  e.target.setCustomValidity("Please enter your password")
                }
                onChange={(e) => {
                  setPassword(e.target.value);
                  e.target.setCustomValidity("");
                }}
              />
              <div className="text-2xl absolute top-[41px] right-3">
                {showPassword === false ? (
                  <AiFillEye onClick={toggleShowPassword} />
                ) : (
                  <AiFillEyeInvisible onClick={toggleShowPassword} />
                )}
              </div>
            </div>
            <div className="text-center mt-5">
              Don't have an account?{" "}
              <a
                href="/signup"
                onClick={handleNewUserClick}
                className="text-blue-500 after:content-['_↗']"
              >
                Register here
              </a>
            </div>
            <Button
              type="submit"
              className="c-button hover:bg-hoverpink"
              pill={true}
            >
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
