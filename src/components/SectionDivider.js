export function SectionDivider({ reverse = false, colorReverse = false }) {
  return (
    <div
      className={!reverse ? "relative mt-40 z-40" : "relative rotate-180 z-40"}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160%"
        height="150"
        preserveAspectRatio="none"
        viewBox="0 0 1440 150"
        className="relative z-40 h-24 -my-1 sm:h-auto"
      >
        <g mask='url("#SvgjsMask1076")' fill="none">
          <path
            d="M 0,120 C 96,105.4 288,41 480,47 C 672,53 768,154 960,150 C 1152,146 1344,51.6 1440,27L1440 150L0 150z"
            fill={
              !colorReverse
                ? "rgba(96, 165, 250, 0.8)"
                : "rgba(147, 51, 234, 0.8)"
            }
          ></path>

          <path
            d="M 0,36 C 96,57.4 288,141.2 480,143 C 672,144.8 768,47.8 960,45 C 1152,42.2 1344,112.2 1440,129L1440 150L0 150z"
            fill={
              !colorReverse ? "rgba(147, 51, 234, 1)" : "rgba(96, 165, 250, 1)"
            }
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1076">
            <rect width="1440" height="150" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
    </div>
  );
}
