import AboutUs from "./components/AboutUs";
import CheckAvailability from "./components/checkAvailability";
import Hero from "./components/Hero";
import NavbarD from "./components/NavbarD";
import BookNowBanner from "./components/ui/bookNowBanner";

function App() {
  return (
    <>
      {/* <NavbarD /> */}
      <Hero />
      {/* <BookNowBanner /> */}
      <CheckAvailability />
      <AboutUs />
    </>
  );
}

export default App;
