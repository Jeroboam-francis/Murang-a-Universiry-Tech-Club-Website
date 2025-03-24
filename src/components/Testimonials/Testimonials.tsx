import "./Testimonials.css";

interface testimonialsdata {
  id: number;
  content: string;
  name: string;
  position: string;
  image: string;
}

const TestimonialSection = () => {
  const testimonials: testimonialsdata[] = [
    {
      id: 1,
      content:
        "MUTC has been a game-changer for my programming journey. The hands-on workshops and supportive community helped me land my first tech internship.",
      name: "David Kimani",
      position: "Software Engineering Student, Class of 2023",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      content:
        "Joining the Cloud Engineering track at MUTC was the best decision I made during my university years. The skills I gained are directly applicable to my current job.",
      name: "Jane Wanjiru",
      position: "Cloud Engineer, Alumni 2022",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      content:
        "The UI/UX design sessions at MUTC opened my eyes to the importance of user-centered design. I've since started my own design consultancy business.",
      name: "Michael Omondi",
      position: "UX Designer, Alumni 2021",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-section-title">What Our Members Say</h2>
        <div className="testimonials-content">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.name} />
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
              <div className="testimonies">
                <p>"{testimonial.content}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
