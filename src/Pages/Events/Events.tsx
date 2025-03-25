import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { eventsSchedule } from "../../data/EventsData";
import { FaClock, FaMapMarkerAlt, FaUserTie } from "react-icons/fa";
import "./Events.css";

function Events() {
  return (
    <div className="events-page">
      <Header />
      <main className="events-container">
        <section className="events-header">
          <h1 className="events-title">MUTC Weekly Schedule</h1>
          <p className="events-subtitle">
            Discover our diverse range of learning opportunities and activities
          </p>
        </section>

        <section className="events-grid">
          {eventsSchedule.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-card-header">
                <h3 className="event-track">{event.track}</h3>
              </div>
              <div className="event-card-details">
                <div className="event-detail">
                  <FaClock className="event-icon" />
                  <span>
                    {event.day}, {event.time}
                  </span>
                </div>
                <div className="event-detail">
                  <FaMapMarkerAlt className="event-icon" />
                  <span>{event.location}</span>
                </div>
                <div className="event-detail">
                  <FaUserTie className="event-icon" />
                  <span>Led by {event.leader}</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Events;
