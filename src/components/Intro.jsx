export function Intro() {
  return (
    <div>
      <div className="flex items-center justify-center mt-48 relative z-20">
        <div className="mx-5">
          <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl">Hello🖐🏻</p>
          <p className="text-xl sm:text-3xl md:text-5xl lg:text-6xl">
            I'm Stefan.
          </p>
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl pt-2">
            A passionate Front-end Developer from Bucharest, Romania.
          </p>
          <ul className="flex gap-5 pt-4">
            <li>
              <a href="https://github.com/miysono" target="blank">
                <img
                  src="./images/github-icon.png"
                  alt="my github"
                  className="h-6 md:h-8"
                />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/stefan-ghidrigan-019542230"
                target="blank"
              >
                <img
                  src="./images/linkedin-icon.png"
                  alt="my linkedin"
                  className="h-6  md:h-8"
                />
              </a>
            </li>
          </ul>

          <div className="pt-10 hidden sm:block">
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
              What I'm using:
            </p>
            <ul className="flex items-center gap-5 pt-2">
              <img src="./images/html.png" alt="html" className="h-8 md:h-12" />
              <img src="./images/css.png" alt="html" className="h-8 md:h-12" />
              <img src="./images/js.png" alt="html" className="h-8 md:h-12" />
              <img
                src="./images/react.png"
                alt="html"
                className="h-8 md:h-12"
              />
              <img
                src="./images/tailwind.png"
                alt="html"
                className="h-6 md:h-8"
              />
            </ul>
          </div>
        </div>
        <div className="mx-5  ">
          <img
            src="./images/working-image-transparent.png"
            alt="working"
            className="h-56 sm:h-72 md:h-80 lg:h-96 lg:w-96 rounded-full object-cover"
          />
        </div>
      </div>
      <div className="mx-5 sm:hidden">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl">
          What I'm using:
        </p>
        <ul className="flex items-center gap-5 pt-2">
          <img src="./images/html.png" alt="html" className="h-6" />
          <img src="./images/css.png" alt="html" className="h-6" />
          <img src="./images/js.png" alt="html" className="h-6" />
          <img src="./images/react.png" alt="html" className="h-6" />
          <img src="./images/tailwind.png" alt="html" className="h-4" />
        </ul>
      </div>
    </div>
  );
}
