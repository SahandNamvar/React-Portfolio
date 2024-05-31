import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 dark:border-neutral-300">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl dark:text-slate-500">
              Sahand Namvar
            </h1>
            <span className="bg-gradient-to-r from-p from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent dark:from-orange-300 dark:via-slate-500 dark:to-cyan-500 ">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter dark:text-slate-500">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
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
