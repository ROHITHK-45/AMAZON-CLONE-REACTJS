import "./App.css";
import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from "./Login";
import Payment from "./Payment";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/payment" element={<Payment/>}/>


      </Routes>

    </Router>
  );
}

export default App;
