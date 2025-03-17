import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";

const MyStory = () => {
  const { myStories, loadingStories, loadMyStories } = useContext(StoryContext);

  useEffect(() => {
    loadMyStories();
  }, []);

  return (
    <div>
      {loadingStories ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {myStories.map((story) => (
            <div key={story.id}>
              <h2>{story.title}</h2>
              <p>{story.content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyStory;
