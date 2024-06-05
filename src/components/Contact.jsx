import { useState } from "react";
import { CONTACT_CONTENT } from "../constants/index";
import { FaLinkedinIn, FaMapMarker, FaPhoneAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const Contact = () => {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleFocus = (field) => {
    setFocus((prevFocus) => ({ ...prevFocus, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocus((prevFocus) => ({ ...prevFocus, [field]: false }));
    }
  };

  return (
    <motion.div
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1.5 }}
      className="relative w-full flex items-center justify-center p-8"
    >
      <div className="absolute w-64 h-64 bg-gradient-to-b rounded-full bottom-1/2 right-1/2 transform translate-x-2/5 translate-y-2/5"></div>
      <div className="absolute w-64 h-64 opacity-50 rounded-full bottom-1/2 right-1/2 transform translate-x-2/5 translate-y-2/5"></div>

      <div className="relative bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 max-w-4xl w-full rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:bg-gradient-to-r from-slate-800 via-slate-800 to-slate-700">
          <h3 className="text-3xl text-slate-400 mb-4 font-bold">
            {`Let's get in touch!`}
          </h3>
          <p className="contactsP text-yellow-600 mb-6 text-lg">
            Feel free to reach out for any queries or just to say hi!
          </p>

          <div className="mb-4 flex items-center text-slate-300 text-sm">
            <FaMapMarker className="mr-2" />
            <p>{CONTACT_CONTENT.address}</p>
          </div>
          <div className="mb-4 flex items-center text-slate-300 text-sm">
            <MdOutlineMailOutline className="mr-2" />
            <p>{CONTACT_CONTENT.email}</p>
          </div>
          <div className="mb-4 flex items-center text-slate-300 text-sm">
            <FaPhoneAlt className="mr-2" />
            <p>{CONTACT_CONTENT.phone}</p>
          </div>

          <div>
            <p className="text-slate-400 font-bold text-xl">Find Me on :</p>
            <div className="flex flex-wrap gap-3 mt-3 text-3xl">
              <a
                href="https://www.linkedin.com/in/sahandnamvar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-all duration-100 ease-linear cursor-pointer"
              >
                <FaLinkedinIn className="hover:text-yellow-600 text-slate-300 transition-colors duration-0 hover:active:text-white" />
              </a>
              <a
                href="https://github.com/SahandNamvar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 transition-all duration-200 ease-linear cursor-pointer"
              >
                <FiGithub className="hover:text-yellow-600 text-slate-300 transition-colors duration-0 hover:active:text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="p-8 relative">
          <span className="absolute w-32 h-32 bg-slate-800 rounded-full top-32 right-8 transform translate-x-1/2"></span>
          <span className="absolute w-20 h-20 bg-slate-500 rounded-full top-2 right-12"></span>
          <form className="relative z-10 bg-slate-500 p-8 rounded-lg md:shadow-md">
            <span className="text-slate-800 text-3xl tracking-tighter">
              Contact Me
            </span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="w-full p-3 bg-slate-600 text-white border-2 border-slate-700 rounded mb-4 focus:outline-none focus:border-slate-400 mt-2 transition text-xl"
              onFocus={() => handleFocus("name")}
              onBlur={(e) => handleBlur("name", e.target.value)}
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 bg-slate-600 text-white border-2 border-slate-700 rounded mb-4 focus:outline-none focus:border-slate-400 transition mt-2"
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e.target.value)}
            />

            <input
              type="number"
              id="phone"
              name="phone"
              placeholder="Phone"
              className="w-full p-3 bg-slate-600 text-white border-2 border-slate-700 rounded mb-4 focus:outline-none focus:border-slate-400 transition mt-2"
              onFocus={() => handleFocus("phone")}
              onBlur={(e) => handleBlur("phone", e.target.value)}
            />

            <textarea
              id="message"
              name="message"
              placeholder="Message"
              className="w-full p-3 bg-slate-600 text-white border-2 border-slate-700 rounded mb-4 focus:outline-none focus:border-slate-400 transition mt-2 h-32 resize-none"
              onFocus={() => handleFocus("message")}
              onBlur={(e) => handleBlur("message", e.target.value)}
            ></textarea>

            <button className="w-full bg-gradient-to-r from-yellow-800 via-indigo-800 to-blue-800 font-semibold rounded p-1  dark:from-orange-300 dark:via-slate-500 dark:to-cyan-500">
              <span
                className="flex w-full bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 rounded p-2 dark:bg-neutral-100 dark:text-neutral-500
              hover:text-yellow-600 hover:bg-slate-200 cursor-pointer transition-all duration-300 ease-in-out hover:active:bg-slate-700 justify-center text-slate-300"
              >
                Send
              </span>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
