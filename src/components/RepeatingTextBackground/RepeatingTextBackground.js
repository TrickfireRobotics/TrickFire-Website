import './RepeatingTextBackground.scss'

/**
 * Repeating Text Background component that renders the repeating text in the background of the section.
 * @component
 */
export const RepeatingTextBackground = (props) => {
    // Repeat the given background text
    const repeatedText = Array.from({ length: 10 }, (_, i) => (
        <div
            key={i}
            className='repeat-text-item'
            style={{ top: `${i * 3.5}rem` }}
        >
            {`${props.backgroundText} `.repeat(30)}
        </div>
    ));

    // Return the full background
    return (
        <div className='repeating-text-background'>
            {repeatedText}
            {props.children}
        </div>
    );
};