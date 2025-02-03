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
        <a href="">
          <SlSocialGithub className={styles.icons} />
        </a>
        <a href="">
          <SlSocialInstagram className={styles.icons} />
        </a>
        <a href="">
          <SlSocialLinkedin className={styles.icons} />
        </a>

        <p>Create by Camilla</p>
      </div>
    </footer>
  );
};

export default Footer;
