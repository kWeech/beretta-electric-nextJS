import classes from "./MainPage.module.css";
import electricianInstallation from "../assets/Kelowna Electrician Light Switch Installation.jpg";
import EmailForm from "./EmailForm";
import b_e_logo from "../assets/Beretta Electric Logo.png";
import EmblemList from "./UI/EmblemList";
import Image from "next/image";

const MainPage = () => {
  return (
    <div id="home" className={classes.background}>
      <Image
        className={classes.background_image}
        src={electricianInstallation}
        title="Beretta Electric Electrician Install"
        alt="Beretta Electric electrician installing light switch in Kelowna,
        British Columbia."
      />
      <div className={classes.container}>
        <h1 className={classes.logo} title="Beretta Electric">
          <Image
            src={b_e_logo}
            className={classes.logo_img}
            title="Beretta Electric"
            alt="Beretta Electric logo"
            loading="eager"
          />
        </h1>
        <div className={classes.rci}>
          <EmblemList text="Residential"></EmblemList>
          <EmblemList text="Commercial"></EmblemList>
          <EmblemList text="Industrial"></EmblemList>
        </div>
        <h3 className={classes.text}>
          Locally owned and operated. Servicing our communities electrical needs
          in Vernon, Kelowna, Lake Country and the Okanagan Area for over 18
          years.
        </h3>
        <EmailForm></EmailForm>
      </div>
    </div>
  );
};
export default MainPage;
