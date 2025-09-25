import './Button.scss'
import { Link } from 'react-router-dom';

// Function to scroll to the top of the page after clicking a subpage link.
const smoothScroll = () => window.scrollTo({top: 0, behavior: 'smooth'})

export const Button = (props) => {

    console.log(props.isLink)

    return (        
        <div class="button-component">
            {props.isLink && <button><a href={props.link} target="_blank" rel="noreferrer">{props.buttonText} →</a></button>}
            {props.isSubpageLink && <button><Link to={props.link} onClick={smoothScroll}>{props.buttonText} →</Link></button>}
        </div>
    )
}