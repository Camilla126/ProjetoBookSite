import styles from "./styles.module.scss";

const Login = () => {
  return (
    <main className={styles.main}>
      <img
        src="../../../src/assets/IMG_logincadastro/Intersect.png"
        alt="Book"
        width="200px"
      />
      <form>
        <h3>BookWorms</h3>
        <h2>Faça Login</h2>
        <label>Email </label>
        <input type="email" placeholder="Digite um @email" name="email" />
        <label htmlFor="">Senha</label>
        <input type="password" placeholder="Digite uma senha" name="password" />
        <input type="checkbox" /> Lembrar senha
        <button>Login</button>
        <p>
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </form>
    </main>
  );
};

export default Login;
