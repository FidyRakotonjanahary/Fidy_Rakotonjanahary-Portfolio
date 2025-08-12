import { Header } from "./components/layout/header"
import { HeroSection } from "./components/sections/hero-section"
import { AboutSection } from "./components/sections/about-section"
import  SkillsSection  from "./components/sections/skills-section"
import  ProjectsSection  from "./components/sections/projects-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        {/* Ajoutez d'autres sections ici :
        <ContactSection />
        */}
      </main>
    </div>
  )
}