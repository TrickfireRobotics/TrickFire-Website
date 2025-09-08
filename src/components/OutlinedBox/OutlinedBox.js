import './OutlinedBox.scss'
import { Button } from '../Button/Button';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { RepeatingTextBackground } from '../RepeatingTextBackground/RepeatingTextBackground';

/**
 * @component
 *
 * Outlined box component that renders the gray box outlined in white.
 *
 * @param {string} props.backgroundText - The text that will be repeated in the background of this section.
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
