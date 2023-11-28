// Styles
import './SmallHeading.scss';

export default ({symbol, text}) => {
    return (
        <div className="inline-heading">
            <span className="material-symbols-outlined icon">
                {symbol}
            </span>
            <h6 className="small-heading">
                {text}
            </h6>
        </div>
    )
}
