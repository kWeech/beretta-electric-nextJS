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
      <header className={classes.header}>Services</header>
      <div className={classes.subContainer}>
        <div>
          <MdOutlineCable className={classes.icon}></MdOutlineCable>
          <h1 className={classes.text}>Fibre Optic, Cat 6, Coaxial</h1>
        </div>
        <div>
          <BsFillPencilFill className={classes.icon}></BsFillPencilFill>
          <h1 className={classes.text}>Power/Lighting Design</h1>
        </div>
        <div>
          <FaSwimmingPool className={classes.icon}></FaSwimmingPool>
          <h1 className={classes.text}>Pool Wiring</h1>
        </div>
        <div>
          <FaHotTub className={classes.icon}></FaHotTub>
          <h1 className={classes.text}>Hot Tub Wiring</h1>
        </div>
        <div>
          <RiLightbulbFlashLine className={classes.icon}></RiLightbulbFlashLine>
          <h1 className={classes.text}>Smart Home Lighting</h1>
        </div>
        <div>
          <BsOutlet className={classes.icon}></BsOutlet>
          <h1 className={classes.text}>Smart Home Switching</h1>
        </div>
        <div>
          <FaSolarPanel className={classes.icon}></FaSolarPanel>
          <h1 className={classes.text}>Solar Installation</h1>
        </div>
        <div>
          <AiOutlineCar className={classes.icon}></AiOutlineCar>
          <h1 className={classes.text}>EV Charging Station</h1>
        </div>
        <div>
          <AiOutlineHome className={classes.icon}></AiOutlineHome>
          <h1 className={classes.text}>Custom Home</h1>
        </div>
        <div>
          <RiInfraredThermometerLine
            className={classes.icon}
          ></RiInfraredThermometerLine>
          <h1 className={classes.text}>Thermal Imaging</h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
