import { Link } from "react-router-dom";
import { GiSpellBook } from "react-icons/gi";
import {
  PiBookOpenTextThin,
  PiBooksThin,
  PiRankingLight,
} from "react-icons/pi";

import IntersectImage from "../../assets/IMG_home/Group 1.png";
import Article from "../../Components/Article/article";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>
        Bem vindo ao BookWorms <GiSpellBook className={styles.iconTitle} />
      </h1>

      <div className={styles.contentContainer}>
        <div className={styles.buttonContainer}>
          <Link to="/createstory">
            <button>
              Criar minha história
              <PiBookOpenTextThin className={styles.icons} />
            </button>
          </Link>
          <Link to="/mybooks">
            <button>
              Meus livros
              <PiBooksThin className={styles.icons} />
            </button>
          </Link>
          <Link to="/bestreader">
            <button>
              Melhores leitores
              <PiRankingLight className={styles.icons} />
            </button>
          </Link>{" "}
        </div>

        <img src={IntersectImage} alt="Book" />
      </div>

      <Article />
    </main>
  );
};

export default Home;
