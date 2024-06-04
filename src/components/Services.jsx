import { useState } from "react";
import { AiFillDatabase } from "react-icons/ai";
import { HiCode } from "react-icons/hi";
import { FaAndroid, FaHandshake, FaCheck } from "react-icons/fa";
import { IoIosArrowRoundForward, IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Backend Design & Dev",
    icon: AiFillDatabase,
    details: [
      "I develop RESTful APIs",
      "I design databases",
      "I write clean, maintainable code",
      "I use version control systems like Git",
      "I use Node.js, Express, MongoDB, and more",
    ],
    color: "text-cyan-600",
  },
  {
    title: "Frontend Design & Dev",
    icon: HiCode,
    details: [
      "I design responsive web pages",
      "I develop interactive web applications",
      "I design & develop user-friendly interfaces",
      "I use HTML, CSS, JavaScript, and more",
    ],
    color: "text-orange-600",
  },
  {
    title: "Mobile App Dev",
    icon: FaAndroid,
    details: [
      "I design & develop Android apps",
      "I use Java & Android Studio",
      "I use Firebase for backend services",
      "I use SQLite for local storage",
      "I use RESTful APIs for remote data access",
    ],
    color: "text-green-600",
  },
  {
    title: "Professionalism & Integrity",
    icon: FaHandshake,
    details: [
      "I am professional and punctual",
      "I am a team player and leader",
      "I am honest and transparent",
      "I am respectful and courteous",
      "I am reliable and dependable",
      "I am self-motivated and detail-oriented",
      "I am self-disciplined and self-managed",
      "I am a problem solver and critical thinker",
    ],
    color: "text-rose-600",
  },
];

const Services = () => {
  // Use a single state to keep track of which card's details are shown
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleReadMore = (index) => {
    // If the same index is clicked, toggle it off, otherwise set the new index
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="border-b border-neutral-900 dark:border-neutral-300">
      <h2 className="py-20 text-center text-4xl">Services</h2>
      <div className="flex flex-wrap lg:justify-center">
        {servicesData.map((service, index) => (
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-neutral-800 dark:bg-neutral-200 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg mb-4">{service.title}</h3>
              <div
                className={`flex items-center hover:scale-105 transform transition-transform cursor-pointer`}
                onClick={() => toggleReadMore(index)}
              >
                <service.icon className={`mr-2 text-2xl ${service.color}`} />
                <span className="text-sm">
                  {activeIndex === index ? "View Less" : "View More"}
                </span>
                {activeIndex === index ? (
                  <IoIosClose className="text-xl ml-1 text-red-500" />
                ) : (
                  <IoIosArrowRoundForward className="text-2xl ml-1 text-purple-400" />
                )}
              </div>
              {activeIndex === index && (
                <div className="mt-3 border-t-2 border-slate-700">
                  <ul className="list-disc items-start pl-1.5 mt-3">
                    {service.details.map((detail, detailIndex) => (
                      <li
                        className="flex items-center text-sm tracking-tighter mb-2
                        hover:text-green-600 hover:scale-105"
                        key={detailIndex}
                      >
                        <FaCheck className="mr-2 text-green-800 text-xs" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
