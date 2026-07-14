import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ValuesSection from "@/components/ValuesSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import TargetsSection from "@/components/TargetsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <AboutSection />
        <ValuesSection />
        <ProjectsCarousel />
        <TargetsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
