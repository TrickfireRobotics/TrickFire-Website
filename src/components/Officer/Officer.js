import './Officer.scss'

/**
 * @component
 *
 * This component renders each individual box containing officer information, including name and picture.
 *
 * @param {string} props.name - The name that will be displayed over the officer's photo.
 * @param {string} props.position - The position that officer holds within the club.
 * @param {string} props.photo - the photo that will be displayed in the main box.
 * @returns {JSX.Element}
 */
export const Officer = ({image, name, position}) => {
    return (
        <div className='officer-box'>
            <img className='image' src={image} alt={name} />
            <div className='overlay'>
                <p className='officer-name'>{name}</p>
                <p className='officer-position'>{position}</p>
            </div>
        </div>
    );
};
