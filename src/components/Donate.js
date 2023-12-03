import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";

function Donate() {
  const navigate = useNavigate();
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
  const donate = (e) => {
    e.preventDefault();
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
