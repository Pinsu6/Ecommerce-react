import React from "react";
import Layput from "../Components/Layout/Layput";
import { useAuth } from "../context/auth";

export default function HomePage() {
  const [auth, setAuth] = useAuth();
  return (
    <Layput title={"HomePage"}>
      <div>HomePage</div>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layput>
  );
}
