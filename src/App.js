import React, { createContext, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Donate from "./components/Donate";
import Home from "./components/Home";
import QRPage from "./components/QRPage";
import Success from "./components/Success";
import Unsuccess from "./components/Unsuccess";
import { io } from "socket.io-client";

export const store = createContext();

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [donar, setDonar] = useState([]);
  const socket = io.connect("https://qrcode-server.onrender.com");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleMail = (e) => {
    setMail(e.target.value);
  };
  const handleMobile = (e) => {
    setMobile(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <store.Provider
      value={{
        name,
        setName,
        handleName,
        mail,
        setMail,
        handleMail,
        mobile,
        setMobile,
        handleMobile,
        address,
        setAddress,
        handleAddress,
        amount,
        setAmount,
        handleAmount,
        donar,
        setDonar,
        socket,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/qrpage" element={<QRPage />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/unsuccess" element={<Unsuccess />}></Route>
        </Routes>
      </Router>
    </store.Provider>
  );
}

export default App;
