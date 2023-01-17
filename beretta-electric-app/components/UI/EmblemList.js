import classes from "./EmblemList.module.css";
import b_emblem from "../../assets/Beretta Electric Emblem.png";
import Image from "next/image";

const EmblemList = (props) => {
  return (
    <div className={classes.list}>
      <Image
        src={b_emblem}
        className={classes.emblem_img}
        alt="Beretta Electric Emblem"
      />
      <h2 className={classes.rci}>{props.text}</h2>
    </div>
  );
};

export default EmblemList;
