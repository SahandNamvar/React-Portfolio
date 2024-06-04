import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSchool, MdSchool } from "react-icons/md";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 dark:border-neutral-300">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="py-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="flex w-full justify-center lg:p-8">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#2d3748", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #2d3748" }}
            date="2023 - 2025"
            iconStyle={{ background: "#2d3748", color: "#fff" }}
            icon={<MdOutlineSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              M.Sc. Computer Science
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">
              Software, Systems and Networks
            </h4>
            <p>
              University of North Carolina at Charlotte <br /> GPA: 4.0
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: "#2d3748", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #2d3748" }}
            date="2016 - 2020"
            iconStyle={{ background: "#2d3748", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Sc. Business Administration
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-sm">
              Management Information Systems
            </h4>
            <p>
              San Jose State University <br /> GPA: 3.85
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Education;
