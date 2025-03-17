import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";

const Feed = () => {
  const { feedStories, loadFeedStories } = useContext(StoryContext)!;

  useEffect(() => {
    loadFeedStories();
  }, [loadFeedStories]);

  return (
    <div>
      <div>
        {feedStories.map((story) => (
          <div key={story.id}>
            <h2>{story.title}</h2>
            <p>{story.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
