import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";
import { io } from "socket.io-client";
// const socket = io.connect("https://rajeshkanth.github.io/feed-someone#/donate");
const socket = io("https://rajeshkanth.github.io", {
  path: "/feed-someone#/donate", // Adjust the path to match your server setup
});

function Donate() {
  const navigate = useNavigate();
  const [donateClicked, setDonateClicked] = useState(false);

  const {
    name,
    handleName,
    mail,
    handleMail,
    handleAmount,
    amount,
    mobile,
    handleMobile,
    address,
    handleAddress,
  } = useContext(store);
  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, []);

  const donate = (e) => {
    e.preventDefault();
    socket.emit("donate", donateClicked);
    navigate("/success");
  };
  const cancel = () => {
    navigate("/unsuccess");
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <div className="donate" id="donate">
      <h1>Feed Someone</h1>
      <form onSubmit={donate}>
        <div className="inputBox">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={handleName}
          />
          <input
            type="mail"
            value={mail}
            onChange={handleMail}
            placeholder="Enter Your Mail "
          />
        </div>
        <div className="inputBox">
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            value={mobile}
            onChange={handleMobile}
          />
          <input
            type="number"
            placeholder="Enter Amount to Donate"
            value={amount}
            onChange={handleAmount}
          />
        </div>

        <div className="input-box">
          <textarea
            name=""
            id=""
            placeholder="Enter Your Address"
            value={address}
            onChange={handleAddress}
          ></textarea>
          <div className="btn-container">
            <input type="submit" value="Donate" id="donate-btn" />
            <input
              type="button"
              value="Cancel"
              id="cancel-btn"
              onClick={cancel}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Donate;
