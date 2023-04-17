import React, { useState, useEffect } from "react";
import { useSignupMutation } from "../store/authApi";
import { useNavigate } from "react-router-dom";
import "flowbite/dist/flowbite.min.css";

export default function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [signup, result] = useSignupMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signup({
      first_name: firstName,
      last_name: lastName,
      username,
      password,
      email,
      profile_picture: profilePicture,
    });
    e.target.reset();
  };

  useEffect(() => {
    if (result.isSuccess) {
      navigate("/");
    }
  }, [result.isSuccess, navigate]);

  return (
    <div className="card text-bg-light mb-3">
      <h5 className="card-header">Signup</h5>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username:</label>
            <input
              name="username"
              type="text"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password:</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              name="email"
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Profile Picture URL:</label>
            <input
              name="picture_url"
              type="url"
              className="form-control"
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </div>
          <div>
            <input className="btn btn-primary" type="submit" value="Signup" />
          </div>
        </form>
      </div>
    </div>
  );
}
