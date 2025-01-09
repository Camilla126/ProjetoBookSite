import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

import { auth } from "../../firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    const [email, setEmail] = useState('')
    const [password, setPassword ] = useState('')
    
    const navigate = useNavigate();

    <main className={styles.main}>
      <img
        src="../../../src/assets/IMG_logincadastro/Intersect.png"
        alt="Book"
      />
      <form>
        <h3>BookWorms</h3>
        <h2>Faça Login</h2>
        <div>
          <label>Email </label>
          <input type="email" placeholder="Digite um @email" name="email" />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" placeholder="********" name="password" />
        </div>
        <input type="checkbox" /> Lembrar senha
        <button type="submit">Login</button>
        <Link to={"/register"}>Não tem uma conta? Cadastre-se</Link>
      </form>
    </main>
  );
};

export default Login;
