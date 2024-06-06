import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CONTACT_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import LottieAnimation from "../assets/LottieAnimation.json";

const Contact = () => {
  return (
    <div id="contact" className="border-b pb-4 border-neutral-900">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="my-20 text-center text-4xl dark:text-neutral-500"
      >
        {`Let's Get in `}
        <span className="text-neutral-500 dark:text-neutral-300">Touch!</span>
      </motion.h2>
      <div className="flex flex-wrap text-center items-start justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
          <h3 className="contactsP mb-4 ">
            Feel free to reach out for any queries, or just to say hi!
          </h3>
          {/* Simple html for with submit button */}
          <form
            action=""
            className="flex flex-col gap-4 p-2 pb-8 text-sm font-light font-mono"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-2xl dark:bg-neutral-100 dark:text-neutral-500 bg-transparent border-neutral-700 border-2 text-slate-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-2xl dark:bg-neutral-100 dark:text-neutral-500 bg-transparent border-neutral-700 border-2 text-slate-400"
            />
            <input
              type="subject"
              placeholder="Your Subject"
              className="p-3 rounded-2xl dark:bg-neutral-100 dark:text-neutral-500 bg-transparent border-neutral-700 border-2 text-slate-400"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="p-2 rounded-2xl dark:bg-neutral-100 dark:text-neutral-500 bg-transparent border-neutral-700 border-2 text-slate-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-slate-500 to-rose-300 font-semibold rounded-2xl p-0.5  dark:from-orange-300 dark:via-slate-500 dark:to-cyan-500 w-1/2 mx-auto"
            >
              <span
                className="flex w-full bg-gray-900 rounded-2xl p-2 dark:bg-neutral-100 dark:text-neutral-500
              hover:text-white cursor-pointer transition-all duration-300 ease-in-out hover:active:bg-slate-700 justify-center text-slate-400"
              >
                Send
              </span>
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col text-sm">
            <Lottie animationData={LottieAnimation} className="h-80" />

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2 font-mono">
              <span>
                <FaPhone className="inline mr-2 text-lg text-cyan-600" />
                {CONTACT_CONTENT.phone}
              </span>
              <span>
                <MdEmail className="inline mr-2 text-lg text-blue-600" />
                {CONTACT_CONTENT.email}
              </span>
              <span>
                <FaLocationDot className="inline mr-2 text-lg text-lime-600" />
                {CONTACT_CONTENT.address}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
