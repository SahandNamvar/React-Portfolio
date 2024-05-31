import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

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
      overflow-x-hidden text-neutral-300 antialiased`}
    >
      <div className="fixed top-0 -z-10 h-full w-full">
        {theme === "dark" ? (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        ) : (
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-300 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,240,220,0.8),rgba(200,180,160,0.3))]">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          </div>
        )}
      </div>
      <div className="container mx-auto px-8">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
