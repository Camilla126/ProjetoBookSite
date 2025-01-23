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
      <div>
        <FaUserCircle />
        {user ? (
          <span className={styles.userName}>{user.name}</span>
        ) : (
          <span className={styles.userName}></span>
        )}
        <div className={styles.navegation}>
          <IoHomeOutline /> <Link to="/home">Home</Link> <CgFeed />{" "}
          <Link to="/feed">Feed</Link> <GoBookmark />
          <Link to="/saved">Saved</Link>
        </div>
        <IoIosLogOut />
        <button
          onClick={() => {
            logOut();
            navigate("/");
          }}
        >
          Sai
        </button>
        r
      </div>
    </header>
  );
}
