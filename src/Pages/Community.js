import React from "react";
import Group from "../assets/group.png";
export default function Community() {
  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#F7FDFF" }}>
      <div className="container p-3">
        <h1 className="poppins-bold-italic my-5">
          Your <span style={{ color: "#0096C8" }}>Hobby</span> or ,
          <span style={{ color: "#8064A2" }}>Community...</span>
        </h1>
        <button
          className="btn btn-primary poppins-regular-italic"
          style={{ backgroundColor: "#8064A2", border: "none" }}
        >
          Get Started
        </button>
        <br />
        <img src={Group} style={{ width: "100%", marginTop: "10px" }} />
      </div>
    </div>
  );
}
