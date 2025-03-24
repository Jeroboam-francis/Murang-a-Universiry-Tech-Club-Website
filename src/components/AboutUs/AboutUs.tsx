import "./AboutUs.css";

function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title">About Us</h2>
        <div className="about-grid">
          <div>
            <img
              src="./src/assets/hero.jpg"
              alt="MUTC members collaborating"
              className="about-image"
            />
          </div>
          <div>
            <h3 className="about-subtitle">Our Mission</h3>
            <p className="about-text">
              The Murang'a University Tech Club (MUTC) is dedicated to advancing
              members' knowledge in programming and technology. We aim to create
              a vibrant community of tech enthusiasts who support each other in
              exploring the ever-evolving world of technology.
            </p>

            <h3 className="about-subtitle">Our Values</h3>
            <ul className="about-list">
              <li className="about-list-item">
                <span className="about-icon">✓</span>
                <span>
                  Innovation: Encouraging creative solutions to real-world
                  problems
                </span>
              </li>
              <li className="about-list-item">
                <span className="about-icon">✓</span>
                <span>
                  Collaboration: Fostering teamwork and knowledge sharing
                </span>
              </li>
              <li className="about-list-item">
                <span className="about-icon">✓</span>
                <span>
                  Creating a welcoming environment for all tech enthusiasts
                </span>
              </li>
              <li className="about-list-item">
                <span className="about-icon">✓</span>
                <span>
                  Excellence: Striving for high standards in all our endeavors
                </span>
              </li>
            </ul>

            <h3 className="about-subtitle">Our Objectives</h3>
            <p className="about-text">
              MUTC offers a range of events and classes throughout the week,
              covering topics such as programming, UI/UX design, machine
              learning, and more. Our goal is to equip members with relevant
              skills for the tech industry and create networking opportunities
              with professionals in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
