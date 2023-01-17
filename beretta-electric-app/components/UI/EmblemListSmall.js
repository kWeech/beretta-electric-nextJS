import classes from "./EmblemListSmall.module.css";
import b_emblem from "../../assets/Beretta Electric Emblem.png";

const EmblemList = (props) => {
  return (
    <div className={classes.list}>
      <img
        src={b_emblem}
        className={classes.emblem_img}
        title="Beretta Electric Emblem"
        alt="Beretta Electric Emblem"
      />
      <h2 className={classes.rci}>{props.text}</h2>
    </div>
  );
};

export default EmblemList;
