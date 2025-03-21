import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";
import { toast } from "react-toastify";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BsSend } from "react-icons/bs";

import styles from "../Feed/styles.module.scss";
import buttonStyles from "./styles.module.scss";

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
    loadMyStories();
  }, []);
  const handlePublish = async (storyId: string) => {
    try {
      await publishExistingStory(storyId);
    } catch {
      toast.error("Erro ao publicar história. Tente novamente.");
    }
  };

  return (
    <main className={styles.feed}>
      <div className={styles.feedContent}>
        <h1>Minhas histórias</h1>
        {loadingStories ? (
          <div className={styles.loadingContainer}>
            <div className={styles.spinner}></div>
            <p>Carregando histórias...</p>
          </div>
        ) : (
          <div className={styles.feedStory}>
            {myStories.length > 0 ? (
              myStories.map((story) => (
                <div key={story.id} className={styles.feedStoryContent}>
                  <p className={styles.DatePublish}>
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
                  <p className={styles.contentCreateStory}>{story.content}</p>
                  <RiDeleteBin6Line
                    className={styles.iconDelete}
                    onClick={() => setStoryToDelete(story)}
                  />

                  {!story.published && (
                    <div className={buttonStyles.buttonContainer}>
                      <button onClick={() => handlePublish(story.id!)}>
                        Publicar <BsSend className={buttonStyles.iconbtn} />
                      </button>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>Nenhuma história criada no momento.</p>
            )}
          </div>
        )}

        {storyToDelete && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>
                Tem certeza que deseja excluir permanentemente"
                {storyToDelete.title}"?
              </p>
              <div className={styles.buttons}>
                <button onClick={() => deleteStory(false)}>Sim</button>
                <button onClick={() => setStoryToDelete(null)}>Não</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default MyStory;
