import './BoxShadowImage.scss'

export const BoxShadowImage = (props) => {
    return (
        <img class="boxShadowImage" src={props.imageSource} alt={props.alternativeText} draggable="false"/>
    )
}
