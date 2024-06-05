import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer id="footer" className="py-4 text-neutral-400">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <a
            href="/"
            className="navLogo text-3xl font-medium tracking-wide dark:text-neutral-700 hover:text-white"
          >
            Sn
          </a>
        </div>
        <div className="text-xs tracking-tight font-semibold flex flex-wrap text-center lg:flex-col">
          <p className="mr-2">&copy; 2024. All rights reserved.</p>
          <p>Designed & Developed by Sahand Namvar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
