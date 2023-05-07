const Header = (props) => {
    // console.log(props.name)
    return (
        <div className="tweet-header">
            <h3 className="username">{props.name}</h3>
            <span className="handle">{props.username}</span>
            <span className="timestamp">-{props.time}</span>
        </div>
    );
};
export default Header;