import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { About } from "./pages/About";
import Contect from "./pages/Contect";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./Components/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="" element={<Dashboard />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
