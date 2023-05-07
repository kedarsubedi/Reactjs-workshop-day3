const TweetBody = ({id, content, image}) => {
    
    return (
        <a href={`/tweet/${id}`}>
            <p className="tweet-text">{content}</p>
            <img
                className="tweet-image"
                src={image}
                alt="Tweet Image"
                height={300}
                width={300}
            />
        </a>
    );
};
export default TweetBody;
