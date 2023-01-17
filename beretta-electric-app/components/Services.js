import classes from "./Services.module.css";
import {
  RiInfraredThermometerLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
import { AiOutlineHome, AiOutlineCar } from "react-icons/ai";
import { FaSolarPanel, FaHotTub, FaSwimmingPool } from "react-icons/fa";
import { BsOutlet, BsFillPencilFill } from "react-icons/bs";
import { MdOutlineCable } from "react-icons/md";

const Services = () => {
  return (
    <div id="services" className={classes.container}>
      <h2 className={classes.header}>Services</h2>
      <div className={classes.subContainer}>
        <div>
          <MdOutlineCable className={classes.icon}></MdOutlineCable>
          <h3 className={classes.text}>Fibre Optic, Cat 6, Coaxial</h3>
        </div>
        <div>
          <BsFillPencilFill className={classes.icon}></BsFillPencilFill>
          <h3 className={classes.text}>Power/Lighting Design</h3>
        </div>
        <div>
          <FaSwimmingPool className={classes.icon}></FaSwimmingPool>
          <h3 className={classes.text}>Pool Wiring</h3>
        </div>
        <div>
          <FaHotTub className={classes.icon}></FaHotTub>
          <h3 className={classes.text}>Hot Tub Wiring</h3>
        </div>
        <div>
          <RiLightbulbFlashLine className={classes.icon}></RiLightbulbFlashLine>
          <h3 className={classes.text}>Smart Home Lighting</h3>
        </div>
        <div>
          <BsOutlet className={classes.icon}></BsOutlet>
          <h3 className={classes.text}>Smart Home Switching</h3>
        </div>
        <div>
          <FaSolarPanel className={classes.icon}></FaSolarPanel>
          <h3 className={classes.text}>Solar Installation</h3>
        </div>
        <div>
          <AiOutlineCar className={classes.icon}></AiOutlineCar>
          <h3 className={classes.text}>EV Charging Station</h3>
        </div>
        <div>
          <AiOutlineHome className={classes.icon}></AiOutlineHome>
          <h3 className={classes.text}>Custom Home</h3>
        </div>
        <div>
          <RiInfraredThermometerLine
            className={classes.icon}
          ></RiInfraredThermometerLine>
          <h3 className={classes.text}>Thermal Imaging</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
