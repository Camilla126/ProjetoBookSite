import styles from "./styles.module.scss";
import image1 from "../../assets/IMG_mystory/group 8.png";
import image2 from "../../assets/IMG_mystory/group 7.png";

import { LuNotebookPen, LuPencilLine } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsSend } from "react-icons/bs";

import { useState, useContext } from "react";
import { StoryContext } from "../../contexts/StoryContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateStory = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const storyContext = useContext(StoryContext);

  const navigate = useNavigate();

  const handleSubmitStory = async (e: React.FormEvent, publish: boolean) => {
    e.preventDefault();

    if (!titulo.trim() || !conteudo.trim()) {
      toast.error("Preencha o título e o conteúdo da história.");
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      if (publish) {
        await storyContext?.publishStory(titulo, conteudo);

        navigate("/feed");
      } else {
        await storyContext?.saveStory(titulo, conteudo);

        navigate("/mystory");
      }

      setTitulo("");
      setConteudo("");
    } catch (error) {
      console.error(
        `Erro ao ${publish ? "publicar" : "salvar"} história:`,
        error
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmitStory(e, false);
  };

  const handlePublish = (e: React.MouseEvent<HTMLButtonElement>) => {
    handleSubmitStory(e, true);
  };
  return (
    <main className={styles.main}>
      <div className={styles.storyContainer}>
        <h1>
          Crie sua História <LuNotebookPen className={styles.icon} />
        </h1>

        <img
          src={image1}
          alt="Livro aberto com xícara de café"
          className={styles.img1}
        />

        <form className={styles.storyArea} onSubmit={handleSave}>
          <div className={styles.areaTitlestory}>
            <label htmlFor="title">Título:</label>
            <input
              type="text"
              id="title"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              disabled={isSubmitting}
            />
            <LuPencilLine className={styles.iconinput} />
          </div>

          <textarea
            placeholder="Comece sua história"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
            disabled={isSubmitting}
          ></textarea>

          <div className={styles.buttonContainer}>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Salvando..." : "Salvar"}{" "}
              <MdOutlineMenuBook className={styles.iconbtn} />
            </button>

            <button
              type="button"
              onClick={handlePublish}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Publicando..." : "Publicar"}
              <BsSend className={styles.iconbtn} />
            </button>
          </div>
        </form>

        <img src={image2} alt="Menina escrevendo" className={styles.img2} />
      </div>
    </main>
  );
};

export default CreateStory;
