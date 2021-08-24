
const like = ({ onClick, liked }) => {
    let classes = "fa inline fa-heart";
    if (!liked) classes += "-o";
    return <i
        style={{ cursor: "pointer" }}
        onClick={onClick}
        className={classes}
        aria-hidden="true"
    />
}


export default like
