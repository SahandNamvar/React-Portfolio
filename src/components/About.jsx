import { ABOUT_CONTENT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 dark:border-neutral-300">
      <h1 className="my-20 text-center text-4xl dark:text-neutral-500">
        About <span className="text-neutral-500 dark:text-neutral-300">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
              className="h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
              alt="About Me"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-3 max-w-xl py-6 dark:text-slate-500">
              {ABOUT_CONTENT}
            </p>
          </div>
          <button className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-semibold rounded p-1  dark:from-orange-300 dark:via-slate-500 dark:to-cyan-500">
            <span className="flex w-full bg-gray-950 rounded p-2 dark:bg-neutral-100 dark:text-neutral-500">
              Download CV
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
