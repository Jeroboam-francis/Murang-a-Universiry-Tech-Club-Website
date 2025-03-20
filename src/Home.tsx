import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUS/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Testimonials from "./components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <h1>this is the home page</h1>
      <Header />
      <Navigation />
      <ContactUs />
      <Hero />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
