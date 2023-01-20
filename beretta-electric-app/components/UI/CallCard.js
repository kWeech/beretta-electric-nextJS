import classes from "./CallCard.module.css";

const CallCard = () => {
  return (
    <a rel="nofollow" href="tel:+12508081849" className={classes.atag}>
      <div className={classes.call}>
        <p>CALL NOW</p>
        <p className={classes.underline}>(250) 808-1849</p>
      </div>
    </a>
  );
};

export default CallCard;
