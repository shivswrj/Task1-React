import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
  FaYoutube,
  FaTelegram,
  FaEnvelope,
} from "react-icons/fa";

export default function FooterLinks() {
  return (
    <div className="container-fluid">
      <div className="row p-5 overflow-x-hidden">
        <div className="col-md-3 col-12 mb-4">
          <div
            className="font-weight-bold mb-3"
            style={{
              color: "black",
              fontWeight: 700,
            }}
          >
            Hobbies
          </div>
          <div className="d-flex flex-column flex-wrap">
            <span className="me-3">About Us</span>
            <span className="me-3">Our Services</span>
            <span className="me-3">Work with Us</span>
            <span className="me-3">FAQ</span>
            <span className="me-3">Contact Us</span>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <div
            className="font-weight-bold mb-3"
            style={{
              color: "black",
              fontWeight: 700,
            }}
          >
            How Do I
          </div>
          <div className="d-flex flex-column flex-wrap">
            <span className="me-3">Sign Up</span>
            <span className="me-3">Add a Listing</span>
            <span className="me-3">Calm Listing</span>
            <span className="me-3">Post a Query</span>
            <span className="me-3">Add a Blog Post</span>
            <span className="me-3">Other Queries</span>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <div
            className="font-weight-bold mb-3"
            style={{
              color: "black",
              fontWeight: 700,
            }}
          >
            Quick Links
          </div>
          <div className="d-flex flex-column flex-wrap">
            <span className="me-3">Listings</span>
            <span className="me-3">Blog Post</span>
            <span className="me-3">Shop / Store</span>
            <span className="me-3">Community</span>
          </div>
        </div>
        <div className="col-md-3 col-12 mb-4">
          <div
            className="font-weight-bold mb-3"
            style={{
              color: "black",
              fontWeight: 700,
            }}
          >
            Social Media
          </div>
          <div className="d-flex flex-wrap ">
            <FaFacebook
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaTwitter
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaInstagram
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaLinkedin
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaGoogle
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaYoutube
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaTelegram
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
            <FaEnvelope
              className="me-3 my-2"
              style={{
                color: "#6D747A",
                backgroundColor: "#EBEDF0",
                borderRadius: "50%",
              }}
            />
          </div>

          <div
            className="font-weight-bold mb-3 my-3"
            style={{
              color: "black",
              fontWeight: 700,
            }}
          >
            Invite your friends
          </div>
          <div className="input-group mb-3 d-lg-flex">
            <input
              type="email"
              className="form-control bgcustom"
              id="basic-url"
              placeholder="Email"
              aria-describedby="basic-addon3"
            />
            <span className="input-group-text serchiconbg" id="basic-addon3 ">
              Invite
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
