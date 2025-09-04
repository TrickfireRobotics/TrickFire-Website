import './RepeatingTextBackground.scss'
import { Button } from '../Button/Button';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';

/**
 * Repeating Text Background component that renders the background and box.
 * @component
 */
export const RepeatingTextBackground = (props) => {
    return (
        <div className='repeating-text-background' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <MaxWidthContainer>
                <div className='centered-box'>
                    <p className='text'>{props.text}</p>
                    <Button className='button' link={props.link} buttonText={props.buttonText} />
                </div>
            </MaxWidthContainer>
        </div>
    );
};