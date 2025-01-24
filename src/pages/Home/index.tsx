import { GiSpellBook } from "react-icons/gi";
import { PiBookOpenTextThin } from "react-icons/pi";
import { PiBooksThin } from "react-icons/pi";
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
          Criar minha história
          <PiBookOpenTextThin className={styles.icons} />
        </button>
        <button>
          Meus livros
          <PiBooksThin className={styles.icons} />
        </button>
        <button>
          Melhores leitores
          <PiRankingLight className={styles.icons} />
        </button>
      </div>

      <img src={IntersectImage} alt="Book" />
    </main>
  );
}
