import { useState } from "react";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router"; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
         <Route path="/" element={<Home/>} /> 
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
