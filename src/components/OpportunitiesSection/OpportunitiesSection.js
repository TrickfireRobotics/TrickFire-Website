import "./OpportunitiesSection.scss";
import { MaxWidthContainer } from "../MaxWidthContainer/MaxWidthContainer";

/**
 * @component
 * Section showcasing the different fields of opportunities at TrickFire Robotics
 * @param {Array<String>} disciplines - List of discipline names to display
 * @returns {JSX.Element}
 *
 * @example
 * <OpportunitiesSection disciplines={["Software Engineering, Mechanical Engineering"]}
 */
export const OpportunitiesSection = ({ disciplines }) => {
  return (
    <div className="opportunities-section">
      <MaxWidthContainer>
        <h1 className="large-italic-center">Opportunities In...</h1>
        <div className="discipline-list">
          {disciplines.map((item, index) => (
            <div className="discipline" key={index}>
              <h1>{item}</h1>
            </div>
          ))}
        </div>
      </MaxWidthContainer>
    </div>
  );
};
