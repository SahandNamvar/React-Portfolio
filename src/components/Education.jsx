import { FaUserGraduate } from "react-icons/fa6";
import { useState } from "react";
import {
  COURSES_CONTENT as courses,
  AWARDS_CONTENT as awards,
} from "../constants";
import { FaBook } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa6";
import { motion } from "framer-motion";

const EducationItem = ({ degree, major, university, gpa, year }) => (
  <div className="w-full lg:w-1/2 lg:p-8 p-4">
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="text-xl font-semibold">{degree}</h3>
      <span className="text-base font-medium ">{major}</span>
      <span className="text-sm tracking-tighter italic text-gray-400">
        {university}
      </span>
    </div>

    <div className="flex gap-10 items-center justify-center mt-3">
      <span className=" bg-slate-900 rounded-md px-2 dark:bg-green-200 dark:text-slate-500">
        GPA: {gpa}
      </span>
      <div className="flex gap-2 items-center justify-center">
        <FaUserGraduate className=" text-purple-700" />
        <span>{year}</span>
      </div>
    </div>
  </div>
);

const Section = ({ title, items, prop }) => (
  <div className="w-full p-4 lg:p-8 lg:w-1/2 text-center">
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="text-xl font-semibold">
        <span className="flex gap-2 text-center justify-center items-center">
          {title}{" "}
          {prop ? (
            <FaBook className="text-slate-600" />
          ) : (
            <FaTrophy className=" text-amber-700" />
          )}
        </span>
      </h3>
      <div className="flex flex-col border-2 border-neutral-500 rounded-2xl p-4">
        {items.map((item, index) => (
          <>
            <span
              key={index}
              className="text-base font-medium tracking-tight cursor-pointer p-2 rounded-md hover:scale-105 transition-all duration-300 ease-in-out
              hover:text-pink-300"
            >
              {item}
            </span>
            {index !== items.length - 1 && (
              <div className="h-0.5 bg-gradient-to-r from-slate-200 via-pink-300 to-slate-500 dark:bg-neutral-300" />
            )}
          </>
        ))}
      </div>
    </div>
  </div>
);

const EducationInfo = ({ courses, awards }) => (
  <>
    <Section title="Courses" items={courses} prop={true} />
    <Section title="Awards" items={awards} />
  </>
);

const Education = () => {
  const [readMore, setReadMore] = useState(false);

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 dark:border-neutral-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="py-20 text-center text-4xl dark:text-neutral-500"
      >
        Education
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-wrap rounded-2xl border-4 border-neutral-800 dark:text-slate-500"
      >
        <EducationItem
          degree="M.Sc Computer Science"
          major="Software, Systems and Network"
          university="University of North Carolina at Charlotte"
          gpa="4.0"
          year="2025"
        />

        <EducationItem
          degree="B.Sc Business Administration"
          major="Management Information Systems"
          university="San Jose State University"
          gpa="3.85"
          year="2020"
        />

        {readMore && <EducationInfo courses={courses} awards={awards} />}

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full flex justify-center m-2"
        >
          <span
            className="text-center text-purple-700 font-light text-sm  font-mono hover:underline cursor-pointer dark:text-neutral-300"
            onClick={handleReadMore}
          >
            {readMore ? "Read Less" : "Read More"}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
