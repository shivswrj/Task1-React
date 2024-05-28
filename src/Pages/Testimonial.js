import React from "react";
import { FaMicrophone, FaPause, FaPlay, FaQuoteLeft } from "react-icons/fa";
import Card from "react-bootstrap/Card";

import Profile from "../assets/profile.png";
export default function Testimonial({ variant = "", onlyone = true }) {
  return (
    <div className="container-fluid d-flex flex-wrap align-items-center justify-content-center p-5">
      <Card
        key={variant}
        text=""
        style={{
          width: onlyone ? "auto" : "25rem",
          borderColor: "",

          backgroundColor: "#F7F5F9",
          margin: "1rem",
        }}
        className="container"
      >
        <Card.Header style={{ border: "none", backgroundColor: "transparent" }}>
          <div className="d-flex align-items-center justify-content-start ">
            <FaQuoteLeft
              style={{
                color: "",
                margin: "0px 10px",

                fontSize: "25px",
                padding: "5px",
                color: "white",
                backgroundColor: "#8064a2",
                borderRadius: "50%",
              }}
            />
            <span style={{ fontSize: "20px" }} className="poppins-semibold">
              Testimonial
            </span>
          </div>
        </Card.Header>
        <Card.Body className="container">
          <Card.Text style={{ color: "#6D747A" }}>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </Card.Text>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "10px",
              width: "100%",
              padding: "5px",
              flexWrap: "wrap-reverse",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div
              className="container d-flex flex-1 px-4 py-3 align-items-center justify-content-center "
              style={{
                backgroundColor: "#CCC1DA",
                width: "50%",
                borderRadius: "10px",
                minWidth: "200px",
              }}
            >
              <FaPlay
                className="m-10"
                style={{
                  width: "30px",
                  height: "30px",
                  fontSize: "10px",
                  padding: "10px",
                  backgroundColor: "white",
                  marginRight: "10px",
                  borderRadius: "100%",
                }}
              />
              <div
                style={{
                  width: "300px",
                  backgroundColor: "white",
                  height: "3px",
                }}
              >
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "100%",
                    backgroundColor: "red",
                    position: "relative",
                    top: -2,
                    left: 0,
                  }}
                ></div>
              </div>
              <span style={{ marginLeft: "5px" }}>0:0</span>
              <div style={{ position: "relative" }}>
                <img
                  src={Profile}
                  alt="Profile"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginLeft: "20px",
                    borderRadius: "100%",
                  }}
                />
                <FaMicrophone
                  style={{
                    color: "white",
                    position: "absolute",
                    bottom: "0",
                    fontSize: "20px",
                    left: "20",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                maxWidth: "30%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                minWidth: "200px",
              }}
            >
              <img
                src={Profile}
                alt="Profile"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                }}
              />
              <div className="d-flex flex-column">
                <span style={{ color: "#6D747A", fontWeight: 500 }}>
                  Shubha Nagarajan
                </span>
                <span style={{ color: "#0096C8", fontWeight: 500 }}>
                  Classical Dancer
                </span>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
