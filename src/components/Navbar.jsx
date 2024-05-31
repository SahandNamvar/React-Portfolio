import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode, MdDarkMode } from "react-icons/md";

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="#"
          className="text-4xl font-medium tracking-wide dark:text-neutral-700"
        >
          Sn
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl dark:text-neutral-700">
        <FaLinkedin />
        <FaGithub />
        <span>
          {theme === "dark" ? (
            <MdOutlineDarkMode onClick={toggleTheme} />
          ) : (
            <MdDarkMode
              onClick={toggleTheme}
              className="dark:text-neutral-700"
            />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
