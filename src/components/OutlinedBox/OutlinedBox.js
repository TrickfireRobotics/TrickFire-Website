import './OutlinedBox.scss'
import { Button } from '../Button/Button';
import { MaxWidthContainer } from '../MaxWidthContainer/MaxWidthContainer';
import { RepeatingTextBackground } from '../RepeatingTextBackground/RepeatingTextBackground';

/**
 * Outlined box component that renders the gray box outlined in white.
 * @component
 */
export const OutlinedBox = (props) => {
    return (
        <RepeatingTextBackground backgroundImage={props.backgroundImage} >
            <MaxWidthContainer>
                <div className='outlined-box'>
                    <p className='text'>{props.text}</p>
                    <Button className='button' link={props.link} buttonText={props.buttonText} />
                </div>
            </MaxWidthContainer>
        </RepeatingTextBackground>
    );
};