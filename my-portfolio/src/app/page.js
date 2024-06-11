import Image from "next/image";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className="flex  flex-col ">   
      <div className="container mx-auto px-12 py-6">
    <HeroSection/>
    </div>
    </main>
  );
}
