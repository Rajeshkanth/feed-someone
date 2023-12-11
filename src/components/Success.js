import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { store } from "../App";

function Success() {
  const { donar } = useContext(store);
  const [details] = donar;

  return (
    <>
      <div className="bill">
        <div className="header">
          <h1>Feed Someone</h1>
          <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/qrpage"} className="button-48">
              <span className="text"> Donate</span>{" "}
            </Link>
          </nav>
        </div>

        <div className="bill-header">
          <div>
            <h1>Donation Details</h1>
          </div>

          <div className="bill-details">
            <p>
              <strong>Name:</strong>
              {details.Name}
            </p>
            <p>
              <strong>Email:</strong>
              {details.Mail}
            </p>
            <p>
              <strong>Amount:</strong>
              {details.Amount}
            </p>
            <p>
              <strong>Address:</strong>
              {details.Address}
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
