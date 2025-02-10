import styles from "./styles.module.scss";
import image1 from "../../assets/IMG_mystory/group 8.png"; // Renomeado corretamente
import image2 from "../../assets/IMG_mystory/group 7.png";

import { LuNotebookPen, LuPencilLine } from "react-icons/lu";
import { MdOutlineMenuBook } from "react-icons/md";
import { BsSend } from "react-icons/bs";

import { useState } from "react";

const CreateStory = () => {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("História salva:", { titulo, conteudo });
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
            />
            <LuPencilLine className={styles.iconinput} />
          </div>

          <textarea
            placeholder="Comece sua história"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          ></textarea>

          <div className={styles.buttonContainer}>
            <button type="submit">
              Salvar <MdOutlineMenuBook className={styles.iconbtn} />
            </button>

            <button type="button">
              Publicar <BsSend className={styles.iconbtn} />
            </button>
          </div>
        </form>

        <img src={image2} alt="Menina escrevendo" className={styles.img2} />
      </div>
    </main>
  );
};

export default CreateStory;
