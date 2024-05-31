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
        </div>
      </div>
    </div>
  );
};

export default About;
