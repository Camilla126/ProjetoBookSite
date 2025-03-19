import { useContext, useEffect } from "react";

import { StoryContext } from "../../contexts/StoryContext";
import { AuthContext } from "../../contexts/auth";

import { FaUserCircle } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";

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
    <main className={styles.feed}>
      <div className={styles.feedContent}>
        <h1>Bem vindo ao feed de histórias</h1>

        {loadingStories ? (
          <p>Carregando histórias...</p>
        ) : (
          <div className={styles.feedStory}>
            {feedStories.length > 0 ? (
              feedStories.map((story) => (
                <div key={story.id} className={styles.feedStoryContent}>
                  <p>
                    <FaUserCircle className={styles.iconUser} />
                    {story.authorName}
                  </p>

                  <p className={styles.DatePublish}>
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
                  <p className={styles.contentCreateStory}>{story.content}</p>

                  <div className={styles.likeContainer}>
                    <button
                      onClick={() => toggleLikeStory(story.id!)}
                      className={styles.likeButton}
                    >
                      <FcLike
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
                    <RiDeleteBin6Line
                      className={styles.iconDelete}
                      onClick={() => setStoryToDelete(story)}
                    />
                  )}
                </div>
              ))
            ) : (
              <p>Nenhuma história disponível no momento.</p>
            )}
          </div>
        )}

        {storyToDelete && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>Tem certeza que deseja excluir "{storyToDelete.title}"?</p>
              <div className={styles.buttons}>
                <button onClick={() => deleteStory(true)}>Sim</button>
                <button onClick={() => setStoryToDelete(null)}>Não</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Feed;
