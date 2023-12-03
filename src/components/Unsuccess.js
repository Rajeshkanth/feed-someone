import React, { useEffect, useState } from "react";

function Unsuccess() {
  const [sec, setSec] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      if (sec !== 0) {
        setSec(sec - 1);
      }
    }, 1000);
  }, [sec]);

  return (
    <div className="unsuccess">
      <p>
        Donation process has been cancelled. Your donation was not processed.
        <p>You will be redirecting to the home page in {sec} seconds.</p>
      </p>
    </div>
  );
}

export default Unsuccess;
