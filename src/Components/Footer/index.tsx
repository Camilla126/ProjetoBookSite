import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContainer}>
        <a href="https://github.com/Camilla126">
          <SlSocialGithub className={styles.icons} />
        </a>
        <a href="https://www.instagram.com/mylla_artss">
          <SlSocialInstagram className={styles.icons} />
        </a>
        <a href="https://www.linkedin.com/in/camilla-carvalho-desenvolvedorafront-end/">
          <SlSocialLinkedin className={styles.icons} />
        </a>

        <p>Create by Camilla</p>
      </div>
    </footer>
  );
};

export default Footer;
