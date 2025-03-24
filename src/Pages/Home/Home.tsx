import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Testimonials from "../../components/Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
