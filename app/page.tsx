import { Header } from "./components/layout/header"
import { HeroSection } from "./components/sections/hero-section"
import { AboutSection } from "./components/sections/about-section"
import SkillsSection from "./components/sections/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* Ajoutez d'autres sections ici :
        <ProjectsSection />
        <ContactSection />
        */}
      </main>
    </div>
  )
}