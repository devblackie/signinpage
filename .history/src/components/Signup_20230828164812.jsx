import React, { useState } from "react";
import "./signup.css";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Signup = ({ handleLogin }) => {
  // States for registration
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  // State for tracking submission status
  const [submissionStatus, setSubmissionStatus] = useState("none"); // Possible values: "none", "success", "error"

  // Handling input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "cpassword") setCPassword(value);
    setSubmissionStatus("none");
  };

  const handleSignform = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      setSubmissionStatus("success");
    } else {
      setFormErrors(errors);
      setSubmissionStatus("error");
    }
  };

  // Form validations
  const validateForm = () => {
    const errors = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!name) errors.name = "Name is required";
    if (!email) errors.email = "Email is required";
    else if (!regex.test(email))
      errors.email = "This is not a valid email format!";

    if (!password) errors.password = "Password is required";
    else if (password.length < 4)
      errors.password = "Password must be more than 4 characters";
    else if (password.length > 10)
      errors.password = "Password cannot exceed more than 10 characters";

    if (!cpassword) errors.cpassword = "Confirm Password is required";
    else if (cpassword !== password)
      errors.cpassword = "Confirm password and password should be the same";
    return errors;
  };

  return (
    <>
      <Header userName={name} />
      <div className="form-container">
        {submissionStatus === "success" ? (
          <div className="success">
            <h1>User {name} successfully registered!!</h1>
            <a onClick={() => navigate("/home")}>
              Click to continue to the main site
            </a>
          </div>
        ) : (
          <form onSubmit={handleSignform}>
            <h2>Signup</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.name}</p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.email}</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.password}</p>
            <input
              type="password"
              placeholder="Confirm Password"
              value={cpassword}
              name="cpassword"
              onChange={handleInputChange}
            />
            <p className="error">{formErrors.cpassword}</p>
            <button className-="bton" type="submit">
              Signup
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Signup;
