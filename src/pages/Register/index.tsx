import { Link } from "react-router-dom";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";
import styles from "../Register/styles.module.scss";

import { GiSpellBook } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiUserLight } from "react-icons/pi";

import { useNavigate } from "react-router-dom";
import { AuthContext, AuthContextInterface } from "../../contexts/auth";
import { useState, useContext } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { signUp, loadingAuth } = useContext(
    AuthContext
  ) as AuthContextInterface;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username !== "" && email !== "" && password !== "") {
      await signUp(email, password, username);
      navigate("/home");
    }
  };

  return (
    <main className={styles.main}>
      <img src={IntersectImage} alt="Book" />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h3>
          <GiSpellBook className={styles.iconLogo} /> BookWorms
        </h3>
        <h2>
          <PiUserCircleFill className={styles.iconRegister} />
          Cadastre-se
        </h2>

        <div className={styles.form}>
          <label>Nome de usuário</label>
          <PiUserLight className={styles.iconUser} />
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
          />
        </div>
        <div className={styles.form}>
          <label>Email</label>
          <AiOutlineMail className={styles.iconEmail} />
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
          <RiLockPasswordLine className={styles.iconPassword} />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <button type="submit">
          {loadingAuth ? "Carregando..." : "Cadastrar"}
        </button>
        <div className={styles.linkContainer}>
          <p>Já tem uma conta?</p>
          <Link to="/" className={styles.linkRegister}>
            Faça Login
          </Link>
        </div>
      </form>
    </main>
  );
}
