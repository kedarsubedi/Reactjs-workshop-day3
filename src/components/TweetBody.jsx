const TweetBody = ({content, picture}) => {
    return (
        <>
            <p className="tweet-text">{content}</p>
            <img
                className="tweet-image"
                src={picture}
                alt="Tweet Image"
                height={300}
                width={300}
            />
        </>
    );
};
export default TweetBody;
