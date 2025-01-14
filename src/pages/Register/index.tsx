import { Link } from "react-router-dom";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";
import styles from "../Register/styles.module.scss";

import { GiSpellBook } from "react-icons/gi";
import { PiUserCircleFill } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiUserLight } from "react-icons/pi";

import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useState } from "react";

const Register = () => {
  interface FormErrorsInterface {
    username?: string;
    email?: string;
    password?: string;
  }

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrorsInterface>({});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: FormErrorsInterface = {};
    if (!user.username.trim()) newErrors.username = "Campo obrigatório";
    if (!user.email.trim()) newErrors.email = "Campo obrigatório";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      newErrors.email = "O email não é válido.";
    if (!user.password.trim()) newErrors.password = "Campo obrigatório";
    else if (user.password.length < 6)
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          user.email,
          user.password
        );
        await updateProfile(userCredential.user, {
          displayName: user.username,
        });

        // Salvar informações de login no localStorage
        localStorage.setItem("email", user.email);
        localStorage.setItem("password", user.password);

        setUser({ username: "", email: "", password: "" });

        alert("Cadastro realizado com sucesso!");
      } catch (error: unknown) {
        let errorMessage = "Erro desconhecido";
        if (error instanceof Error) {
          errorMessage = error.message;
        }
        alert(`Erro ao fazer cadastro: ${errorMessage}`);
      }
    } else {
      alert("Preencha todos os campos corretamente!");
    }
  };

  return (
    <main className={styles.main}>
      <img src={IntersectImage} alt="Book" />
      <form onSubmit={handleRegister} className={styles.formContainer}>
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
            value={user.username}
            onChange={handleInputChange}
            name="username"
          />
          {errors.username && (
            <span className={styles.erro}>{errors.username}</span>
          )}
        </div>
        <div className={styles.form}>
          <label>Email</label>
          <AiOutlineMail className={styles.iconEmail} />
          <input
            type="text"
            placeholder="Digite um @email"
            value={user.email}
            onChange={handleInputChange}
            name="email"
          />
          {errors.email && <span className={styles.erro}>{errors.email}</span>}
        </div>
        <div className={styles.form}>
          <label htmlFor="password">Senha</label>
          <RiLockPasswordLine className={styles.iconPassword} />
          <input
            type="password"
            placeholder="********"
            value={user.password}
            onChange={handleInputChange}
            name="password"
          />
          {errors.password && (
            <span className={styles.erro}>{errors.password}</span>
          )}
        </div>
        <button type="submit">Cadastrar</button>
        <div className={styles.linkContainer}>
          <p>Já tem uma conta?</p>
          <Link to="/" className={styles.linkRegister}>
            Faça Login
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Register;
