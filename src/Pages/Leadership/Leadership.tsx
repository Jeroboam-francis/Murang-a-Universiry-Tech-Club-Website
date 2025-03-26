import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { leadershipTeam } from "../../data/LeadershipData";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Leadership.css";

interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
}

interface Leader {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
  socialLinks: SocialLinks;
}

function Leadership() {
  const renderSocialLinks = (leader: Leader) => {
    const socialLinks = [];
    if (leader.socialLinks.linkedin) {
      socialLinks.push(
        <a
          key="linkedin"
          href={leader.socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${leader.name}'s LinkedIn profile`}
        >
          <FaLinkedin />
        </a>
      );
    }
    if (leader.socialLinks.twitter) {
      socialLinks.push(
        <a
          key="twitter"
          href={leader.socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${leader.name}'s Twitter profile`}
        >
          <FaTwitter />
        </a>
      );
    }
    if (leader.socialLinks.facebook) {
      socialLinks.push(
        <a
          key="facebook"
          href={leader.socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${leader.name}'s Facebook profile`}
        >
          <FaFacebook />
        </a>
      );
    }
    if (leader.socialLinks.instagram) {
      socialLinks.push(
        <a
          key="instagram"
          href={leader.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${leader.name}'s Instagram profile`}
        >
          <FaInstagram />
        </a>
      );
    }
    return socialLinks.length > 0 ? (
      socialLinks
    ) : (
      <p>No social links available</p>
    );
  };

  return (
    <div className="leadership-page">
      <Header />
      <main className="leadership-container">
        <section className="leadership-header">
          <h1 className="leadership-title">MUTC Leadership Team</h1>
          <p className="leadership-subtitle">
            Meet the dedicated individuals driving technological innovation at
            Murang'a University Tech Club
          </p>
        </section>

        <section className="leadership-grid">
          {leadershipTeam.map((leader) => (
            <div key={leader.id} className="leader-card">
              <div className="leader-image-container">
                <img
                  src={leader.imageUrl}
                  alt={leader.name}
                  className="leader-image"
                />
              </div>
              <div className="leader-info">
                <h3 className="leader-name">{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
                <div className="leader-social-links">
                  {renderSocialLinks(leader)}
                </div>
              </div>
              <div className="leader-bio">
                <p>{leader.bio}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Leadership;
