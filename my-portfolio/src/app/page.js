import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex  flex-col ">
    <Navbar/>  
      <div className="container mt-24 mx-auto px-12 py-6">
    <HeroSection/>
    <About/>
    <Projects/>
    <ContactSection/>
    <Footer/>
    </div>
    </main>
  );
}
