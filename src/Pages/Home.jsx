
import Tweet from '../components/Tweet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateTweet from '../components/CreateTweet';

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all", {
      headers: {
        apikey: '6457375d7213f63d4352d8c5'
      }
    });
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
  return (
    <>
      <CreateTweet setShouldRefresh={setShouldRefresh} />
      {tweets.length &&
        tweets.map((tweet) => {
          return <Tweet name={tweet?.user.fullname} username={tweet?.authorname} key={tweet?._id} content={tweet?.content} profilepicture={`https://avatars.githubusercontent.com/u/${tweet?.user.githubId}`} picture={tweet?.image} id={tweet?._id} />
        })
      }
    </>
  );
};

export default Home;