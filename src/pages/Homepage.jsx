import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Moons } from "../components/Moons";
import { Project } from "../components/Project";
import { SectionDivider } from "../components/SectionDivider";
import { IntroSvg } from "../components/IntroSvg";
import { PortfolioContainer } from "../components/PortfolioContainer";
import { PortfolioSection } from "../components/PortfolioSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { Intro } from "../components/Intro";
import { Home } from "../components/Home";
import { Header } from "../components/Header";

const Homepage = () => {
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.6 });
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.5,
  });
  const { ref: portfolioRef, inView: portfolioInView } = useInView({
    threshold: 0.2,
  });
  const [isOpen, setIsOpen] = useState(false);
  function toggleOpen(e) {
    if (!e.target.closest(`header`)) {
      if (!isOpen) return;
      setIsOpen(false);
      return;
    }
    setIsOpen((open) => !open);
  }

  return (
    <>
      <ParallaxProvider>
        <div className="text-gray-200 bg-gray-900 font-mono relative">
          <Header
            homeInView={homeInView}
            aboutInView={aboutInView}
            portfolioInView={portfolioInView}
            toggleOpen={toggleOpen}
            isOpen={isOpen}
          />

          <div className="overflow-hidden" onClick={toggleOpen}>
            <Home homeRef={homeRef}>
              <Parallax speed={-150}>
                <IntroSvg />
              </Parallax>

              <Parallax speed={-30}>
                <Intro />
              </Parallax>

              <Parallax translateX={[-50, 0]}>
                <SectionDivider />
              </Parallax>
            </Home>

            <AboutMeSection aboutRef={aboutRef}>
              <Parallax translateX={[50, 0]}>
                <SectionDivider reverse={true} />
              </Parallax>
            </AboutMeSection>

            <PortfolioContainer>
              <Parallax translateX={[-200, 100]}>
                <Moons />
              </Parallax>

              <PortfolioSection portfolioRef={portfolioRef}>
                <Project
                  title="Cloudtinum"
                  src="./images/homepage.png"
                  description="A complete Weather App made with React. The Auth is done with Firebase."
                  link="https://github.com/miysono/complete-react-weather-app"
                />
                <Project
                  src="./images/portfolio-website.png"
                  title="Portfolio Website"
                  description="
            I developed my portfolio website using React and TailwindCSS, creating a sleek and efficient platform to showcase my work and accomplishments."
                />
                <Project
                  src="./images/weather-app.png"
                  title="Weather app"
                  description="
            A straightforward weather app was created by integrating several APIs, with comprehensive error handling incorporated into the submission form."
                  link="https://miysono.github.io/weather-app/"
                />
                <Project
                  src="./images/interactive-map.png"
                  title="Interactive world map"
                  description="
            I developed an interactive world map, utilizing Leaflet and geoJSON to retrieve and display the necessary geographic information."
                  link="https://miysono.github.io/interactive-map-with-descriptions/"
                />
                <Project
                  title="Quizzie"
                  src="./images/quizzie.png"
                  description="A quiz website with 10 questions and 4 different results. Why don't try it yourself?"
                  link="https://miysono.github.io/quizzie/"
                />
                <Project
                  title="Tic Tac Toe"
                  src="./images/tic-tac-toe.png"
                  description="A simple yet interactive Tic Tac Toe game with 2 players."
                  link="https://miysono.github.io/javascript-tic-tac-toe/"
                />
              </PortfolioSection>

              <Parallax translateX={[-50, 0]}>
                <SectionDivider colorReverse={true} />
              </Parallax>
            </PortfolioContainer>
          </div>
        </div>
      </ParallaxProvider>
    </>
  );
};

export default Homepage;
