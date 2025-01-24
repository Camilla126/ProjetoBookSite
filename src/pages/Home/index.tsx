import { GiSpellBook } from "react-icons/gi";
import { LuNotebookPen } from "react-icons/lu";
import { RiBookShelfLine } from "react-icons/ri";
import { PiRankingLight } from "react-icons/pi";
import IntersectImage from "../../assets/IMG_home/Group 1.png";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Bem vindo ao BookWorms <GiSpellBook className={styles.iconTitle} />
      </h1>

      <div className={styles.buttonContainer}>
        <button>
          <p>Criar minha história</p>
          <LuNotebookPen className={styles.icons} />
        </button>
        <button>
          <p>Meus livros</p>
          <RiBookShelfLine className={styles.icons} />
        </button>
        <button>
          <p>Melhores leitores</p>
          <PiRankingLight className={styles.icons} />
        </button>
      </div>

      <img src={IntersectImage} alt="Book" />
    </main>
  );
}
