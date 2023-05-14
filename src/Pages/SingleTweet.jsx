import axios from "axios";
import { useEffect, useState } from "react";
import Tweet from "../components/Tweet";
import { useParams } from "react-router-dom";
import TweetComment from "../components/TweetComment";

const SingleTweet = () => {
    const [tweet, setTweet] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchTweet = async () => {
            const {data} = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}`, {
                headers: {
                    apikey: '6457375d7213f63d4352d8c5'
                }
            });
            setTweet(data.post);
            console.log(data.post);
        };
        fetchTweet();
    }, [id]);
    return (
        <>
            {tweet ? (<Tweet name={tweet?.user?.fullname} content={tweet?.content} image={tweet?.image} profilepicture={`https://avatars.githubusercontent.com/u/${tweet?.user?.githubId}`} key={tweet?._id} />
            ): null}
            <TweetComment />
        </>
    );
}
export default SingleTweet;