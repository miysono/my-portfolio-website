import LazyLoad from "react-lazy-load";

export function AboutMeSection({ aboutRef, children }) {
  return (
    <div className="relative z-30">
      <div className="bg-purple-600" id="about-me" ref={aboutRef}>
        <div className="flex items-center flex-col pb-10">
          <p className="mt-10 text-3xl md:text-5xl lg:text-6xl ">About me</p>

          <div className="flex items-center justify-center my-10 sm:mx-0">
            <div className="w-1/2 mx-5">
              <p className="text-lg md:text-2xl lg:text-3xl">Hello there! 🖐🏻</p>
              <p className="pt-2 text-sm md:text-base lg:text-xl ">
                I'm Stefan, a passionate and enthusiastic front-end developer
                with a strong desire to create beautiful and functional web
                experiences. I'm thrilled to welcome you to my digital corner of
                the internet.
              </p>
            </div>
            <div className="w-32 mx-5 sm:w-44 md:w-56 lg:w-72">
              <LazyLoad once offset={100}>
                <img src="./images/aboutme-svg1.svg" alt="about-me" />
              </LazyLoad>
            </div>
          </div>

          <div className="mx-5 flex items-center justify-center my-10 gap-10 sm:mx-0">
            <div className="w-32 sm:w-44 md:w-56 lg:w-72">
              <LazyLoad once offset={100}>
                <img src="./images/aboutme-svg2.svg" alt="about-me" />
              </LazyLoad>
            </div>
            <div className="w-1/2">
              <p className="text-lg md:text-2xl lg:text-3xl">My approach</p>
              <p className="pt-2 text-sm hidden md:block md:text-base lg:text-xl">
                I approach every project with a combination of creativity and
                attention to detail. I love to experiment with the latest web
                technologies and design trends, always pushing myself to learn
                and grow. I believe that effective communication and
                collaboration are key to successful development, and I'm always
                eager to work with others to bring ideas to life.
              </p>
              <p className="pt-2 text-sm md:hidden">
                I approach every project with a combination of creativity and
                attention to detail. I love to experiment with the latest web
                technologies and design trends, always pushing myself to learn
                and grow.
              </p>
            </div>
          </div>

          <div className="mx-5 flex items-center justify-center my-10 gap-10 sm:mx-0">
            <div className="w-1/2">
              <p className="text-lg md:text-2xl lg:text-3xl">Beyond coding </p>
              <p className="pt-2 hidden md:block md:text-base lg:text-xl">
                When I'm not immersed in code, you can find me playing games,
                enjoying a good show, or thinking about abstract ideas. What's
                fascinating to me is how all these interests interconnect.
                Gaming can introduce complex moral dilemmas, storytelling in
                shows can be as immersive as in games, and abstract ideas often
                find their way into both. It's a beautiful web of inspiration
                that constantly enriches my creative process.
              </p>
              <p className="pt-2 text-sm md:hidden">
                When I'm not immersed in code, you can find me playing games,
                enjoying a good show, or thinking about abstract ideas.
              </p>
            </div>
            <div className="w-32 sm:w-44 md:w-56 lg:w-72">
              <LazyLoad once offset={100}>
                <img src="./images/aboutme-svg3.svg" alt="about-me" />
              </LazyLoad>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
