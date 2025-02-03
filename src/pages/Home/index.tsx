import { GiSpellBook } from "react-icons/gi";
import { PiBookOpenTextThin } from "react-icons/pi";
import { PiBooksThin } from "react-icons/pi";
import { PiRankingLight } from "react-icons/pi";
import IntersectImage from "../../assets/IMG_home/Group 1.png";

import Article from "../../Components/Article/article";

import { Link } from "react-router-dom";

import styles from "./styles.module.scss";

const Home = () => {
  return (
    <main className={styles.main}>
      <h1>
        Bem vindo ao BookWorms <GiSpellBook className={styles.iconTitle} />
      </h1>

      <div className={styles.buttonContainer}>
        <Link to="/mystory">
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
          <button className={styles.button3}>
            Melhores leitores
            <PiRankingLight className={styles.icons} />
          </button>
        </Link>
      </div>

      <img src={IntersectImage} alt="Book" />
      <Article />
    </main>
  );
};
export default Home;
