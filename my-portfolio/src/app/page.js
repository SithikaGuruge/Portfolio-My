import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex  flex-col ">
    <Navbar/>  
      <div className="container mt-24 mx-auto px-12 py-6">
    <HeroSection/>
    </div>
    </main>
  );
}
