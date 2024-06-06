import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { PiArrowCircleDownFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Scroll = () => {
  const sections = [
    "hero",
    "about",
    "education",
    "technologies",
    "experience",
    "projects",
    "services",
    "contact",
  ];

  const offsets = {
    hero: { offset: { lg: -225, md: -225, sm: -225 } },
    about: { offset: { lg: -200, md: -70, sm: -150 } },
    education: { offset: { lg: -20, md: -70, sm: -200 } },
    technologies: { offset: { lg: -20, md: -40, sm: -60 } },
    experience: { offset: { lg: -300, md: -300, sm: -400 } },
    projects: { offset: { lg: -300, md: -300, sm: -300 } },
    services: { offset: { lg: -300, md: -300, sm: -60 } },
    contact: { offset: { lg: -300, md: -20, sm: -40 } },
  };

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [screenSize, setScreenSize] = useState("");

  // Function to go to the next section
  const nextSection = () => {
    setCurrentSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  // Function to determine screen size based on window width
  const determineScreenSize = () => {
    if (window.innerWidth >= 1024) {
      setScreenSize("lg");
    } else if (window.innerWidth >= 768) {
      setScreenSize("md");
    } else {
      setScreenSize("sm");
    }
  };

  // Determine screen size on initial render and on window resize
  useEffect(() => {
    determineScreenSize();
    window.addEventListener("resize", determineScreenSize);
    return () => window.removeEventListener("resize", determineScreenSize);
  }, []);

  // Determine the next section index
  const nextSectionIndex = (currentSectionIndex + 1) % sections.length;
  // Get the name of the next section
  const nextSectionName = sections[nextSectionIndex];

  // Get the offset for the next section based on the current screen size
  const dynamicOffset = offsets[nextSectionName]?.offset?.[screenSize];

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="fixed bottom-0 right-0 z-10 mb-8 mr-8 lg:bottom-10"
    >
      <div className="shadow-lg hover:scale-125 transition-transform duration-300 ease-in-out active:scale-150 text-slate-300">
        <Link
          to={sections[nextSectionIndex]}
          spy={true}
          smooth={true}
          duration={500}
          offset={dynamicOffset || -150}
          aria-label={`Scroll to ${sections[nextSectionIndex]} section`}
          onClick={nextSection}
        >
          <PiArrowCircleDownFill className="text-4xl" />
        </Link>
      </div>
    </motion.div>
  );
};

export default Scroll;
