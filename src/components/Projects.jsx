import { PROJECTS_CONTENT } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-4 dark:border-neutral-300"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      {PROJECTS_CONTENT.map((project, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              src={project.img}
              width={150}
              height={150}
              alt={project.title}
              className="mb-6 rounded"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>
            {project.technologies.map((technologies, index) => (
              <span
                key={index}
                className="mr-2 mt-4 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-500"
              >
                {technologies}
              </span>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
