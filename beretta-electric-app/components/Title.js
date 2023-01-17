import { Fragment } from "react";
import classes from "./Title.module.css";
import CallCard from "./UI/CallCard";
const Title = () => {
  return (
    <Fragment>
      <h2 className={classes.rci}>Residential, Commercial, Industrial</h2>
      <header className={classes.text}>BERETTA ELECTRIC</header>
      <p>
        Servicing Vernon, Kelowna, Lake Country and the Okanagan Area for 18
        years.
      </p>
      <CallCard></CallCard>
    </Fragment>
    //   section className={classes.summary}>
    //       <h2>Delicious Food, Delivered To You</h2>
    //       <p>
    //         Choose your favorite meal from our broad selection of available meals
    //         and enjoy a delicious lunch or dinner at home.
    //       </p>
    //       <p>
    //         All our meals are cooked with high-quality ingredients, just-in-time and
    //         of course by experienced chefs!
    //       </p>
    //     </section>;
  );
};

export default Title;
