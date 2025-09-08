import './OutlinedBox.scss'
import { Button } from '../Button/Button';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { RepeatingTextBackground } from '../RepeatingTextBackground/RepeatingTextBackground';

/**
 * @component
 *
 * Outlined box component that renders the gray box outlined in white.
 *
 * @param {boolean} props.isLink - Tells if the button is a link or not.
 * @param {boolean} props.isSubpageLink - Tells if the button is a subpage link or not.
 * @param {string} props.link - The link used on the button to redirect users.
 * @param {string} props.buttonText - The text displayed on top of the button.
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
