import styles from "./styles.module.scss";
import image1 from "../../assets/IMG_mystory/Group 8.png";
import image2 from "../../assets/IMG_mystory/Group 7.png";

import { LuNotebookPen, LuPencilLine } from "react-icons/lu";

const CreateStory = () => {
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

        <div className={styles.storyArea}>
          <div className={styles.areaTitlestory}>
            <label htmlFor="title">Título:</label>
            <input type="text" id="title" />{" "}
            <LuPencilLine className={styles.iconinput} />
          </div>

          <textarea placeholder="Comece sua história"></textarea>
          <button>Salvar</button>
          <button>Publicar</button>
        </div>

        <img src={image2} alt="Menina escrevendo" className={styles.img2} />
      </div>
    </main>
  );
};

export default CreateStory;
