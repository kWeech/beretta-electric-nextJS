import { Fragment } from "react";
import classes from "./Hours.module.css";

const Hours = () => {
  return (
    <Fragment>
      <h2 className={classes.title}>Opening Hours</h2>
      <div className={classes.scheduleContainer}>
        <div className={classes.days}>
          <p>Mon:</p>
          <p>Tue:</p>
          <p>Wed:</p>
          <p>Thu:</p>
          <p>Fri:</p>
          <p>Sat:</p>
          <p>Sun:</p>
        </div>
        <div className={classes.hours}>
          <p>7:00am-5:00pm</p>
          <p>7:00am-5:00pm</p>
          <p>7:00am-5:00pm</p>
          <p>7:00am-5:00pm</p>
          <p>7:00am-5:00pm</p>
          <p>9:00am-3:00pm</p>
          <p>9:00am-3:00pm</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Hours;
