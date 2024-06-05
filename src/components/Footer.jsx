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
        <div className="text-xs lg:text-sm tracking-tight font-semibold flex flex-col text-center">
          <p>&copy; 2024. All rights reserved.</p>
          <p>Designed & Developed by Sahand Namvar</p>
        </div>
        <div className="flex gap-2 text-xl">
          <a
            href="https://www.linkedin.com/in/sahandnamvar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-100 ease-linear cursor-pointer"
          >
            <FaLinkedinIn className="hover:text-purple-600 transition-colors duration-0 hover:active:text-white" />
          </a>
          <a
            href="https://github.com/SahandNamvar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
          >
            <FiGithub className="hover:text-purple-600 transition-colors duration-0 hover:active:text-white" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
