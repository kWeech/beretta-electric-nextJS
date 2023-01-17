import Card from "./UI/Card";
import classes from "./ContactUs.module.css";
import CallCard from "./UI/CallCard";

const ContactUs = () => {
  return (
    <Card>
      <h1 id="contactUs" className={classes.header}>
        CONTACT US
      </h1>
      <div>
        <CallCard></CallCard>
      </div>
    </Card>
  );
};
export default ContactUs;
