import './Officer.scss'

/**
 * @component
 *
 * This component renders each individual box containing officer information, including name and picture.
 *
 * @param {string} props.name - The name that will be displayed over the officer's photo.
 * @param {string} props.photo - the photo that will be displayed in the main box.
 * @returns {JSX.Element}
 */
export const Officer = (props) => {
    return (
        <div className='officer-box' style={{ backgroundImage: `url(${props.photo})` }}>
            <div className='overlay'>
                <p className='officer-name'>{props.name}</p>
            </div>
        </div>
    );
};
