import { Link } from "react-router-dom";
import styles from "../Login/styles.module.scss";
import IntersectImage from "../../../src/assets/IMG_logincadastro/Intersect.png";

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

  const handleRegister = (event: React.FormEvent) => {
    event.preventDefault();

    const newErrors: FormErrorsInterface = {};
    if (!user.username.trim()) newErrors.username = "Campo obrigatório";
    if (!user.email.trim()) newErrors.email = "Campo obrigatório";
    else if (!/\S+@\S+\.\S+/.test(user.email))
      newErrors.email = "O email não é válido.";
    if (!user.password.trim()) newErrors.password = "Campo obrigatório";
    else if (user.password.length < 7)
      newErrors.password = "A senha deve ter pelo menos 7 caracteres.";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Formulário enviado com sucesso!");
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
          <label htmlFor="">Senha</label>
          <input
            autoComplete="false"
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
          <input type="checkbox" />
          Lembrar senha
        </label>

        <button type="submit">Cadastrar</button>
        <Link to={"/"}>Já tem uma conta? Faça Login</Link>
      </form>
    </main>
  );
};

export default Register;
