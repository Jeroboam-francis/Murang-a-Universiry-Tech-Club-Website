import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Tracks.css";
import { tracks, iconMap } from "../../data/TracksData";
import TracksRegistrationForm from "../../components/RegistrationForm/RegistrationForm";

function Tracks() {
  const TracksSection = () => {
    return (
      <div>
        <Header />
        <section className="tracks-section">
          <div className="tracks-container">
            <h2 className="tracks-section-title">MUTC Specialized Tracks</h2>

            <div className="tracks-content">
              {tracks.map((track) => {
                const TrackIcon = iconMap[track.icon as keyof typeof iconMap];

                return (
                  <div key={track.id} className="track-item">
                    <div className="track-icon">
                      <TrackIcon size={48} />
                    </div>
                    <div className="track-details">
                      <h3>{track.title}</h3>
                      <p>{track.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <TracksRegistrationForm />
          </div>
        </section>
        <Footer />
      </div>
    );
  };

  return <TracksSection />;
}

export default Tracks;
