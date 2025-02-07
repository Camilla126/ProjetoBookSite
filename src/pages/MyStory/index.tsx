import styles from "./styles.module.scss";
import image1 from "../../assets/IMG_mystory/Group 8.png";
import image2 from "../../assets/IMG_mystory/Group 7.png";

const MyStory = () => {
  return (
    <main>
      <div className={styles.storyContainer}>
        <h1>Crie sua História</h1>
        <img
          src={image1}
          alt="Livro aberto com xícara de café"
          className={styles.img1}
        />
        <div className={styles.storyArea}>
          <label>Título:</label>
          <input type="text" />
          <textarea name="" id="" placeholder="Comece sua história"></textarea>
          <button>Publicar</button>
        </div>
        <img src={image2} alt="Menina escrevendo" className={styles.img2} />
      </div>
    </main>
  );
};

export default MyStory;
