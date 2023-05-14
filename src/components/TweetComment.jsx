import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TweetComment = () => {
    const [comment, setComment] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const fetchComment = async () => {
            const { data } = await axios.get(`https://react-workshop-todo.fly.dev/posts/${id}/comments`, {
                content: "Hello World"
            }, {
                headers: {
                    apikey: '6457375d7213f63d4352d8c5'
                },
            });
            setComment(data.post);
            console.log(data.post);
        };
        fetchComment();
    }, [id]);
    return (
        <>
            <div class="write-comment">
                <form>
                    <textarea placeholder="Write a comment..."></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div class="comment-section">
                <div class="comment">
                    <img src="https://via.placeholder.com/48" alt="Profile Image" class="profile-image" />
                    <div className="tweet-header">
                        <h3 className="username">Kedar</h3>
                        <span className="handle">@kedar</span>
                        <span className="timestamp">-4h</span>
                    <div class="comment-text">This is a sample comment.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TweetComment;