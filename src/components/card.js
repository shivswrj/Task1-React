import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

function CustomCard({
  variant,
  onlyone = false,
  icon,
  title,
  text,
  buttontext,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const getBorderColor = () => {
    return isHovered ? "#CED4DA" : "#CED4DA";
  };

  const getBackgroundColor = () => {
    return isHovered ? variant.toLowerCase() : "white";
  };

  const getTextColor = () => {
    return isHovered ? "white" : "black";
  };

  const getIconColor = () => {
    return isHovered ? "white" : variant.toLowerCase();
  };

  return (
    <Card
      key={variant}
      text={getTextColor()}
      style={{
        width: onlyone ? "auto" : "25rem",
        borderColor: getBorderColor(),
        backgroundColor: getBackgroundColor(),
        margin: "1rem",
      }}
      className="mb-2"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Card.Header
        style={{ border: "none", backgroundColor: getBackgroundColor() }}
      >
        <div
          className="d-flex align-items-center justify-content-start  "
          style={{
            color: getIconColor(),
            margin: "0px 10px",
            fontSize: "25px",
          }}
        >
          {icon}
          <span
            style={{ fontSize: "20px", marginLeft: "10px" }}
            className="poppins-semibold"
          >
            {title}
          </span>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{text}</Card.Text>
        <button
          className="btn"
          variant="outline-primary"
          style={{
            borderColor: "#8064A2",
            color: "#8064A2",
            "&:hover": {},
          }}
        >
        {buttontext}
        </button>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;
