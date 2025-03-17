import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";

const Feed = () => {
  const { feedStories, loadFeedStories, loadingStories } =
    useContext(StoryContext)!;

  useEffect(() => {
    const fetchStories = async () => {
      await loadFeedStories();
    };

    fetchStories();
  }, []);

  return (
    <div>
      <h1>Feed de Histórias</h1>
      {loadingStories ? (
        <p>Carregando histórias...</p>
      ) : (
        <div>
          {feedStories.length > 0 ? (
            feedStories.map((story) => (
              <div key={story.id}>
                {" "}
                <p>Autor: {story.authorName}</p>{" "}
                <p>
                  <strong>Publicado em: </strong>
                  {story.createdAt instanceof Date
                    ? story.createdAt.toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "Data desconhecida"}
                </p>
                <h2>{story.title}</h2>
                <p>{story.content}</p>
              </div>
            ))
          ) : (
            <p>Nenhuma história disponível no momento.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Feed;
