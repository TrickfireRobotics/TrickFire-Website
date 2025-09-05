import './RepeatingTextBackground.scss'

/**
 * Repeating Text Background component that renders the repeating text in the background of the section.
 * @component
 */
export const RepeatingTextBackground = (props) => {
    return (
        <div className='repeating-text-background' style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            {props.children}
        </div>
    );
};