import { Link, useNavigate } from "react-router-dom";
import styles from "../Header/styles.module.scss";
import { IoIosLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import { useContext } from "react";
import { AuthContext, AuthContextInterface } from "../../contexts/auth";

export default function Header() {
  const { logOut, user } = useContext(AuthContext) as AuthContextInterface;
  const navigate = useNavigate();

  return (
    <header className={styles.main}>
      {/* Seção do usuário */}
      <div className={styles.userSection}>
        <FaUserCircle className={styles.iconUser} />
        <span className={styles.userName}>{user?.name || "Usuário"}</span>
      </div>

      {/* Navegação */}
      <nav className={styles.navegation}>
        <Link to="/home" className={styles.navItem}>
          <IoHomeOutline className={styles.icon} />
          Home
        </Link>
        <Link to="/feed" className={styles.navItem}>
          <CgFeed className={styles.icon} />
          Feed
        </Link>
        <Link to="/saved" className={styles.navItem}>
          <GoBookmark className={styles.icon} />
          Saved
        </Link>
      </nav>

      {/* Botão de sair */}
      <div className={styles.logoutSection}>
        <Link
          to="/"
          className={styles.logoutLink}
          onClick={() => {
            logOut();
            navigate("/");
          }}
        >
          <IoIosLogOut className={styles.iconSair} />
          Sair
        </Link>
      </div>
    </header>
  );
}
