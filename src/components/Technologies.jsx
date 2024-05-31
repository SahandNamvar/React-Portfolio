import { RiReactjsLine } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl dark:text-neutral-500">
        Technologies
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <div className="flex flex-col justify-center items-center">
            <RiReactjsLine className="text-6xl text-react text-cyan-500" />
            <span className="dark:text-neutral-500">React</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
