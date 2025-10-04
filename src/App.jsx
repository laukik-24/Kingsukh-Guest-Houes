import AboutUs from "./components/AboutUs";
import CheckAvailability from "./components/checkAvailability";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import NavbarD from "./components/NavbarD";
import StatsSection from "./components/AnimatedNo";
import ContactSection from "./components/Contact";
import RoomsSection from "./components/RoomSection";
import ServicesSection from "./components/Services";
import Map from "./components/Map";

function App() {
  return (
    <>
      <NavbarD />
      <Hero />
      {/* <BookNowBanner /> */}
      <CheckAvailability />
      <AboutUs />
      <RoomsSection />
      <ServicesSection />
      <StatsSection />
      <Gallery />
      <ContactSection />
      <Map />
      <Footer />
    </>
  );
}

export default App;
