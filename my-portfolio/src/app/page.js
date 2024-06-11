import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";

export default function Home() {
  return (
    <main className="flex  flex-col ">
    <Navbar/>  
      <div className="container mt-24 mx-auto px-12 py-6">
    <HeroSection/>
    <About id="#about"/>
    </div>
    </main>
  );
}
