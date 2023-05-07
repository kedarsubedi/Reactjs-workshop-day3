import { useEffect, useState } from "react";
import LikeButton from './LikeButton';
import UnlikeButton from "./UnlikeButton";


const Footer = () => {
    // const [count, setCount] = useState(0);
    // const toggle = () => {
    //     setCount((count) => count + 1);
    // }
    // useEffect( () => {
    //     console.log("hello from useEffect")
    // }, [count]); 
    // const [setretweet] = useState();
    // const retweet = () => {

    // }
    const [isLiked, setIsLiked] = useState(0);
    const toggle = () => {
        setIsLiked((isLiked) => !isLiked);
    };


    return (
        <div className="tweet-footer">
            <button className="btn-reply">Reply</button>
            <button className="btn-retweet">Retweet</button>
            {isLiked ? (
                <UnlikeButton toggle={toggle} />
            ) : (
                <LikeButton toggle={toggle} />
            )}
            <button className="btn-share">Share</button>
        </div>
    );
};

export default Footer;