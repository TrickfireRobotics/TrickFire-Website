import "./Hero.scss";
import roverOnRock from "../../assets/Homepage/roverOnRock.png";
import watermelonDragon from "../../assets/Homepage/WatermelonDragon.png";
import { Button } from "../Button/Button.js";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainer.js";

/**
 * @returns Hero component for the Homepage.
 */
export const Hero = () => {
  return (
    <div className="hero">
      <img src={roverOnRock} alt="Viator rover" className="background-image" />

      <MaxWidthContainer>
        <img
          src={watermelonDragon}
          alt="Watermelon dragon mascot"
          className="watermelonDragon"
        />
        <div className="text">
          <h1 className="title">TrickFire Robotics</h1>
          <p className="subtitle">
            Developing future engineers, developers, and marketers in the world
            of competitive robotics
          </p>
        </div>
        <Button
          type="internal"
          link="get-involved"
          buttonText="Get Involved"
          className="button"
        />
      </MaxWidthContainer>
    </div>
  );
};
