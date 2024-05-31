import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./componenets/Benefits";
import Button from "./componenets/Button";
import Collabration from "./componenets/Collabration";
import Header from "./componenets/Header";
import Hero from "./componenets/Hero";
import Pricing from "./componenets/Pricing";
import Roadmap from "./componenets/Roadmap";
import Services from "./componenets/Services";
import Footer from "./componenets/Footer"
const App = () => {

  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
    <Header />
    <Hero />
    <Benefits />
    <Collabration />
    <Services />
    <Pricing />
    <Roadmap />
    <Footer/>
    </div>
    <ButtonGradient />
    </>
  
  );
};

export default App;
