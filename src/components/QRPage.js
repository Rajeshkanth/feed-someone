import React from "react";
import QRCode from "react-qr-code";

function QRPage() {
  const successURL = `https://rajeshkanth.github.io/feed-someone/#/donate`;
  return (
    <>
      <div className="qrPage">
        <div className="header">
          <h1>Feed Someone Donation Page</h1>
        </div>
        <p>Thank you for considering a donation to support our cause !</p>
        <div className="qrContainer">
          <h1>Scan here to donate.</h1>
          <QRCode value={successURL} />
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

export default QRPage;
