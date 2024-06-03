import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaAndroid,
  FaPython,
  FaGitAlt,
  FaWindows,
} from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMacos,
  SiPostman,
} from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { IoLogoFirebase } from "react-icons/io5";
import { motion } from "framer-motion";

const TECH_CONTENT = [
  { icon: FaHtml5, label: "HTML", color: "text-orange-700" },
  { icon: FaCss3Alt, label: "CSS", color: "text-blue-400" },
  { icon: TbBrandJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: FaNodeJs, label: "NodeJS", color: "text-green-500" },
  { icon: FaAngular, label: "Angular", color: "text-red-600" },
  { icon: RiReactjsLine, label: "React", color: "text-cyan-500" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-700" },
  { icon: SiMysql, label: "MySQL", color: "text-amber-500" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-cyan-700" },
  { icon: FaJava, label: "Java", color: "text-rose-800" },
  { icon: FaAndroid, label: "Android", color: "text-lime-500" },
  { icon: FaPython, label: "Python", color: "text-sky-200" },
  { icon: PiFileCpp, label: "C/C++", color: "text-sky-400" },
  { icon: FaGitAlt, label: "Git", color: "text-red-400" },
  { icon: SiPostman, label: "Postman", color: "text-orange-500" },
  { icon: FaWindows, label: "Windows", color: "text-blue-800" },
  { icon: SiMacos, label: "macOS", color: "text-pink-400" },
  { icon: IoLogoFirebase, label: "Firebase", color: "text-yellow-500" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 dark:border-neutral-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl dark:text-neutral-500"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex overflow-x-scroll gap-4 px-4 py-2"
      >
        {TECH_CONTENT.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: [10, -10] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
                repeatType: "reverse",
                delay: index * 0.1,
              }}
              key={index}
              className="rounded-2xl border-4 border-neutral-800 p-4 min-w-[100px] max-w-[100px] flex-shrink-0 dark:border-neutral-600"
            >
              <div className="flex flex-col justify-center items-center">
                <Icon
                  className={`text-6xl ${tech.color}`}
                  aria-label={tech.label}
                />
                <span className="dark:text-neutral-500">{tech.label}</span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Technologies;
