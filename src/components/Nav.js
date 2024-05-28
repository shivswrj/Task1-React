import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  FaBookmark,
  FaCaretDown,
  FaSearch,
  FaShopify,
  FaBars,
  FaStar,
} from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { Dropdown, InputGroup, Form } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { FaCompass } from "react-icons/fa6";

export default function Nav() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      <div className="container-fluid d-flex align-items-center  position-relative poppins-regular">
        <nav className="navbar navbar-expand-lg navbar-light d-flex align-items-center justify-content-between fixed-top navconatiner">
          <div
            className="w-100 container-fluid d-flex align-items-center justify-items-center  "
            // style={{ height: "100%" }}
          >
            <img
              src={logo}
              alt="Logo"
              // style={{ width: "300px", height: "auto" }}
              style={{
                maxWidth: "30%",
                height: "100%",
                minWidth: "100px",
                padding: "10px",
              }}
            />

            <div className="d-flex d-lg-none align-items-center justify-content-around w-25">
              <FaSearch className="navicon" />
              <IoNotifications className="navicon" />
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleNavCollapse}
              >
                <FaBars />
              </button>
            </div>

            <div
              className={`${
                isNavCollapsed ? "collapse" : ""
              } navbar-collapse  p-5 p-lg-0 `}
            >
              <div className="input-group mb-3 container-xxl d-none d-lg-flex">
                <input
                  type="text"
                  className=" form-control bgcustom"
                  id="basic-url"
                  placeholder="Search here..."
                  aria-describedby="basic-addon3"
                />
                <span
                  className="input-group-text serchiconbg"
                  id="basic-addon3 "
                >
                  <FaSearch />
                </span>
              </div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown me-lg-2 w-100 mb-3 mb-lg-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="navbarDropdown2"
                      className="custom-dropdown-toggle "
                    >
                      <FaCompass className="btn-outline white-icon" />
                      <span className="title">Explore</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        marginTop: "25px",
                        zIndex: 0,
                        borderRadius: "0px",
                      }}
                    >
                      <Dropdown.Item href="#">People - Community</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Places - Venues</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Programs - Events</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Blogs</Dropdown.Item>
                      <Dropdown.Divider />
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item dropdown w-100 me-lg-2 mb-3 mb-lg-0">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      id="navbarDropdown2"
                      className="custom-dropdown-toggle "
                    >
                      <FaStar className="white-icon" />
                      <span className="title">Hobbies</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        marginTop: "25px",
                        zIndex: 0,
                        borderRadius: "0px",
                      }}
                    >
                      <Dropdown.Item href="#">Action</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">Another action</Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item href="#">
                        Something else here
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="nav-item me-lg-2 w-100 mb-3 mb-lg-0">
                  <a
                    className="nav-link active d-flex align-items-center"
                    aria-current="page"
                    href="#"
                  >
                    <IoNotifications className="navicon" />
                    <span className="ms-2 d-lg-none">Notifications</span>
                  </a>
                </li>
                <li className="nav-item me-lg-2 w-100 mb-3 mb-lg-0">
                  <a
                    className="nav-link active d-flex align-items-center"
                    aria-current="page"
                    href="#"
                  >
                    <FaBookmark className="navicon" />
                    <span className="ms-2 d-lg-none">Bookmarks</span>
                  </a>
                </li>
                <li className="nav-item me-lg-2 w-100 mb-3 mb-lg-0">
                  <a
                    className="nav-link active d-flex align-items-center"
                    aria-current="page"
                    href="#"
                  >
                    <FaShopify className="navicon" />
                    <span className="ms-2 d-lg-none">Shopify</span>
                  </a>
                </li>
                <li className="av-item dropdown w-100 mb-3 mb-lg-0">
                  <button className="px-3  py-2 bg-light custom-button">
                    SignUp
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />
    </>
  );
}
