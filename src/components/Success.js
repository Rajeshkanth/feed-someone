import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { store } from "../App";
import { MdVerified } from "react-icons/md";

function Success() {
  const { donar } = useContext(store);
  const lastDetails = donar[donar.length - 1];
  console.log(donar);
  return (
    <>
      <div className="header">
        <h1>Feed Someone</h1>
        <nav>
          <Link to={"/"}>Home</Link>
        </nav>
      </div>
      <div className="bill">
        <div className="bill-header">
          <div className="bill-details">
            <h1 className="donation-success verified">
              {" "}
              Donation success {""}{" "}
              <MdVerified className="verified verified-logo" />
            </h1>

            <h1>Dear {lastDetails.Name}</h1>

            <p>
              Thank you for your generous donation of rupees {""}
              <strong>{lastDetails.Amount}</strong> to {""}
              <strong>Feed Someone</strong>. Your support means a lot to us and
              will directly impact on our mission. Your donation is
              tax-deductible, and our Tax ID Number is 023874097. This letter
              serves as an official acknowledgment of your contribution. We are
              grateful for your kindness and belief in our cause. Together, we
              are making a difference.
            </p>
          </div>
          <div className="thank-you-message">
            <p>Thank you for your generous donation!</p>
            <p>We appreciate your support.</p>
          </div>
        </div>
      </div>

      {/* {donar.map((index, value) => {
        return (
          <>
            <div className="bill-header" key={index}>
              <h1 key={index}>Donation Bill</h1>
              <p key={index}>Date: </p>
            </div>
            <div className="bill-details" key={index}>
              <p key={index}>
                <strong key={index}>Name:</strong> {index.Name}
              </p>
              <p >
                <strong key={index}>Email:</strong>
              </p>
              <p >
                <strong >Amount:</strong>
              </p>
            </div>
            <div className="thank-you-message" key={index}>
              <p key={index}>Thank you for your generous donation!</p>
              <p key={index}>We appreciate your support.</p>
            </div>
          </>
        );
      })} */}
    </>
  );
}

export default Success;
