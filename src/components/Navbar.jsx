import { FaLinkedinIn } from "react-icons/fa";
import { BsLightbulb, BsLightbulbOff } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav id="navbar" className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center hover:text-white transition-colors duration-0">
        <a
          href="/"
          className="navLogo text-4xl font-medium tracking-wide dark:text-neutral-700"
        >
          Sn
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl dark:text-neutral-700">
        <a
          href="https://www.linkedin.com/in/sahandnamvar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-all duration-100 ease-linear cursor-pointer"
        >
          <FaLinkedinIn className="hover:text-cyan-600 transition-colors duration-0 hover:active:text-white" />
        </a>
        <a
          href="https://github.com/SahandNamvar"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
        >
          <FiGithub className="hover:text-cyan-600 transition-colors duration-0 hover:active:text-white" />
        </a>
        <a className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer">
          {theme === "dark" ? (
            <BsLightbulb
              onClick={toggleTheme}
              className="hover:text-cyan-600 transition-colors duration-0 hover:active:text-white"
            />
          ) : (
            <BsLightbulbOff onClick={toggleTheme} className="" />
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
