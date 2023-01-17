import Hours from "./Hours";
import classes from "./Footer.module.css";
import CallCard from "./UI/CallCard";
import b_e_logo from "../assets/Beretta Electric Logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div>
        {/* IMAGE HERE */}
        <Hours></Hours>
      </div>
      <div className={classes.subContainer}>
        <Image
          src={b_e_logo}
          className={classes.logo_img}
          alt="Beretta Electric"
        />
        <div>
          {/* <h1 id="contactUs" className={classes.header}>
            CONTACT US
          </h1> */}
          <CallCard></CallCard>
        </div>
      </div>
    </div>
  );
};
export default Footer;
