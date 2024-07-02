import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Project from "@/components/Project";
import Footer from "@/components/Footer";

export default function Home(){
  return(
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <Project/>
      <Contact/>
      <Footer/>
    </main>
  )
}