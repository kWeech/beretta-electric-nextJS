import classes from "./NavBar.module.css";
import { Link } from "react-scroll";

const NavBar = (props) => {
  return (
    <ul className={classes.container}>
      <li>
        <Link
          className={classes.link}
          onClick={props.onCloseNav}
          to="home"
          spy={true}
          smooth={true}
          offset={-75}
          duration={500}
          rel="nofollow"
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
          rel="nofollow"
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
          rel="nofollow"
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
          rel="nofollow"
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
          rel="nofollow"
        >
          Contact Us
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
