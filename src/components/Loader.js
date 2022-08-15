import React from "react";
import "./Loader.css";

const Loading = () => {
  return (
    <div className="loader-container">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="sub-text">
        <span>Retrieving data...</span>
      </div>
    </div>
  );
};

export default Loading;
