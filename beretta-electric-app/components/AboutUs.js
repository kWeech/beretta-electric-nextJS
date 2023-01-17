import classes from "./AboutUs.module.css";
import Card from "./UI/Card";
import electrician from "../assets/Kal Buterman Electrical Installation Test.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className={classes.main_container}>
      <h2 id="aboutUs" className={classes.header}>
        About Us
      </h2>
      <div className={classes.sub_container}>
        <div className={classes.image_container}>
          <Image
            src={electrician}
            className={classes.image}
            title="Beretta Electric Electrician Testing Panel"
            alt="Beretta Electric Electrician Kal Buterman Testing Panel in Vernon, British Columbia."
          />
        </div>
        <Card>
          <h3 className={classes.h1}>Kal Buterman</h3>
          <h4 className={classes.h3}>
            Over 25 Years of Journeyman Electrician Experience
          </h4>
          <p className={classes.text}>
            Kal started Beretta Electric over 18 years ago. Him and his team
            will work with you personally to meet all of your electrical needs.
            Safety of your business comes first! Kal strives to deliver absolute
            customer satisfaction by offering electrical services that are
            affordable, safe and long lasting. <br /> <br />
            We offer a full range of electrical services. Residential,
            commercial and industrial. Quality work, at a reasonable price.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
