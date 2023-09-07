import { Link } from "react-scroll";

export function Header({
  homeInView,
  aboutInView,
  portfolioInView,
  toggleOpen,
  isOpen,
}) {
  return (
    <>
      <header className=" hidden lg:flex items-center justify-end text-lg text-gray-200 sticky top-0 z-50 bg-gray-900 bg-opacity-50">
        <nav>
          <ul className="flex mx-8 gap-5">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li
                className={
                  homeInView
                    ? "bg-purple-600 p-5 rounded-b-xl text-center"
                    : "p-5 rounded-b-xl text-center hover:bg-purple-600 duration-300"
                }
              >
                Home
              </li>
            </Link>
            <Link
              to="about-me"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li
                className={
                  aboutInView
                    ? "bg-blue-400 p-5 rounded-b-xl"
                    : "hover:bg-blue-400 p-5 rounded-b-xl duration-300"
                }
              >
                About me
              </li>
            </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li
                className={
                  portfolioInView
                    ? "bg-purple-600 p-5 rounded-b-xl"
                    : "hover:bg-purple-600 p-5 rounded-b-xl duration-300"
                }
              >
                Portfolio
              </li>
            </Link>
          </ul>
        </nav>
      </header>

      <header
        className={
          isOpen
            ? "w-64 opacity-80 bg-gray-950 -translate-x-64 h-screen m-0 p-0 top-0 left-full z-50 flex fixed duration-300 lg:hidden"
            : "-translate-x-16 fixed opacity-100 z-50 left-full top-0 duration-300"
        }
      >
        <div className=" p-5 h-screen w-screen lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            onClick={toggleOpen}
            className={
              isOpen ? "w-8 h-8 rotate-90 duration-200" : "w-8 h-8 duration-200"
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          {isOpen && (
            <div>
              <ul className="flex mx-8 mt-10 gap-5 flex-col">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    className={
                      homeInView
                        ? "bg-purple-600 p-5 rounded-xl w-screen"
                        : "p-5 rounded-xl hover:bg-purple-600 duration-300"
                    }
                  >
                    Home
                  </li>
                </Link>
                <Link
                  to="about-me"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    className={
                      aboutInView
                        ? "bg-blue-400 p-5 rounded-xl w-screen"
                        : "hover:bg-blue-400 p-5 rounded-xl w-screen duration-300"
                    }
                  >
                    About me
                  </li>
                </Link>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  <li
                    className={
                      portfolioInView
                        ? "bg-purple-600 p-5 rounded-xl"
                        : "hover:bg-purple-600 p-5 rounded-xl duration-300"
                    }
                  >
                    Portfolio
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
