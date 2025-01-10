import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

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
      <form onSubmit={handleSubmit}>
        <h3>BookWorms</h3>
        <h2>Faça Login</h2>
        <div>
          <label>Email </label>
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
          <input type="checkbox" id="remember" />
          Lembrar senha
        </label>

        <button type="submit">Login</button>
        <Link to="/register">Não tem uma conta? Cadastre-se</Link>
      </form>
    </main>
  );
};

export default Login;
