import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/kevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 dark:border-neutral-300">
      <div className="flex flex-wrap w-full">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl dark:text-slate-500"
            >
              Sahand Namvar
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent dark:from-orange-300 dark:via-slate-500 dark:to-cyan-500 "
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter dark:text-slate-500"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.button
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mb-4 p-0.5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded font-semibold"
            >
              <span className=" flex w-full bg-gray-950 p-2 hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:active:bg-slate-700">
                Contact Me
              </span>
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              src={profilePic}
              className="h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="Sahand Namvar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
