import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";
import { AuthContext } from "../../contexts/auth";

const Feed = () => {
  const {
    feedStories,
    loadFeedStories,
    loadingStories,
    deleteStory,
    setStoryToDelete,
    storyToDelete,
  } = useContext(StoryContext)!;

  const { user } = useContext(AuthContext)!;

  useEffect(() => {
    loadFeedStories();
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
                <p>{story.authorName}</p>
                <p>
                  <strong>Publicado em:</strong>{" "}
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

                {user && user.uid === story.uid && (
                  <button onClick={() => setStoryToDelete(story)}>
                    Excluir
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>Nenhuma história disponível no momento.</p>
          )}
        </div>
      )}

      {storyToDelete && (
        <div className="modal">
          <div className="modal-content">
            <p>Tem certeza que deseja excluir "{storyToDelete.title}"?</p>
            <div className="buttons">
              <button onClick={deleteStory} className="confirm">
                Sim
              </button>
              <button onClick={() => setStoryToDelete(null)} className="cancel">
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feed;
