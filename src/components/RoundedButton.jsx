// Styles
import "./RoundedButton.scss"

export default ({text, href}) => {

    return (
        <a href={href} role="button" className="rounded-button">
            {text}
        </a>
    )
}