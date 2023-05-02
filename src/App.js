import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
export default App;
