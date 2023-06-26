import React from "react";
import "../../styles/Home.scss";
import { motion } from "framer-motion";
import start1 from "../../assets/icons/star-1.svg";
import start2 from "../../assets/icons/star-2.svg";
import start3 from "../../assets/icons/star-3.svg";
import start4 from "../../assets/icons/star-4.svg";
import planet1 from "../../assets/icons/planet-1.svg";
import planet2 from "../../assets/icons/planet-2.svg";
import sphere1 from "../../assets/icons/sphere-1.svg";
import sphere2 from "../../assets/icons/sphere-2.svg";
import spacejunk1 from "../../assets/icons/9480113.png";
import spacejunk2 from "../../assets/icons/737967.png";

function Home() {
  const planetVarients = {
    visible: {
      opacity: 1,
      y: 10,
      transition: {
        opacity: {
          duration: 2,
          ease: "easeInOut",
          delay: 2,
        },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 4,
        },
      },
    },
    hidden: { opacity: 0 },
  };

  const spaceJunkVarients = {
    visible: {
      opacity: 1,
      x: 10,
      transition: {
        opacity: {
          duration: 2,
          ease: "easeInOut",
          delay: 4,
        },
        x: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 8,
        },
      },
    },
    hidden: { opacity: 0 },
  };

  return (
    <div className="home">
      <img src={sphere1} alt="sphere1" className="sphere1" />
      <img src={sphere2} alt="sphere2" className="sphere2" />
      <motion.img
        src={spacejunk1}
        alt="spacejunk1"
        className="spacejunk1"
        variants={spaceJunkVarients}
        initial="hidden"
        animate="visible"
      />
      <motion.img
        src={spacejunk2}
        alt="spacejunk2"
        className="spacejunk2"
        variants={spaceJunkVarients}
        initial="hidden"
        animate="visible"
      />
      <div className="hero-container">
        <motion.img
          src={start1}
          animate={{ scale: 1.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="star-1 star"
          alt="star1"
        />
        <motion.img
          src={start2}
          animate={{ scale: 1.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="star-2 star"
          alt="star2"
        />
        <motion.img
          src={start3}
          animate={{ scale: 1.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="star-3 star"
          alt="star3"
        />
        <motion.img
          src={start4}
          animate={{ scale: 1.5 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="star-4 star"
          alt="star4"
        />

        <motion.h1
          className="hero-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          Welcome
        </motion.h1>
      </div>
      <motion.img
        src={planet1}
        variants={planetVarients}
        initial="hidden"
        animate="visible"
        className="planet-left planet-1"
        alt="planet-left"
      />
      <motion.img
        src={planet2}
        className="planet-righ planet-2"
        alt="planet-right"
        variants={planetVarients}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
}
export default Home;
