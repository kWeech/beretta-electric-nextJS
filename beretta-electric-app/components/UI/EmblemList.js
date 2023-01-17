import classes from "./EmblemList.module.css";
import b_emblem from "../../assets/Beretta Electric Emblem.png";
import Image from "next/image";

const EmblemList = (props) => {
  return (
    <div className={classes.list}>
      <Image
        src={b_emblem}
        className={classes.emblem_img}
        title="Beretta Electric Emblem"
        alt="Beretta Electric Emblem"
        loading="eager"
      />
      <h2 className={classes.rci}>{props.text}</h2>
    </div>
  );
};

export default EmblemList;
