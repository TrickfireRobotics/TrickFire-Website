import './OutlinedBox.scss'
import { Button } from '../Button/Button';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { RepeatingTextBackground } from '../RepeatingTextBackground/RepeatingTextBackground';

/**
 * @component
 *
 * Outlined box component that renders the gray box outlined in white.
 *
 * @param {string} props.link - The link or destination for the button.
 * @param {boolean} props.isLink - Whether or not a button links to an outside resource.
 * @param {boolean} props.isSubpageLink - Whether or not a button links to a subpage.
 * @param {string} props.buttonText - The text/label for the button.
 * @param {string} props.text - The text dsiplayed within the outlined box next to the button.
 * @returns {JSX.Element}
 */
export const OutlinedBox = (props) => {
    return (
        <RepeatingTextBackground backgroundText={props.backgroundText} >
            <MaxWidthContainer>
                <div className='outlined-box'>
                    <p className='text'>{props.text}</p>
                    <Button className='button' isLink={props.isLink} isSubpageLink={props.isSubpageLink} link={props.link} buttonText={props.buttonText} />
                </div>
            </MaxWidthContainer>
        </RepeatingTextBackground>
    );
};
