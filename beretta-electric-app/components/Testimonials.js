import { useState, useEffect } from "react";
import ReviewCard from "./UI/ReviewCard";
import classes from "./Testimonials.module.css";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
} from "react-icons/bs";

const Testimonials = () => {
  const reviewsList = [
    {
      key: 0,
      name: "Bruce Dougall",
      stars: 5,
      day: new Date("September 5, 2022"),
      text: "Great work done!  I was given excellent suggestions during the process making the finished product even better than I had planned. I'm very happy.  Based on this experience, I highly recommend Beretta Electric and will recommend this company with confidence to all my clients.\nBruce Dougall\nRE/MAX Kelowna.",
    },
    {
      key: 1,
      name: "glenn bergen",
      stars: 5,
      day: new Date("January 4, 2022"),
      text: "I had great difficulty getting a quote on a panel upgrade from 125 to 200 amp service.  After trying 3 different contractors who either wanted money up front or were reluctant to give a clear quote,  Kal visited , looked job over, listened to my needs and on the spot gave quote for parts and estimated labour costs. The following week work was completed on time and on budget.  Kal was very easy to work with, kept me informed and was punctual.  I highly recommend Beretta Electric and will use them for future electrical jobs.",
    },
    {
      key: 2,
      name: "Carmen and Derek Charles",
      stars: 5,
      day: new Date("May 4, 2022"),
      text: "Beretta Electric did the wiring for our hot tub last year. The owner came and quoted and did the install. After having 2 other electricians say they couldn't do it and one that no showed, I was very pleased to have someone reliable and capable get the job done for us. The service was fast and the owner was very accommodating around my work schedule. I really appreciated having someone finally show up with some professionalism.",
    },
    {
      key: 3,
      name: "Phill Morehouse",
      stars: 5,
      day: new Date("Jan 1, 2021"),
      text: "Kal did a flawless job installing a new outdoor outlet and repairing an issue with a dimmer switch.  He was quick, professional, responsive and reasonably priced.  He even followed up to ensure all was well, and he previously walked us through a smoke detector issue over the phone and free of charge. We highly recommend him.",
    },
    {
      key: 4,
      name: "Justin Lukach",
      stars: 5,
      day: new Date("Jan 4, 2021"),
      text: "Just moved to the Okanagan and he came recommended from a good friend. Very professional. Was willing to spend the extra time answering all of my questions and making sure that my concerns were met. Very reasonable price. I would highly recommend to anyone looking for a quality job at a fair price. He is now my go-to guy for any electrical work, hands down for sure!",
    },
    {
      key: 5,
      name: "Dawn M",
      stars: 5,
      day: new Date("Jan 4,2021"),
      text: "Kal assisted Ozanam recovery house with a kitchen renovation.  Incredibly professional business with patience in explanation, took time out of his job to assist another contractor with their needs.  Paid attention to small and large details and continued to check in regarding the needs of the agency and job.  We would recommend Kal and his apprentice for either small or large repair.  Knowledgeable, dependable, skilled, well priced and overall highly personable.  Thank you Kal, from each of us at Ozanam",
    },
  ];

  const [width, setWidth] = useState(1000);
  const [showNum, setShowNum] = useState(1);
  const [showingInd, setShowInd] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  useEffect(() => {
    if (width < 800 && showNum !== 1) {
      setShowNum(1);
      // setShowInd((prevNum) => prevNum * 3 - 2);
      setShowInd(0);
    } else if (width >= 800 && showNum !== 3) {
      setShowNum(3);
      // setShowInd((prevNum) => Math.floor(prevNum / 3));
      setShowInd(0);
    }
  }, [showNum, width]);

  let reviews = [];
  let tempList = [];

  for (let j = 0; j < reviewsList.length; j++) {
    tempList = [];
    for (let i = 0; i < showNum; i++) {
      tempList.push(reviewsList[j]);
      j++;
    }
    j--;
    reviews.push(tempList);
  }

  const showing = reviews[showingInd].map((review) => (
    <ReviewCard
      // className={classes.testimonialCards}
      key={review.key}
      review={review}
    ></ReviewCard>
  ));

  const addShowInd = () => {
    setShowInd((prevNum) => prevNum + 1);
  };

  const subShowInd = () => {
    setShowInd((prevNum) => prevNum - 1);
  };

  return (
    <div
      id="testimonials"
      style={{
        // height: "calc(850px -100px)",
        width: "100%",
        height: "100%",
        // padding-top: 100px;
        overflow: "hidden",
        background: "#C04848" /* fallback for old browsers */,
        backgroundColor: "grey",

        // background:
        //   "linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), `url(${electricianInstallation})`" /* Chrome 10-25, Safari 5.1-6 */,
        // background:
        //   "linear-gradient(rgb(72,0,72,0.8), rgb(192,72,72,0.8)), `url(${electricianInstallation})`" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('/Electrician Standing Next To Beretta Electric Company Truck.jpg')`,
        backgroundBlendMode: "multiply",
        ariaLabel:
          "electrician standing next To Beretta Electric service company truck in Lake Country, British Columbia",

        // backgroundImage: `url(${electricianInstallation})`,
        // backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundOpacity: "0.3",
        // padding: "0",
        // width: "100%",
        // height: "100%",
        // objectFit: "cover",
        // opacity: "0.3",
        // zIndex: "-100",
      }}
      // className={classes.background}
    >
      <div className={classes.container}>
        <h2 className={classes.header}>Testimonials</h2>
        <div className={classes.middle}>
          <div className={classes.leftContainer}>
            {showingInd > 0 && (
              <BsFillArrowLeftSquareFill
                onClick={subShowInd}
                className={classes.leftArrow}
              ></BsFillArrowLeftSquareFill>
            )}
          </div>
          <div className={classes.testimonials}>{showing}</div>
          <div className={classes.rightContainer}>
            {showingInd < reviews.length - 1 && (
              <BsFillArrowRightSquareFill
                className={classes.rightArrow}
                onClick={addShowInd}
              ></BsFillArrowRightSquareFill>
            )}
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <a href="https://g.page/r/CfAYQlH5DMgtEBM/review">
            <div className={classes.write}>WRITE A REVIEW</div>
          </a>

          <a href="https://search.google.com/local/reviews?placeid=ChIJI6gi9N3ufVMR8BhCUfkMyC0">
            <div className={classes.write}>READ MORE</div>
          </a>
        </div>
        {/* <img
            className={classes.background_image}
            src={electricianInstallation}
            alt="Beretta Electric"
          /> */}
      </div>
    </div>
  );
};

export default Testimonials;
