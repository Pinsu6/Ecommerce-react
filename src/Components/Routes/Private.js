import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  console.log("From private route");
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCHeck = async () => {
      const res = await axios.get("/api/v1/auth/user-auth");
      console.log("data from private", res);
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) {
      authCHeck();
    } else {
      console.log("TOken not found ", auth.token);
    }
  }, [auth?.token]);
  return ok ? <Outlet /> : <Spinner />;
}
