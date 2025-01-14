import { Link } from "react-router-dom";
import styles from "../Header/styles.module.scss";

const Header = () => {
  return (
    <main className={styles.main}>
      <div>
        <h1>HEADER</h1>

        <Link to="/home">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/saved">Saved</Link>
      </div>
    </main>
  );
};

export default Header;
