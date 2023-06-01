import React from "react";
import '../App.css'
import { Button } from "./Button";
import './HeroSection.css'
// import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Book Your Appointments</h1>
      <p>Help by Specialist</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--image"
        >
          GET STARTED
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          OUR SPECIALISTS <FontAwesomeIcon icon={faPlayCircle}/>
        </Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
