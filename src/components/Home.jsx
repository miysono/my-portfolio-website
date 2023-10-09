export function Home({ children, homeRef }) {
  return (
    <div
      className="intro relative z-0 overflow-hidden "
      id="home"
      ref={homeRef}
    >
      {children}
    </div>
  );
}
