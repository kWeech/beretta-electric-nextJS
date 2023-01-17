import React from "react";
import classes from "./SideBar.module.css";
import { Link } from "react-scroll";
import ReactDOM from "react-dom";

const SideBar = (props) => {
  return ReactDOM.createPortal(
    <div className={classes.sidebar}>
      <ul>
        <li>
          <Link
            className={classes.link}
            onClick={props.onCloseNav}
            to="home"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={props.onCloseNav}
            to="services"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={props.onCloseNav}
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={props.onCloseNav}
            to="aboutUs"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className={classes.link}
            onClick={props.onCloseNav}
            to="contactUs"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
          >
            Contact Us
          </Link>
        </li>
      </ul>
    </div>,
    document.getElementById("sideBar")
  );
};

export default SideBar;
