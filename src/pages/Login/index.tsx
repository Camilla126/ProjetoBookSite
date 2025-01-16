import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";

import { GiSpellBook } from "react-icons/gi";
import { PiUserCircleThin } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { useNavigate } from "react-router-dom";

import { AuthContext, AuthContextInterface } from "../../contexts/auth";

import { useState, useContext } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext) as AuthContextInterface;

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      signIn(email, password);
      navigate("/home");
    }
  };

  return (
    <main className={styles.main}>
      <img src={IntersectImage} alt="Book" />
      <form className={styles.formContainer} onSubmit={handleSignIn}>
        <h3>
          <GiSpellBook className={styles.iconLogo} /> BookWorms
        </h3>
        <h2>
          <PiUserCircleThin className={styles.iconLogin} />
          Faça Login
        </h2>
        <div className={styles.form}>
          <label>Email </label>
          <AiOutlineMail className={styles.iconCamp} />
          <input
            type="text"
            placeholder="Digite um @email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
        </div>
        <div className={styles.form}>
          <label htmlFor="password">Senha</label>
          <RiLockPasswordLine className={styles.iconCamp} />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <button type="submit">Login</button>
        <div className={styles.linkContainer}>
          <p>Não tem uma conta?</p>
          <Link to="/register" className={styles.linkRegister}>
            Cadastre-se
          </Link>
        </div>
      </form>
    </main>
  );
}
