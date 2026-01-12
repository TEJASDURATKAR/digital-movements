import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Footer from "../../components/Footer/Footer";
import "./Homes.css";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Pricing from "../../components/Pricing/Pricing";
import Demos from "../../components/Demos/Demos";
import WhatsAppButton from "../../components/WhatsApp/WhatsAppButton";
import MainNavbar from "../../components/Navbar/Navbar";
import Contact from "../../components/Contact/Contact";
import WhatsAppCTA from "../../components/WhatsAppCTA/WhatsAppCTA";
// import FloatingWhatsApp from "../../components/FloatingWhatsApp/FloatingWhatsApp";

export default function Home() {
  return (
    <>
    <MainNavbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <WhatsAppCTA />
      
      {/* <FloatingWhatsApp/> */}
      <HowItWorks />
       <Demos />
      <Pricing />
      <Contact/>
      <Footer />
       <WhatsAppButton />
    </>
  );
}
