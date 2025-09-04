import './Button.scss'

export const Button = (props) => {
    return (        
        <button><a href={props.link}>{props.buttonText} →</a></button>
    )
}