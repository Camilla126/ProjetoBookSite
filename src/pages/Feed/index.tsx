import { useContext, useEffect } from "react";
import { StoryContext } from "../../contexts/StoryContext";
import { AuthContext } from "../../contexts/auth";
import { FaUserCircle, FaThumbsUp } from "react-icons/fa";
import styles from "./styles.module.scss";

const Feed = () => {
  const {
    feedStories,
    loadFeedStories,
    loadingStories,
    deleteStory,
    setStoryToDelete,
    storyToDelete,
    toggleLikeStory,
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
                <p>
                  <FaUserCircle className={styles.iconUser} />
                  {story.authorName}
                </p>
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

                <div className={styles.likeContainer}>
                  <button
                    onClick={() => toggleLikeStory(story.id!)}
                    className={styles.likeButton}
                  >
                    <FaThumbsUp
                      className={`${styles.likeIcon} ${
                        user && story.likes && story.likes.includes(user.uid)
                          ? styles.liked
                          : ""
                      }`}
                    />
                    <span className={styles.likeCount}>
                      {story.likes?.length || 0}
                    </span>
                    {user && story.likes && story.likes.includes(user.uid)
                      ? "Curtido"
                      : "Curtir"}
                  </button>
                </div>

                {user && user.uid === story.uid && (
                  <button onClick={() => setStoryToDelete(story)}>
                    Excluir do Feed
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
              <button onClick={() => deleteStory(true)} className="confirm">
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
