import { useState } from "react";
import Navbar from "./components/Navbar";

export const App = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div
      className={`${theme === "dark" ? "" : "dark"}
      overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        {theme === "dark" ? (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        ) : (
          <div className="absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
        )}
      </div>
      <div className="container mx-auto px-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default App;
