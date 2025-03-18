import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";
import { toast } from "react-toastify";
const MyStory = () => {
  const {
    myStories,
    loadingStories,
    loadMyStories,
    deleteStory,
    setStoryToDelete,
    storyToDelete,
    publishExistingStory,
  } = useContext(StoryContext)!;

  useEffect(() => {
    const fetchStories = async () => {
      await loadMyStories();
    };

    fetchStories();
  }, []);

  const handlePublish = async (storyId: string) => {
    try {
      await publishExistingStory(storyId);

      await loadMyStories();
    } catch {
      toast.error("Erro ao publicar história. Tente novamente.");
    }
  };

  return (
    <div>
      <h1>Minhas histórias</h1>
      {loadingStories ? (
        <p>Carregando histórias...</p>
      ) : (
        <div>
          {myStories.length > 0 ? (
            myStories.map((story) => (
              <div key={story.id}>
                <p>
                  <strong>Criado em:</strong>
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
                <button onClick={() => setStoryToDelete(story)}>Excluir</button>

                {!story.published && (
                  <button onClick={() => handlePublish(story.id!)}>
                    Publicar
                  </button>
                )}
              </div>
            ))
          ) : (
            <p>Nenhuma história criada no momento.</p>
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

export default MyStory;
