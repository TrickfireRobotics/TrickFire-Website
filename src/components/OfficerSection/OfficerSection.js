import './OfficerSection.scss'
import { Officer } from '../Officer/Officer';
import { urlFor } from '../../assets/SanityClient';

/**
 * @component
 * 
 * Renders the complete officer section.
 * 
 * @param {Array<Object>} allOfficers - Array of officer objects from Sanity
 * @param {string} allOfficers[].name - The officer's name
 * @param {string} props.allOfficers[].position - The officer's position/title
 * @param {Object} props.allOfficers[].image - The officer's image object (Sanity image)
 * @returns {JSX.Element}
 * 
 * @example
 * // Usage with officers data from Sanity
 * <OfficerSection allOfficers={officers} />
 */
export const OfficerSection = ({allOfficers}) => {
    return (
        <div className='officer-section'>
            <h1 className='title'>TrickFire is 100% Student-Led</h1>
            { /* Grid of Officer Images */}
            <div className='officer-grid'>
                {allOfficers.map((officer, i) => (
                    <Officer
                        key={i}
                        image={urlFor(officer.image).auto('format').url()}
                        name={officer.name}
                        position={officer.position}
                    />
                ))}
            </div>
        </div>
    );
};
