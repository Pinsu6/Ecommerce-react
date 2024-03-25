import React, { useState } from "react";
import Layput from "../Components/Layout/Layput";
import toast from "react-hot-toast";
import { useAuth } from "../context/auth";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const locatation = useLocation();
  const Log = async (e) => {
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res.status === 201 && res.data.message) {
        toast.success(res.data.message);

        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        console.log("paths is ", locatation.state);
        navigate(locatation.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("something wrong");
    }
  };
  return (
    <div>
      <Layput>
        <div className="register">
          <h1 className="mb-3">Login</h1>
          <form>
            <div className="mb-3">
              🦸‍♂️ 📧
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
                onClick={() => Log()}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Layput>
    </div>
  );
}
