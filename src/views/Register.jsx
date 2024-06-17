import React, { useState } from "react";
import { useRentCar } from "../context/RentCarContext";
import "../styles/RegisterStyle.css";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const { registerUser } = useRentCar();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    idCard: "",
    phone: "",
    address: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    try {
      event.preventDefault();
      registerUser(user);
      navigate("/");
    } catch (error) {
      console.error("Error al procesar el registro:", error);
    }
  }

  return (
    <div className="container">
      <div className="container-form ">
        <h2>Sign Up</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
          />
          <input
            placeholder="ID Card"
            type="text"
            name="idCard"
            value={user.idCard}
            onChange={handleChange}
          />
          <input
            placeholder="Phone"
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />
          <input
            placeholder="Address"
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            placeholder="Password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
          />

          <p className="text">
            Already have an account? <Link to={"/"}>Login</Link>
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export { Register };
