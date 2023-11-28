export default ({text, href}) => {

    return (
        <a href={href} role="button"
            style={{ 
                borderRadius: "25px",
                padding: "5px 20px",
                marginRight: "15px",
                marginBottom: "10px"}}>
                {text}
        </a>
    )
}