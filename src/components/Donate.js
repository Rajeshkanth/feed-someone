import React, { useContext, useState, useEffect, memo } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../App";

function Donate() {
  const navigate = useNavigate();
  const [donateClicked, setDonateClicked] = useState(false);
  const [cancelClicked, setCancelClicked] = useState(false);
  const [alert, setAlert] = useState(false);
  const [gotData, setGotData] = useState([]);

  const {
    name,
    setName,
    handleName,
    mail,
    setMail,
    handleMail,
    handleAmount,
    amount,
    setAmount,
    mobile,
    setMobile,
    handleMobile,
    address,
    setAddress,
    handleAddress,
    donar,
    setDonar,
    socket,
  } = useContext(store);

  const donate = (e) => {
    e.preventDefault();
    setDonateClicked(!donateClicked);
    if (name && mail && amount && mobile && address) {
      // const details = {
      //   Name: name,
      //   Mail: mail,
      //   Amount: amount,
      //   Mobile: mobile,
      //   Address: address,
      // };

      socket.emit("donateDone", {
        donated: true,
        details: {
          Name: name,
          Mail: mail,
          Amount: amount,
          Mobile: mobile,
          Address: address,
        },
      });

      setAlert(false);
    } else {
      setAlert(true);
    }
    setName("");
    setMail("");
    setMobile("");
    setAmount("");
    setAddress("");
  };

  const cancel = (e) => {
    e.preventDefault();
    setCancelClicked(!cancelClicked);

    socket.emit("cancel", { cancelled: true });
  };

  useEffect(() => {
    socket.on("failed", () => {
      navigate("/unsuccess");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });
  }, [cancelClicked]);
  useEffect(() => {
    socket.on("success", (data) => {
      const details = data.details;
      setDonar([...donar, details]);
      console.log(data.details);
      navigate("/success");
    });
  }, [donateClicked]);

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
            required
          />
          <input
            type="mail"
            value={mail}
            onChange={handleMail}
            placeholder="Enter Your Mail "
            required
          />
        </div>
        <div className="inputBox">
          <input
            type="number"
            placeholder="Enter Your Mobile Number"
            value={mobile}
            onChange={handleMobile}
            required
          />
          <input
            type="number"
            placeholder="Enter Amount to Donate"
            value={amount}
            onChange={handleAmount}
            required
          />
        </div>

        <div className="input-box">
          <textarea
            name=""
            id=""
            placeholder="Enter Your Address"
            value={address}
            onChange={handleAddress}
            required
          ></textarea>

          {alert ? <p>Fill all the values..</p> : null}
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

export default memo(Donate);
