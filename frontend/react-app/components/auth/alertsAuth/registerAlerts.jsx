import React from "react";
import "../../../../static/style/alert.css";

const AlertReg = (props) => {
  let statusCode = props.status;
  let textMessage = props.textRes;
  let statusClass = statusCode === 200 ? "alert-success" : "alert-error";
  let statusText = statusCode === 200 ? "Success" : "Error";

  console.log(statusCode);
  return (
    <div className={statusClass}>
      <strong>{statusText}</strong> <p>{textMessage}</p>
    </div>
  );
};
export default AlertReg;
