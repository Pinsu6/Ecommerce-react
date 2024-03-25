import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Spinner() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const Interval = setInterval(() => {
      setCount((preval) => --preval);
    }, 1000);
    count === 0 && navigate("/login", {
      state:location.pathname
    });
    return () => clearInterval(Interval);
  }, [count, navigate,location]);
  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center  "
        style={{ height: "100vh" }}
      >
        <h1 className="text-center"> redirect to you in {count}</h1>
        <div className="spinner-border  " aria-hidden="true"></div>
      </div>
    </>
  );
}
