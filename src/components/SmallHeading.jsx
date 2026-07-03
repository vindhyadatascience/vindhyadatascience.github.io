// Styles
import './SmallHeading.scss';

export default ({symbol, text}) => {
    return (
        <div className="inline-heading">
            <span className="material-symbols-outlined icon">
                {symbol}
            </span>
            <p className="small-heading">
                {text}
            </p>
        </div>
    )
}
