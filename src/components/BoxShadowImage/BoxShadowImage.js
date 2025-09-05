import './BoxShadowImage.scss'

export const BoxShadowImage = (props) => {
    return (
        <img class="box-shadow-image" src={props.imageSource} alt={props.alternativeText} draggable="false"/>
    )
}
