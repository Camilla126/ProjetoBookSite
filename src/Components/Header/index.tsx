import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../Header/styles.module.scss";
import { IoIosLogOut } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { CgFeed } from "react-icons/cg";
import { IoHomeOutline, IoBookmark } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext, AuthContextInterface } from "../../contexts/auth";

export default function Header() {
  const { logOut, user } = useContext(AuthContext) as AuthContextInterface;
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("/home");
  console.log(activeTab);
  const routeToRender = ["/saved", "/home", "/feed"];

  useEffect(() => {
    console.log(location.pathname);
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <header className={styles.main}>
      <div className={styles.userSection}>
        <FaUserCircle className={styles.iconUser} />
        <span className={styles.userName}>{user?.name || "Usuário"}</span>
      </div>

      <nav className={styles.navegation}>
        <div className={styles.navItems}>
          <Link
            to="/home"
            className={`${styles.navItem} ${
              activeTab === "/home" ? styles.active : ""
            }`}
          >
            <IoHomeOutline className={styles.icon} />
            Home
          </Link>
          <Link
            to="/feed"
            className={`${styles.navItem} ${
              activeTab === "/feed" ? styles.active : ""
            }`}
          >
            <CgFeed className={styles.icon} />
            Feed
          </Link>
          <Link
            to="/saved"
            className={`${styles.navItem} ${
              activeTab === "/saved" ? styles.active : ""
            }`}
          >
            <IoBookmark className={styles.icon} />
            Saved
          </Link>
          <div
            className={styles.indicator}
            style={{
              transform: `translateX(${
                activeTab === "/home"
                  ? 0
                  : activeTab === "/feed"
                  ? 200
                  : activeTab === "/saved"
                  ? 380
                  : 0
              }%)`,
              display: routeToRender.includes(activeTab) ? "flex" : "none",
            }}
          />
        </div>
      </nav>

      <Link
        to="/"
        className={styles.logoutLink}
        onClick={() => {
          logOut();
        }}
      >
        <IoIosLogOut className={styles.iconSair} />
        Sair
      </Link>
    </header>
  );
}
