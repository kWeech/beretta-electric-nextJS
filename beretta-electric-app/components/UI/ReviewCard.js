import classes from "./ReviewCard.module.css";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = (props) => {
  const stars = [];
  for (let i = 0; i < props.review.stars; i++) {
    stars.push(<AiFillStar key={i} className={classes.stars}></AiFillStar>);
  }

  let dateDif = Date.now() - props.review.day;
  let dateComp;
  const day = 24 * 60 * 60 * 1000;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (dateDif < week) {
    dateComp = `${Math.floor(dateDif / day)} day${
      Math.floor(dateDif / day) > 1 ? "s" : ""
    } ago`;
  } else if (dateDif < month) {
    dateComp = `${Math.floor(dateDif / week)} week${
      Math.floor(dateDif / week) > 1 ? "s" : ""
    } ago`;
  } else if (dateDif < year) {
    dateComp = `${Math.floor(dateDif / month)} month${
      Math.floor(dateDif / month) > 1 ? "s" : ""
    } ago`;
  } else {
    dateComp = `${Math.floor(dateDif / year)} year${
      Math.floor(dateDif / year) > 1 ? "s" : ""
    } ago`;
  }

  return (
    <div className={classes.card}>
      <h4>{props.review.name}</h4>
      <div className={classes.top}>
        {stars}
        <p className={classes.date}>{dateComp}</p>
      </div>
      <p>{props.review.text}</p>
    </div>
  );
};

export default ReviewCard;
