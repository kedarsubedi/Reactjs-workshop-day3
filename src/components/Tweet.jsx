import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import TweetBody from './TweetBody';
const Tweet = ({ name, content, image, profilepicture, id }) => {
    return (
        <div className="tweet">
            <img
                className="profile-pic"
                src={profilepicture}
                alt="Profile Picture"
            />
            <div className="tweet-content">
                <Header name={name} username={name} profilepicture={profilepicture} />
                <TweetBody content={content} image={image} id={id} />
                <Footer />
            </div>
        </div>
    );
};

export default Tweet;