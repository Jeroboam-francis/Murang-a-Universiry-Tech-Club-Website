import { useState } from "react";
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
  const [selectedLeader, setSelectedLeader] = useState<string | null>(null);

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
    return socialLinks;
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
            <div
              key={leader.id}
              className="leader-card"
              onClick={() => setSelectedLeader(leader.id)}
            >
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
            </div>
          ))}
        </section>

        {selectedLeader && (
          <div className="leader-modal">
            <div className="leader-modal-content">
              <button
                className="close-modal"
                onClick={() => setSelectedLeader(null)}
              >
                &times;
              </button>
              {leadershipTeam
                .filter((leader) => leader.id === selectedLeader)
                .map((leader) => (
                  <div key={leader.id} className="leader-modal-details">
                    <img
                      src={leader.imageUrl}
                      alt={leader.name}
                      className="leader-modal-image"
                    />
                    <div className="leader-modal-text">
                      <h2>{leader.name}</h2>
                      <h3>{leader.role}</h3>
                      <p>{leader.bio}</p>
                      <div className="leader-modal-social-links">
                        {renderSocialLinks(leader)}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Leadership;
