import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: FormErrorsInterface = {};
    if (!user.email.trim()) newErrors.email = "O email é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      newErrors.email = "O email não é válido.";
    if (!user.password.trim()) newErrors.password = "A senha é obrigatória.";
    else if (user.password.length < 7)
      newErrors.password = "A senha deve ter pelo menos 7 caracteres.";
    setErrors(newErrors);

    alert("formulario enviado");
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
          />{" "}
          {errors.email && <span className={styles.erro}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input
            autoComplete="false"
            type="password"
            placeholder="********"
            value={user.password}
            onChange={handleInputChange}
            name="password"
          />{" "}
          {errors.password && (
            <span className={styles.erro}>{errors.password}</span>
          )}
        </div>

        <label htmlFor="remember">
          <input type="checkbox" />
          Lembrar senha
        </label>

        <button type="submit">Login</button>
        <Link to={"/register"}>Não tem uma conta? Cadastre-se</Link>
      </form>
    </main>
  );
};

export default Login;
