import React, { useState } from "react";
import Layput from "../Components/Layout/Layput";
import toast from "react-hot-toast";

import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const reg = async (e) => {
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
      });
      if (res.status === 201 && res.data.message) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("something wrong");
    }
  };
  return (
    <Layput>
      <div className="register">
        <h1 className="mb-3">Register</h1>
        <form>
          <div className="mb-3">
            🦸‍♂️
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              name="firstName"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            📧
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="email"
            />
          </div>

          <div className="mb-3">
            ☎️
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="text"
              className="form-control"
              id="phone"
              name="phone"
              placeholder="phone"
            />
          </div>

          <div className="mb-3">
            🏠
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className="form-control"
              id="address"
              name="address"
              placeholder="address"
            />
          </div>

          <div className="mb-3">
            🔑
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              name="password"
              placeholder="password"
            />
          </div>
          <div className="justify-content-center align-items-center text-center">
            <button
              type="button"
              className="btn btn-primary  "
              onClick={() => reg()}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Layput>
  );
}
