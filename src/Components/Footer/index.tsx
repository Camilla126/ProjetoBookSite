import {
  SlSocialGithub,
  SlSocialInstagram,
  SlSocialLinkedin,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="">
          <SlSocialGithub />
        </a>
        <a href="">
          <SlSocialInstagram />
        </a>
        <a href="">
          <SlSocialLinkedin />
        </a>

        <p>Create by Camilla</p>
      </div>
    </footer>
  );
};

export default Footer;
