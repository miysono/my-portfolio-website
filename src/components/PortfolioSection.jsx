export function PortfolioSection({ portfolioRef, children }) {
  return (
    <div className="relative">
      <div
        className=" flex items-center justify-center flex-col pt-20"
        id="portfolio"
        ref={portfolioRef}
      >
        <p className="text-4xl md:text-6xl">Portfolio</p>

        <div className="pt-20 grid gap-10 z-10 items-center justify-center md:grid-cols-2 lg:grid-cols-3 ">
          {children}
        </div>
      </div>
    </div>
  );
}
