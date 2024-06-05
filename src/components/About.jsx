import { ABOUT_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      id="about"
      className="border-b border-neutral-900 pb-4 dark:border-neutral-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="my-20 text-center text-4xl dark:text-neutral-500"
      >
        About <span className="text-neutral-500 dark:text-neutral-300">Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              className="h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="About Me"
            />
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <p className="my-3 max-w-xl py-6 dark:text-slate-500">
              {ABOUT_CONTENT}
            </p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-semibold rounded p-0.5  dark:from-orange-300 dark:via-slate-500 dark:to-cyan-500">
              <span
                className="flex w-full bg-gray-950 rounded p-2 dark:bg-neutral-100 dark:text-neutral-500
              hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:active:bg-slate-700"
              >
                Download CV
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
