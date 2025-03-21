import "./Hero.css";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <h1 className="hero-title">Welcome to Murang'a University Tech Club</h1>
        <p className="hero-subtitle">
          Empowering students to innovate, create, and excel in the world of
          technology
        </p>
        <div className="hero-buttons">
          <a href="#join" className="btn btn-primary">
            Join Murang'a University Tech Club
          </a>
          <a href="#about" className="btn btn-secondary">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
