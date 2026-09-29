import roverOnRock from "../assets/homepage/rover-on-rock.png";
import watermelonDragon from "../assets/homepage/watermelon-dragon.png";
import { Button } from "./Button";
import { MaxWidthContainer } from "./MaxWidthContainer";

/**
 * Hero component for the Homepage.
 */
export const Hero = () => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center px-12">
            <img
                src={roverOnRock}
                alt="Viator rover"
                className="absolute h-full w-full border-y border-white object-cover brightness-40"
            />

            <MaxWidthContainer className="flex flex-col items-center">
                <img
                    src={watermelonDragon}
                    alt="Watermelon dragon mascot"
                    className="absolute -top-[4.5rem] right-[10%] w-48 rotate-[15deg] cursor-pointer transition-all duration-100 ease-in-out hover:animate-wiggle max-md:-top-14 max-md:w-32"
                />
                <div className="mb-20 text-center text-white">
                    <h1 className="hero-title text-[9rem] font-black max-md:text-[5.5rem]">
                        TrickFire Robotics
                    </h1>
                    <p className="mt-4">
                        Developing future engineers, developers, and marketers in the world of
                        competitive robotics
                    </p>
                </div>
                <Button type="internal" link="get-involved" buttonText="Get Involved" />
            </MaxWidthContainer>
        </div>
    );
};
