"use client"

import React, { useState } from "react"
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string
  technologies: {
    name: string
    logo: string
  }[]
  category: "web"
  githubUrl?: string
  liveUrl?: string
  startDate: string
  endDate: string
  duration: string
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number>(0)

  const projects: Project[] = [
    {
      id: 1,
      title: "Gestion de Parc Informatique",
      description: "Système complet de gestion d'inventaire IT avec tracking en temps réel",
      fullDescription: "Application web complète développée avec Laravel Livewire permettant la gestion intégrale du parc informatique d'une entreprise.",
      image: "/images/projects/parc-informatique.jpg",
      technologies: [
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "TailwindCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
        { name: "Alpine.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/alpinejs/alpinejs-original.svg" }
      ],
      category: "web",
      githubUrl: "https://github.com/fidy/parc-informatique",
      liveUrl: "https://parc-demo.fidytech.com",
      startDate: "Jan 2024",
      endDate: "Mar 2024",
      duration: "3 mois"
    },
    {
      id: 2,
      title: "Système d'Évaluation SALAMA",
      description: "Plateforme d'évaluation des performances avec analytics avancés",
      fullDescription: "Solution développée pour SALAMA CAMMEM permettant l'évaluation multi-critères des employés avec génération automatique de rapports.",
      image: "/images/projects/evaluation-system.jpg",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ],
      category: "web",
      githubUrl: "https://github.com/fidy/salama-evaluation",
      startDate: "Sep 2023",
      endDate: "Dec 2023",
      duration: "4 mois"
    },
    {
      id: 3,
      title: "Application Web E-commerce",
      description: "Plateforme e-commerce moderne avec gestion complète des commandes",
      fullDescription: "Application web offrant une expérience d'achat fluide avec gestion des stocks, paiements sécurisés et tableau de bord administrateur.",
      image: "/images/projects/ecommerce-app.jpg",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
      ],
      category: "web",
      startDate: "Apr 2024",
      endDate: "Jun 2024",
      duration: "3 mois"
    },
    {
      id: 4,
      title: "Dashboard RAN'EAU",
      description: "Tableau de bord pour la gestion des ressources en eau",
      fullDescription: "Interface de visualisation pour l'ONG RAN'EAU permettant le suivi en temps réel des projets d'accès à l'eau potable avec cartographie interactive.",
      image: "/images/projects/raneau-dashboard.jpg",
      technologies: [
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" }
      ],
      category: "web",
      liveUrl: "https://dashboard.raneau.org",
      startDate: "Jun 2023",
      endDate: "Aug 2023",
      duration: "3 mois"
    }
  ]

  const currentProject = projects[selectedProject] || projects[0]

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projets" className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-blue-50/30 via-gray-50/50 to-white dark:from-blue-950/20 dark:via-gray-900/50 dark:to-gray-950 relative pt-4">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-violet-100/30 via-blue-50/15 to-transparent dark:from-violet-900/15 dark:via-blue-900/8 dark:to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100/25 to-transparent dark:from-blue-900/12 dark:to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="text-center pt-20 pb-4 px-4">

        
        <h1 className="text-2xl lg:text-3xl font-bold mb-2 tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
            Mes Projets
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Découvrez mes réalisations récentes
        </p>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 lg:px-6 pb-6">
        <div className="max-w-6xl mx-auto h-full">
          <div className="grid lg:grid-cols-2 gap-6 h-full items-center">
            
            {/* Left: Project Image */}
            <div className="relative group h-full max-h-96">
              <div className="relative h-full rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-950/50 dark:to-violet-950/50">
                <div className="absolute inset-0">
                  <img
                    src={currentProject.image}
                    alt={`Capture d'écran - ${currentProject.title}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-violet-400/20 to-purple-400/20 dark:from-blue-600/30 dark:via-violet-600/30 dark:to-purple-600/30"></div>
                          <div class="absolute inset-4 bg-white/95 dark:bg-gray-900/95 rounded-lg shadow-lg backdrop-blur-sm">
                            <div class="flex items-center gap-2 p-3 bg-gray-100/80 dark:bg-gray-800/80 rounded-t-lg border-b border-gray-200/50 dark:border-gray-700/50">
                              <div class="flex gap-1.5">
                                <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                              </div>
                              <div class="flex-1 mx-3">
                                <div class="h-4 bg-gray-200/80 dark:bg-gray-700/80 rounded-full"></div>
                              </div>
                            </div>
                            <div class="p-4 space-y-3">
                              <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg"></div>
                                <div class="flex-1 space-y-1">
                                  <div class="h-3 bg-gray-200/80 dark:bg-gray-700/80 rounded-full w-3/4"></div>
                                  <div class="h-2 bg-gray-200/60 dark:bg-gray-700/60 rounded-full w-1/2"></div>
                                </div>
                              </div>
                              <div class="grid grid-cols-3 gap-2">
                                <div class="h-12 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50 rounded-lg"></div>
                                <div class="h-12 bg-gradient-to-br from-violet-100 to-violet-200 dark:from-violet-900/50 dark:to-violet-800/50 rounded-lg"></div>
                                <div class="h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 rounded-lg"></div>
                              </div>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Navigation Arrows */}
              {projects.length > 1 && (
                <>
                  <button
                    onClick={prevProject}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/40 dark:border-gray-800/40"
                  >
                    <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/40 dark:border-gray-800/40"
                  >
                    <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                  </button>
                </>
              )}
            </div>

            {/* Right: Project Info */}
            <div className="space-y-4 h-full flex flex-col justify-center">
              
              {/* Project Header */}
              <div>
                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentProject.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {currentProject.fullDescription}
                </p>
              </div>

              {/* Timeline */}
              <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-lg p-3 border border-white/40 dark:border-gray-800/40">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="h-3 w-3" />
                    <span>{currentProject.startDate} - {currentProject.endDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                    <Clock className="h-3 w-3" />
                    <span>{currentProject.duration}</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="w-10 h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-800/40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group relative"
                      title={tech.name}
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-6 h-6 object-contain"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-6 h-6 bg-gradient-to-br from-blue-500 to-violet-500 rounded text-white text-xs flex items-center justify-center font-bold">${tech.name.charAt(0)}</div>`;
                          }
                        }}
                      />
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {tech.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                {currentProject.liveUrl && (
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group text-xs"
                    onClick={() => window.open(currentProject.liveUrl, '_blank')}
                  >
                    <Eye className="h-3 w-3 mr-1 group-hover:scale-110 transition-transform" />
                    Voir le projet
                    <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                  </Button>
                )}
                
                {currentProject.githubUrl && (
                  <Button 
                    size="sm"
                    variant="outline"
                    className="border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 text-xs"
                    onClick={() => window.open(currentProject.githubUrl, '_blank')}
                  >
                    <Github className="h-3 w-3 mr-1" />
                    Code source
                    <ExternalLink className="h-3 w-3 ml-1 opacity-70" />
                  </Button>
                )}
              </div>

              {/* Project Counter */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {selectedProject + 1} / {projects.length}
                </span>
                <div className="flex gap-1">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedProject(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === selectedProject 
                          ? 'bg-blue-600 dark:bg-blue-400 w-6' 
                          : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-1.5'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}