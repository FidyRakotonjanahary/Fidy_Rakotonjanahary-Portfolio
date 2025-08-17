"use client"

import React, { useState } from "react"
import { ArrowDown, Globe, Code2, Database, Wrench, ChevronRight } from "lucide-react"

interface Technology {
  name: string
  logo: string
  category: "frontend" | "backend" | "database" | "tools"
}

interface Language {
  name: string
  level: string
  flag: string
}

export default function SkillsPage(): React.JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const technologies: Technology[] = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "frontend" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", category: "frontend" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "frontend" },
    { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "frontend" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "backend" },
    { name: "Laravel Livewire", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/livewire/livewire-original.svg", category: "backend"},
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", category: "backend" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", category: "backend" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", category: "database" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "database" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "tools" },
    { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "tools" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "tools" },
    { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", category: "tools" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", category: "tools" },
  ]

  const languages: Language[] = [
    { name: "Français", level: "Natif", flag: "🇫🇷" },
    { name: "Anglais", level: "Technique", flag: "🇺🇸" }
  ]

  const categories = [
    { 
      id: "all", 
      name: "Toutes", 
      icon: Globe, 
      color: "from-purple-500 to-pink-500",
      count: technologies.length
    },
    { 
      id: "frontend", 
      name: "Frontend", 
      icon: Globe, 
      color: "from-blue-500 to-cyan-500",
      count: technologies.filter(t => t.category === "frontend").length
    },
    { 
      id: "backend", 
      name: "Backend", 
      icon: Code2, 
      color: "from-green-500 to-teal-500",
      count: technologies.filter(t => t.category === "backend").length
    },
    { 
      id: "database", 
      name: "Database", 
      icon: Database, 
      color: "from-orange-500 to-red-500",
      count: technologies.filter(t => t.category === "database").length
    },
    { 
      id: "tools", 
      name: "Outils", 
      icon: Wrench, 
      color: "from-gray-500 to-slate-500",
      count: technologies.filter(t => t.category === "tools").length
    },
  ]

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
    const target = e.target as HTMLImageElement
    const fallback = target.nextElementSibling as HTMLElement
    
    target.style.display = 'none'
    if (fallback) {
      fallback.style.display = 'flex'
    }
  }

  const getFilteredTechnologies = () => {
    if (activeCategory === "all") return technologies
    return technologies.filter(tech => tech.category === activeCategory)
  }

  return (
    <section id="skills" className="relative min-h-screen flex items-end justify-center px-4 lg:px-6 py-8 lg:py-12 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 dark:from-gray-950 dark:via-gray-900/50 dark:to-blue-950/20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient shapes */}
        <div className="absolute top-0 left-0 w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] bg-gradient-to-br from-violet-100/30 via-blue-50/15 to-transparent dark:from-violet-900/15 dark:via-blue-900/8 dark:to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] bg-gradient-to-tl from-blue-100/25 to-transparent dark:from-blue-900/12 dark:to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-violet-300/40 dark:bg-violet-400/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-blue-300/40 dark:bg-blue-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-purple-300/40 dark:bg-purple-400/30 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10 w-full mb-8 lg:mb-0">
        
        {/* Header Compact */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 lg:w-8 h-[2px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
            <span className="text-xs lg:text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              Mes Compétences
            </span>
            <div className="w-6 lg:w-8 h-[2px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              Technologies & Outils
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base max-w-xl mx-auto">
            Technologies que j'utilise pour créer des applications web modernes et performantes
          </p>
        </div>

        {/* Category Navigation Compact */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-xs transition-all duration-300 border ${
                    isActive 
                      ? 'bg-white/80 dark:bg-gray-900/80 text-blue-600 dark:text-blue-400 shadow-xl border-white/40 dark:border-gray-800/40 scale-105' 
                      : 'bg-white/60 dark:bg-gray-900/60 hover:bg-white/80 dark:hover:bg-gray-900/80 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-md hover:shadow-lg border-white/30 dark:border-gray-800/30 hover:scale-105'
                  }`}
                >
                  <div className={`p-1.5 rounded-md bg-gradient-to-r ${category.color} text-white transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}>
                    <Icon className="h-3 w-3" />
                  </div>
                  <span className="text-xs">{category.name}</span>
                  <div className={`px-1.5 py-0.5 rounded-full text-xs font-medium bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 ${isActive ? 'bg-blue-100/80 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400' : ''}`}>
                    {category.count}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Technologies Grid - Plus compact pour tenir dans l'écran */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {getFilteredTechnologies().map((tech, index) => (
              <div
                key={tech.name}
                className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-3 hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-white/40 dark:border-gray-800/40 relative overflow-hidden w-20 sm:w-22"
                style={{ animationDelay: `${index * 20}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Logo Container */}
                <div className="relative z-10 flex justify-center mb-2">
                  <div className="p-1.5 bg-gray-50/80 dark:bg-gray-800/60 rounded-md group-hover:bg-blue-50/80 dark:group-hover:bg-blue-950/60 transition-all duration-300">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                      onError={handleImageError}
                    />
                    {/* Fallback */}
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center text-white font-bold text-xs hidden">
                      {tech.name.charAt(0)}
                    </div>
                  </div>
                </div>
                
                {/* Tech Name */}
                <div className="relative z-10 text-center">
                  <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                    {tech.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}