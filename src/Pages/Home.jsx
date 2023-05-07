
import Tweet from '../components/Tweet';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CreateTweet from '../components/CreateTweet';

const Home = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop-todo.fly.dev/posts/all",{
      headers: {
        apikey:'6457375d7213f63d4352d8c5'
      }
    });
    setTweets(posts.data);
  };
  useEffect(() => {
    fetchTweets();
  }, [shouldRefresh]);
  return (
    <>
      <CreateTweet setShouldRefresh={setShouldRefresh}/>
      {/* <Tweet name="Kedar" username="@kedar1" time="4h" content="This is first tweet" picture={shivapic}/>
      <Tweet name="yogendra" username="@yogendra1" time="6h" content="This is second tweet" picture={iphonepic}/>
      <Tweet name="Lama"username="@lama12" time="8h" content="This is third tweet" picture={scooterpic}/>
      <Tweet name="Ram" username="@ram12" time="7h" content="This is last tweet" picture={msipic}/> */}
      {
        tweets.map((tweet) => {
          return <Tweet name={tweet.user.fullname} username={tweet.authorname} key={tweet._id} content={tweet.content} profilepicture={`https://avatars.githubusercontent.com/u/${tweet.user.githubId}`} picture={tweet.image} />
        })
      }
    </>
  );
};

export default Home;