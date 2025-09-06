import './Button.scss'
import { Link } from 'react-router-dom';

export const Button = (props) => {
    return (        
        <div class="button-component">
            {props.isLink && <button><a href={props.link}>{props.buttonText} →</a></button>}
            {props.isSubpageLink && <button><Link to={props.link}>{props.buttonText} →</Link></button>}
        </div>
    )
}