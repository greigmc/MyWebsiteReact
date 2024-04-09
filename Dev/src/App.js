import NavBar from "./Navigation/NavBar";
import Footer from "./Footer/Footer";
import HomeSection from "./pages/HomeSection";
import AboutSection from "./pages/AboutSection";
import FunSection from "./pages/FunSection";
import ServiceSection from "./pages/ServiceSection";
import PortfolioSection from "./pages/PortfolioSection";
import SubscribeSection from "./pages/SubscribeSection";
import ExpertiseSection from "./pages/ExpertiseSection";
import TestimonialSection from "./pages/TestimonialSection";
import ContactSection from "./pages/ContactSection";
import MapContainer from "./pages/MapSection";

import "./App.css";
import "./assets/css/font-awesome-animation.min.css";

function App() {
  return (
      <div className="App">
        <div id="page-body">
          <NavBar />
          <HomeSection />
          <AboutSection />
          <FunSection />
          <ServiceSection />
          <PortfolioSection />
          <SubscribeSection />
          <ExpertiseSection />
          <TestimonialSection />
          <ContactSection />
          <MapContainer />
          <Footer />
        </div>
      </div>
  );
}

export default App;
