import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaPython,
  FaGitAlt,
  FaWindows,
  FaBootstrap,
} from "react-icons/fa";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMacos,
  SiPostman,
  SiSqlite,
  SiFlask,
  SiAndroidstudio,
} from "react-icons/si";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { DiDocker, DiHeroku, DiIntellij } from "react-icons/di";
import { FaDigitalOcean } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";

import { motion } from "framer-motion";

const programming = [
  { icon: IoLogoJavascript, label: "Javascript", color: "text-yellow-300" },
  { icon: FaJava, label: "Java", color: "text-orange-700" },
  { icon: FaPython, label: "Python", color: "text-blue-300" },
  { icon: TbBrandCpp, label: "C/C++", color: "text-teal-400" },
];

const frontend = [
  { icon: FaBootstrap, label: "Bootstrap", color: "text-purple-600" },
  { icon: FaHtml5, label: "HTML", color: "text-orange-600" },
  { icon: FaCss3Alt, label: "CSS", color: "text-blue-600" },
  { icon: RiReactjsLine, label: "React", color: "text-sky-500" },
  { icon: FaAngular, label: "Angular", color: "text-red-600" },
  { icon: RiTailwindCssFill, label: "Tailwind", color: "text-cyan-500" },
];

const backendAndDbs = [
  { icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
  { icon: SiFlask, label: "Flask", color: "text-neutral-400" },
  { icon: IoLogoFirebase, label: "Firebase", color: "text-yellow-500" },
  { icon: SiMongodb, label: "MongoDB", color: "text-emerald-800" },
  { icon: SiMysql, label: "MySQL", color: "text-orange-800" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-800" },
  { icon: SiSqlite, label: "SQLite", color: "text-cyan-300" },
];

const otherTools = [
  { icon: FaGitAlt, label: "Git", color: "text-amber-500" },
  { icon: VscVscode, label: "VSCode", color: "text-blue-600" },
  { icon: DiIntellij, label: "IntelliJ", color: "text-pink-700" },
  { icon: SiPostman, label: "Postman", color: "text-orange-500" },
  { icon: DiDocker, label: "Docker", color: "text-blue-600" },
  { icon: DiHeroku, label: "Heroku", color: "text-purple-600" },
  { icon: FaDigitalOcean, label: "D-Ocean", color: "text-blue-600" },
  { icon: SiAndroidstudio, label: "Android", color: "text-green-600" },
  { icon: SiMacos, label: "macOS", color: "text-blue-600" },
  { icon: FaWindows, label: "Windows", color: "text-blue-600" },
];

// Component to display icons in a horizontal scrollable list
const IconDisplay = ({ techArray, title }) => {
  return (
    <div className="px-10 lg:px-2">
      <h3 className="techTitle text-center py-6 font-semibold text-lg">
        <span className="border-b-2 border-b-zinc-500">{title}</span>
      </h3>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex overflow-x-scroll gap-4 px-6 justify-start lg:justify-center lg:flex-wrap"
      >
        {techArray.map((tech, index) => {
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
              className="rounded-2xl border-2 border-neutral-900 p-4 my-4 min-w-[100px] max-w-[100px] flex-shrink-0 dark:border-neutral-600"
            >
              <div className="flex flex-col justify-center items-center hover:scale-110 transform transition-transform">
                <Icon
                  className={`text-6xl ${tech.color}`}
                  aria-label={tech.label}
                />
                <span className="dark:text-neutral-500 text-sm">
                  {tech.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 dark:border-neutral-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl dark:text-neutral-500"
      >
        Technologies
      </motion.h2>
      <IconDisplay techArray={programming} title="Programming Languages" />
      <IconDisplay techArray={frontend} title="Frontend" />
      <IconDisplay techArray={backendAndDbs} title="Backend & Databases" />
      <IconDisplay techArray={otherTools} title="Other Powerful Tools" />
    </div>
  );
};

export default Technologies;
