import { Fragment, useEffect, useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { AiFillPhone, AiOutlineClose } from "react-icons/ai";
import b_e_logo from "../assets/Beretta Electric Logo.png";
import Image from "next/image";

import classes from "./Header.module.css";
import NavBar from "./UI/NavBar";
const Header = (props) => {
  const [width, setWidth] = useState(1000);

  const showingNav = props.showingNav;

  const navButton = () => {
    if (showingNav) {
      return (
        <AiOutlineClose
          className={classes.navButton}
          onClick={props.onToggleNav}
        ></AiOutlineClose>
      );
    } else {
      return (
        <VscThreeBars
          className={classes.navButton}
          onClick={props.onToggleNav}
        />
      );
    }
  };

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.left}>
          <a className={classes["logo-image-container"]} href="/">
            <Image
              className={classes["logo-image"]}
              src={b_e_logo}
              alt="Beretta Electric Logo"
            />
          </a>
        </div>

        {/* <div className={classes["main-image"]}>
          <img src={b_emblem} alt="Beretta Electric" />
        </div> */}
        {/* <a href="/" className={classes.titleText}>
          BERETTA ELECTRIC{" "}
        </a> */}
        <div className={classes.right}>
          {width >= 940 && <NavBar></NavBar>}

          <a className={classes.phoneButton} href="tel:+12508081849">
            <AiFillPhone className={classes.phoneIcon}></AiFillPhone>
            <p>(250) 808-1849</p>
          </a>
          {width < 940 && navButton()}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
