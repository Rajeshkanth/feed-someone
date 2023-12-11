import React, { memo, useContext, useEffect } from "react";
import QRCode from "react-qr-code";
import { Navigate, useNavigate } from "react-router-dom";
import { store } from "../App";

function QRPage() {
  const successURL = `#/donate`;
  const navigate = useNavigate();
  const { socket, donar, setDonar } = useContext(store);

  useEffect(() => {
    const handleSuccess = (data) => {
      const { details } = data;
      setDonar((prevDonar) => [...prevDonar, details]);
      navigate("/success");
    };

    socket.on("success", handleSuccess);

    socket.on("failed", () => {
      navigate("/unsuccess");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    });

    return () => {
      socket.off("success", handleSuccess);
      socket.off("failed");
    };
  }, [socket, navigate, setDonar]);

  return (
    <>
      <div className="qrPage">
        <div className="header">
          <h1>Feed Someone Donation Page</h1>
        </div>
        <p>Thank you for considering a donation to support our cause !</p>
        <div className="qrContainer">
          <h1>Scan here to donate.</h1>
          <QRCode
            value={`https://dd39-2409-408d-3e08-73ed-8196-7078-fecb-1785.ngrok-free.app/${successURL}`}
          />
        </div>
        <div className="donation-details">
          <div className="dd">
            {" "}
            <h2>Donation Details:</h2>
            <p>
              Your contribution is tax-deductible to the extent allowed by law.{" "}
              <strong>Feed Someone </strong>
              is a registered non-profit organization and your donation will go
              directly toward our cause.
            </p>
          </div>
          <div className="ci">
            {" "}
            <h2>Contact Information:</h2>
            <p>
              If you have any questions or need further assistance, please
              contact us at:
              <br />
              Email: feedsomeone@gmail.com
              <br />
              Phone: +91 9942710645
            </p>
          </div>
        </div>

        <p>Thank you for your support and generosity!</p>
      </div>
    </>
  );
}

export default memo(QRPage);
