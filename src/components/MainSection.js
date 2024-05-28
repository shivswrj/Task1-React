import React, { useState } from "react";
import { Button, Form, Nav } from "react-bootstrap";
import models from "../assets/models.png";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

export default function MainSection() {
  const [join, setJoin] = useState(false);

  return (
    <div className="container-fluid px-5 py-lg-2 herosection">
      <div
        className="row d-flex justify-content-around"
        style={{ paddingTop: "130px" }}
      >
        <div className="col-lg-5">
          <h1 className="poppins-bold-italic mb-5">
            Explore your <span style={{ color: "#0096C8" }}>hobby</span> or{" "}
            <span style={{ color: "#8064A2" }}>passion</span>
          </h1>

          <p className="poppins-regular">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform.
          </p>
          <p className="poppins-regular">
            Your hobby may be about visual or performing arts, sports, games,
            gardening, model making, cooking, indoor or outdoor activities…
          </p>
          <img
            src={models}
            alt="Your Alt Text"
            className="img-fluid d-none d-lg-block"
          />
        </div>
        <div className="col-lg-5 poppins-regular">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div className="mb-3 ">
              <Nav
                variant="tabs"
                defaultActiveKey="#signIn"
                className="poppins-medium "
              >
                <Nav.Item>
                  <Nav.Link
                    href="#signIn"
                    className="text-decoration-none text-dark position-relative"
                    onClick={() => {
                      setJoin(false);
                    }}
                  >
                    Sign in
                    <span
                      className="position-absolute bottom-0 start-0 w-100 border-bottom"
                      style={{ borderBottomColor: "#8064a2" }}
                    ></span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    href="#joinIn"
                    className="text-decoration-none text-dark position-relative"
                    onClick={() => {
                      setJoin(true);
                    }}
                  >
                    Join in
                    <span
                      className="position-absolute bottom-0 start-0 w-100 border-bottom"
                      style={{ borderBottomColor: "#939CA3" }}
                    ></span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Button
              variant="outline-danger"
              className="d-flex align-items-center justify-content-between mb-3 w-100 custom-button"
            >
              <FaGoogle className="me-2" />
              <span className="mx-auto custom-button-text">
                Sign up with Google
              </span>
            </Button>

            <Button
              variant="outline-primary"
              className="d-flex align-items-center justify-content-start mb-3 w-100 custom-button"
            >
              <FaFacebook className="me-2" />
              <span className="mx-auto custom-button-text">
                Continue with Facebook
              </span>
            </Button>

            <Form className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              {!join ? (
                <div className="mb-3 d-flex justify-content-between align-items-center">
                  <Form.Check type="checkbox" label="Remember me" />
                  <div className="d-flex align-items-center ">
                    <FaLock className="me-2" style={{ color: "gray" }} />
                    <a
                      href="#!"
                      className="text-decoration-none"
                      style={{
                        color: "gray",
                        fontWeight: 700,
                        fontStyle: "bold",
                      }}
                    >
                      Forgot password
                    </a>
                  </div>
                </div>
              ) : (
                <div className="mb-3 ">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="align-items-end mr-0">
                      <a
                        href="#!"
                        className="text-decoration-none"
                        style={{
                          color: "gray",
                          fontWeight: 700,
                          fontStyle: "bold",
                        }}
                      >
                        Password strength
                      </a>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "gray",
                      textAlign: "center",
                      marginTop: 10,
                    }}
                  >
                    By continuing, you agree to our
                    <span style={{ color: "black", fontWeight: 500 }}>
                      {" "}
                      Terms of Service{" "}
                    </span>
                    and
                    <span style={{ color: "black", fontWeight: 500 }}>
                      {" "}
                      Privacy Policy.
                    </span>
                  </p>
                </div>
              )}

              <Button
                variant="primary"
                type="submit"
                className="w-100"
                style={{ backgroundColor: "#8064a2", borderColor: "#8064a2" }}
              >
                <span style={{ color: "white", fontWeight: 500 }}>
                  {join ? (
                    <span>Continue</span>
                  ) : (
                    <span>Agree and Continue</span>
                  )}
                </span>
              </Button>
            </Form>
          </div>
        </div>
        <img
          src={models}
          alt="Your Alt Text"
          className="img-fluid d-lg-none mb-0 mt-5"
        />
      </div>
    </div>
  );
}
