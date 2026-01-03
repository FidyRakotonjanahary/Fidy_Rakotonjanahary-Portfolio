"use client"

import { Code, Palette, Zap, Users, GraduationCap, MapPin, Calendar } from "lucide-react"

export function AboutSection() {
  const principles = [
    { icon: <Code className="h-4 w-4" />, title: "Architecture Solide", desc: "Code maintenable et évolutif" },
    { icon: <Zap className="h-4 w-4" />, title: "Performance", desc: "Solutions optimisées" },
    { icon: <Palette className="h-4 w-4" />, title: "Design UX/UI", desc: "Centré utilisateur" },
    { icon: <Users className="h-4 w-4" />, title: "Collaboration", desc: "Méthodologies agiles" }
  ]

  return (
    <section id="apropos" className="relative min-h-screen flex items-end justify-center px-4 lg:px-6 py-8 lg:py-12 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden bg-gradient-to-b from-blue-50/30 via-gray-50/50 to-white dark:from-blue-950/20 dark:via-gray-900/50 dark:to-gray-950">
      
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
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          
          {/* Left Column - Profile & Quick Info */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6">
            
            {/* Section Header */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
              <div className="w-6 lg:w-8 h-[2px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
              <span className="text-xs lg:text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                À propos de moi
              </span>
            </div>

            {/* Profile Card */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 shadow-xl border border-white/40 dark:border-gray-800/40">
              <div className="flex items-center justify-center lg:justify-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 via-violet-600 to-purple-600 rounded-lg lg:rounded-xl flex items-center justify-center text-white font-bold text-lg lg:text-xl shadow-lg">
                  AJ
                </div>
                <div className="text-center lg:text-left">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                    Andrianofidiniaina Jeannot
                  </h3>
                  <p className="text-base lg:text-lg font-semibold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                    RAKOTONJANAHARY
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="p-1.5 lg:p-2 bg-blue-100 dark:bg-blue-950/50 rounded-lg">
                    <GraduationCap className="h-3 w-3 lg:h-4 lg:w-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">Master 2 Génie Logiciel et Base de données</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="p-1.5 lg:p-2 bg-violet-100 dark:bg-violet-950/50 rounded-lg">
                    <Calendar className="h-3 w-3 lg:h-4 lg:w-4 text-violet-600 dark:text-violet-400" />
                  </div>
                  <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">Projets académiques & professionnels</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="p-1.5 lg:p-2 bg-purple-100 dark:bg-purple-950/50 rounded-lg">
                    <MapPin className="h-3 w-3 lg:h-4 lg:w-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-sm lg:text-base text-gray-700 dark:text-gray-300 font-medium">Anosibe, Antananarivo, Madagascar</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story & Principles */}
          <div className="flex flex-col justify-center space-y-6 lg:space-y-8">

            {/* Story */}
            <div className="space-y-4 lg:space-y-6">
              <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center lg:text-left">
                <p>
                  Étudiant à l'{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-400 relative">
                    École Nationale d'Informatique
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400/40 rounded-full"></span>
                  </span>, je me passionne pour le{" "}
                  <span className="font-semibold text-violet-600 dark:text-violet-400 relative">
                    développement web
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-violet-400/40 rounded-full"></span>
                  </span>{" "}et les technologies modernes.
                </p>
                
                <p>
                  J'ai développé une expertise pratique à travers des projets concrets : gestion de parc informatique, 
                  applications bancaires, systèmes d'évaluation, gestion scolaire. Ces expériences chez SALAMA CAMMEM,
                  l'ONG RAN'EAU et MyAgency ont enrichi ma formation académique par une solide expérience terrain.
                </p>
              </div>
            </div>

            {/* Principles */}
            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
                <div className="w-6 lg:w-8 h-[2px] bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"></div>
                <h3 className="text-base lg:text-xl font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  Mes Principes
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                {principles.map((principle, index) => (
                  <div
                    key={principle.title}
                    className="group"
                  >
                    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-800/40 rounded-lg lg:rounded-xl p-3 lg:p-4 hover:shadow-xl hover:bg-white/90 dark:hover:bg-gray-900/90 transition-all duration-300 h-full">
                      <div className="flex flex-col gap-2 lg:gap-3 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-2 lg:gap-3">
                          <div className="p-2 lg:p-3 bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-950/50 dark:to-violet-950/50 rounded-lg text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform shrink-0">
                            {principle.icon}
                          </div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-sm lg:text-base leading-tight">
                            {principle.title}
                          </h4>
                        </div>
                        <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {principle.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}