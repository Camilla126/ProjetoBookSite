import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";

import { GiSpellBook } from "react-icons/gi";
import { PiUserCircleThin } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";

const Login = () => {
  interface FormErrorsInterface {
    email?: string;
    password?: string;
  }

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrorsInterface>({});

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setUser({ email: savedEmail, password: savedPassword });
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: FormErrorsInterface = {};
    if (!user.email.trim()) newErrors.email = "Campo obrigatório";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      newErrors.email = "O email não é válido.";
    if (!user.password.trim()) newErrors.password = "Campo obrigatório";
    else if (user.password.length < 6)
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await signInWithEmailAndPassword(auth, user.email, user.password);
        alert("Login realizado com sucesso!");

        setUser({ email: "", password: "" });
      } catch (error) {
        console.log("Erro ao fazer login: ", error);
      }
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  };

  return (
    <main className={styles.main}>
      <img src={IntersectImage} alt="Book" />
      <form onSubmit={handleSubmit} className={styles.formContainer}>
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
            value={user.email}
            onChange={handleInputChange}
            name="email"
            autoComplete="off"
          />
          {errors.email && <span className={styles.erro}>{errors.email}</span>}
        </div>
        <div className={styles.form}>
          <label htmlFor="password">Senha</label>
          <RiLockPasswordLine className={styles.iconCamp} />
          <input
            type="password"
            placeholder="********"
            value={user.password}
            onChange={handleInputChange}
            name="password"
            autoComplete="off"
          />
          {errors.password && (
            <span className={styles.erro}>{errors.password}</span>
          )}
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
};

export default Login;
