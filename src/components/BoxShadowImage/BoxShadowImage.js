import './BoxShadowImage.scss'

/**
 * @component
 * 
 * A standardized component for an image with a box shadow.
 *
 * @param {Image} imageSource - The image source (URL or imported image)
 * @param {string} altText - Alternative text to add to the image
 * @returns {JSX.Element} An image component with the class name 'box-shadow-image'
 * 
 * @example
 * <BoxShadowImage imageSource={WatermelonDragon} alternativeText="Watermelon Dragon"/>
 */
export const BoxShadowImage = ({imageSource, altText}) => {

    return (
        <img className="box-shadow-image" src={imageSource} alt={altText} draggable="false"/>
    )
}
