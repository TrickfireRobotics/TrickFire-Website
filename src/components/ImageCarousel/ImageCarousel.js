import './ImageCarousel.scss'

export const ImageCarousel = (props) => {
    return (
        <div class="image-carousel">
            <h1 class="large-center-text">Our Story</h1>

            <div class="images">
                {props.images.map((image) =>
                    <div class="image-and-overlay" key={image.id}>
                        <img key={image.id} src={image.src} alt={image.alt} draggable="false"/>
                        <p class="overlay-text">{image.overlay}</p>
                    </div>
                )}
            </div>
        </div>
    )
}