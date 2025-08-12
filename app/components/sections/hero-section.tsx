"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download, Sparkles, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadCV = () => {
    // Remplacez par le chemin réel de votre CV
    const cvUrl = '/cv/RAKOTONJANAHARY_Andrianofidiniaina_Jeannot_CV.pdf'
    const link = document.createElement('a')
    link.href = cvUrl
    link.download = 'RAKOTONJANAHARY_Andrianofidiniaina_Jeannot_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 lg:px-6 overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-blue-50/30 dark:from-gray-950 dark:via-gray-900/50 dark:to-blue-950/20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient shapes */}
        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-gradient-to-bl from-blue-100/30 via-violet-50/15 to-transparent dark:from-blue-900/15 dark:via-violet-900/8 dark:to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-violet-100/25 to-transparent dark:from-violet-900/12 dark:to-transparent rounded-full blur-3xl"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-blue-300/40 dark:bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-violet-300/40 dark:bg-violet-400/30 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-purple-300/40 dark:bg-purple-400/30 rounded-full animate-ping delay-2000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            
            {/* Salutation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-2"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 font-light">
                Bonjour, je suis{" "}
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 bg-clip-text text-transparent">
                  Fidy
                </span>
              </p>
            </motion.div>

            {/* Titre principal avec taille normale */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent relative">
                Développeur Web
                <div className="absolute -bottom-1 left-0 w-20 h-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
              </span>
            </motion.h1>

            {/* Description principale */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-6"
            >
              <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl">
                Je transforme vos{" "}
                <span className="text-base font-medium text-blue-600 dark:text-blue-400 relative">
                  idées créatives
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-blue-400/30 rounded-full"></div>
                </span>
                {" "}en{" "}
                <span className="text-base font-medium text-violet-600 dark:text-violet-400 relative">
                  expériences digitales
                  <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-violet-400/30 rounded-full"></div>
                </span>
                {" "}modernes et performantes.
              </div>
            </motion.div>

            {/* Description détaillée */}
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-8"
            >
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
                Spécialisé dans la création de solutions web innovantes, accessibles 
                et optimisées pour offrir une expérience utilisateur exceptionnelle.
              </p>
            </motion.div> */}

            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button 
                size="lg"
                onClick={handleDownloadCV}
                className="h-12 px-8 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group rounded-lg relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                <Download className="h-4 w-4 group-hover:-translate-y-0.5 transition-all duration-300 mr-2 relative z-10" />
                <span className="font-semibold relative z-10">Télécharger CV</span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="h-12 px-8 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/50 dark:hover:bg-blue-950/50 transition-all duration-300"
              >
                Me contacter
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              {/* Photo Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                {/* Animated rings */}
                <div className="absolute -inset-2 rounded-full border border-blue-200/30 dark:border-blue-800/30 animate-[spin_25s_linear_infinite]"></div>
                <div className="absolute -inset-4 rounded-full border border-violet-200/15 dark:border-violet-800/15 animate-[spin_20s_linear_infinite_reverse]"></div>
                
                {/* Photo principale */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-blue-400/20 transition-all duration-500">
                  <Image
                    src="/images/photo.jpg"
                    alt="RAKOTONJANAHARY Andrianofidiniaina Jeannot - Développeur Web"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                    onError={(e) => {
                      // Fallback en cas d'erreur d'image
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-violet-100 dark:from-blue-900 dark:to-violet-900 text-blue-600 dark:text-blue-400 text-6xl font-bold">
                            AJ
                          </div>
                        `;
                      }
                    }}
                  />
                  
                  {/* Overlay gradient au hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Border lumineux */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/40 via-violet-500/40 to-pink-500/40 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 -z-10"></div>
                </div>
                
                {/* Particules flottantes */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse shadow-md">
                  <Sparkles className="w-2 h-2 text-white" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-3.5 h-3.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center animate-bounce delay-300 shadow-md">
                  <Star className="w-2 h-2 text-white" />
                </div>
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-full flex items-center justify-center animate-ping delay-700 shadow-md">
                  <Zap className="w-1.5 h-1.5 text-white" />
                </div>
              </div>
              
              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <div className="flex items-center space-x-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/30 dark:border-gray-800/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">Disponible pour nouveaux projets</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <button
            onClick={() => scrollToSection("#apropos")}
            className="group p-3 rounded-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm hover:bg-blue-50/70 dark:hover:bg-blue-950/70 transition-all duration-300 shadow-md hover:shadow-lg"
            aria-label="Faire défiler vers la section À propos"
          >
            <ArrowDown className="h-5 w-5 text-gray-500 dark:text-gray-400 animate-bounce group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}