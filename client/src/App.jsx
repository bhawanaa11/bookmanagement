import { useState } from "react";
import Signup from "./pages/Signup"
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Navbar></Navbar>
    <Routes>
         <Route path="/" element={<Home/>} /> 
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
    </>
  );
}

export default App;
