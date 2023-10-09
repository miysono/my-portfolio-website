import { useState } from "react";
import LazyLoad from "react-lazy-load";

export function Project({
  src = "./images/logo192.png",
  title = "Title",
  description = "Lorem ipsum dolor sit, amem dolor ipsum dolor sit, lorem.",
  link = "#",
}) {
  const [back, setBack] = useState(false);

  return (
    <a href={link} target="blank">
      <div
        className="w-64 h-72 md:w-72 md:h-80 lg:w-80 lg:h-96"
        onMouseEnter={() => setBack(true)}
        onMouseLeave={() => setBack(false)}
      >
        <div
          className={
            !back
              ? "w-64 h-72 rounded-3xl bg-blue-400 duration-500 overflow-hidden md:w-72 md:h-80 lg:w-80 lg:h-96"
              : "w-64 h-72 rounded-3xl bg-purple-600  duration-500 scale-105 -scale-x-100 overflow-hidden md:w-72 md:h-80 lg:w-80 lg:h-96"
          }
        >
          {!back ? (
            <div className="flex items-center justify-center flex-col">
              <LazyLoad once offset={100}>
                <img
                  src={src}
                  alt="project"
                  className="h-44 object-cover md:h-52 lg:h-60"
                />
              </LazyLoad>
              <div>
                <p className="text-2xl m-5 text-center md:text-3xl lg:text-4xl">
                  {title}
                </p>
              </div>
            </div>
          ) : (
            <div className="-scale-x-100 animate-fade-in flex justify-center h-full p-5">
              <p className="text-xl">{description}</p>
            </div>
          )}
        </div>
      </div>
    </a>
  );
}
