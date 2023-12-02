import React, { useState } from "react";
import { Link } from "react-router-dom";
import {BiLogIn} from "react-icons/bi"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

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

      <div style={{marginLeft:"auto"}}>
        <ul className={active}>
          <li className="nav__item">
            <Link className="nav_link" to="/home">
              Home{" "}
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav_link" to="/about">
              About{" "}
            </Link>
          </li>
         
          <li className="nav-item dropdown nav__item">
          <Link class="nav-link dropdown-toggle nav_link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         Courses
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><Link class="dropdown-item " to="./course">Course</Link></li>
            <li><Link class="dropdown-item " to="./Jee">JEE</Link></li>
            <li><Link class="dropdown-item" to="Neet">NEET</Link></li>
            <li><Link class="dropdown-item" to="Smart">Smart Champ</Link></li>
            <li><Link class="dropdown-item" to="Foundation">Foundation</Link></li>
          </ul>
        </li>
          {/* <li className="nav__item">
            <Link className="nav_link" to="/FAQ">
              {" "}
              FAQ{" "}
            </Link>
          </li> */}
          <li className="nav__item">
            <Link className="nav_link" to="/contact">
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      </div>

<div className="" style={{marginLeft:"auto",marginRight:"25px"}}>
 <Link className="nav_link" to="/login"></Link> 
</div>
   
   <div>

  </div>

      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
