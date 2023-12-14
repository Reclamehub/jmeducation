import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiLogIn } from "react-icons/bi";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";

import "./Navbar.css";

export function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");

  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  const closeNavbar = () => {
    // Reset the state when a navbar link is clicked
    setActive("nav__menu");
    setIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <div>
        <a href="#">
          <img
            src={require("../assets/Jmlogo1.png")}
            className="nav__brand"
            alt=""
          />
        </a>
      </div>

      <div style={{ marginLeft: "auto" }}>
        <ul className={active}>
          <li className="nav__item">
            <Link className="nav_link" to="/home" onClick={closeNavbar}>
              Home{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav_link" to="/about" onClick={closeNavbar}>
              About{" "}
            </Link>
          </li>

          <li className="nav-item dropdown nav__item dropdownn">
            <Link
              className="nav-link dropdown-toggle nav_link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Courses
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <Link
                  className="dropdown-item "
                  to="./course"
                  onClick={closeNavbar}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item "
                  to="./Jee"
                  onClick={closeNavbar}
                >
                  IIT-JEE
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="Neet"
                  onClick={closeNavbar}
                >
                  NEET-Medical
                </Link>
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="Smart"
                  onClick={closeNavbar}
                >
                  Smart Champ
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav__item">
            <Link
              className="nav_link"
              to="/contact"
              onClick={closeNavbar}
            >
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="" style={{ marginLeft: "auto", marginRight: "25px" }}>
        <Link className="nav_link" to="/login" onClick={closeNavbar}></Link>
      </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
