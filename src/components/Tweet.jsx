import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import TweetBody from './TweetBody';
const Tweet = ({ name, username, time, content, picture, profilepicture }) => {

    return (
        <div className="tweet">
            <img
                className="profile-pic"
                src={profilepicture}
                alt="Profile Picture"
            />
            <div className="tweet-content">
                <Header name={name} username={username} time={time} profilepicture={profilepicture} />
                <TweetBody content={content} picture={picture} />
                <Footer />
            </div>
        </div>
    );
};

export default Tweet;