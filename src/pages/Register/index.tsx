import { Link } from "react-router-dom";
import styles from "../Login/styles.module.scss";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";

import { auth } from "../../firebaseConnection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useState, useEffect } from "react";

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
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState<FormErrorsInterface>({});

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername && savedEmail && savedPassword) {
      setUser({
        username: savedUsername,
        email: savedEmail,
        password: savedPassword,
      });
      setRemember(true);
    }
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleRememberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRemember(event.target.checked);
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

        if (remember) {
          localStorage.setItem("username", user.username);
          localStorage.setItem("email", user.email);
          localStorage.setItem("password", user.password);
        } else {
          localStorage.removeItem("username");
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }

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
      <form onSubmit={handleRegister}>
        <h3>BookWorms</h3>
        <h2>Cadastre-se</h2>

        <div>
          <label>Nome de usuário</label>
          <input
            type="text"
            placeholder="Usuário Anônimo"
            value={user.username}
            onChange={handleInputChange}
            name="username"
          />
          {errors.username && (
            <span className={styles.erro}>{errors.username}</span>
          )}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite um @email"
            value={user.email}
            onChange={handleInputChange}
            name="email"
          />
          {errors.email && <span className={styles.erro}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            autoComplete="off"
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

        <label htmlFor="remember">
          <input
            type="checkbox"
            id="remember"
            checked={remember}
            onChange={handleRememberChange}
          />
          Lembrar senha
        </label>

        <button type="submit">Cadastrar</button>
        <Link to="/">Já tem uma conta? Faça Login</Link>
      </form>
    </main>
  );
};

export default Register;
