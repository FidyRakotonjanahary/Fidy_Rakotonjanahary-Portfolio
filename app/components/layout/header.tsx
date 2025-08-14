"use client"

import { useState, useEffect } from "react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Code, Home, User, Briefcase, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const [activeSection, setActiveSection] = useState('accueil')
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Détection préférence mouvement réduit
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mediaQuery.matches)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      // Détection section active
      const sections = ['accueil', 'apropos', 'skills', 'projets', 'contact']
      const currentSection = sections.find(section => {
        const element = document.querySelector(`#${section}`)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", id: "accueil", label: "Accueil", icon: Home },
    { href: "#apropos", id: "apropos", label: "Profil", icon: User },
    { href: "#skills", id: "skills", label: "Skills", icon: Code },
    { href: "#projets", id: "projets", label: "Projets", icon: Briefcase },
    { href: "#contact", id: "contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Fonction pour naviguer vers l'accueil en cliquant sur le logo
  const goToHome = () => {
    scrollToSection('#accueil')
  }

  // Fonction pour passer au contenu principal
  const skipToContent = () => {
    const mainContent = document.querySelector('main')
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <>
      {/* Skip Navigation pour accessibilité */}
      <button
        onClick={skipToContent}
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[60] px-4 py-2 bg-violet-600 text-white rounded-md shadow-lg transition-all duration-300"
      >
        Passer au contenu principal
      </button>

      <header 
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-xl' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Premium - Cliquable pour naviguer vers accueil */}
            <button 
              onClick={goToHome}
              aria-label="Retourner à l'accueil"
              className="flex items-center space-x-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 rounded-lg p-2 -m-2"
            >
              <div className="relative">
                <div className={`w-12 h-12 bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300 ${
                  !reducedMotion ? 'group-hover:scale-110' : ''
                }`}>
                  <Code className="w-6 h-6 text-white" />
                </div>
                {!reducedMotion && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-60 animate-pulse"></div>
                )}
              </div>
              <div className="hidden sm:block">
                <h1 className="font-bold text-2xl bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  Fidy R.
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                  Développeur 
                </p>
              </div>
            </button>
            
            {/* Navigation Desktop */}
            <nav 
              role="navigation" 
              aria-label="Navigation principale"
              className="hidden lg:block"
            >
              <div 
                className="relative"
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {/* Container glassmorphism */}
                <div className="flex items-center bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-full px-2 py-2 shadow-xl">
                  
                  {/* Indicateur morphique qui suit la souris */}
                  {!reducedMotion && (
                    <div 
                      className={`absolute top-2 bottom-2 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full transition-all duration-500 ease-out shadow-lg pointer-events-none ${
                        hoveredIndex >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                      style={{
                        left: hoveredIndex >= 0 ? `${8 + hoveredIndex * 112}px` : '8px',
                        width: '108px',
                      }}
                    ></div>
                  )}
                  
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isHovered = hoveredIndex === index
                    const isActive = activeSection === item.id
                    
                    return (
                      <button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        onMouseEnter={() => !reducedMotion && setHoveredIndex(index)}
                        aria-label={`Aller à la section ${item.label}`}
                        aria-current={isActive ? 'page' : undefined}
                        className={`relative z-10 flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 w-[112px] group ${
                          isActive 
                            ? 'text-white bg-gradient-to-r from-violet-500 to-blue-500' 
                            : isHovered 
                              ? 'text-white' 
                              : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        <Icon className={`w-[18px] h-[18px] flex-shrink-0 transition-all duration-300 ${
                          !reducedMotion && (isHovered || isActive) ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                        }`} />
                        <span className="font-medium text-sm leading-none">{item.label}</span>
                        
                        {/* Indicateur actif */}
                        {isActive && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                        )}
                        
                        {/* Particules réduites sur mobile */}
                        {!reducedMotion && isHovered && (
                          <>
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping pointer-events-none"></div>
                            <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse pointer-events-none"></div>
                            <div className="absolute top-1 left-1 w-1 h-1 bg-pink-300 rounded-full animate-bounce pointer-events-none"></div>
                          </>
                        )}
                        
                        {/* Effet de brillance optimisé */}
                        {!reducedMotion && (
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full transition-all duration-700 pointer-events-none ${
                            isHovered 
                              ? 'translate-x-0 opacity-100' 
                              : '-translate-x-full opacity-0'
                          }`} style={{ transform: isHovered ? 'translateX(100%) skewX(-12deg)' : 'translateX(-100%) skewX(-12deg)' }}></div>
                        )}
                      </button>
                    )
                  })}
                </div>
                
                {/* Effets réduits si préférence mouvement */}
                {!reducedMotion && (
                  <>
                    <div className={`absolute -inset-3 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-xl transition-opacity duration-500 pointer-events-none ${
                      hoveredIndex >= 0 ? 'opacity-100' : 'opacity-40'
                    } animate-pulse`}></div>
                    
                    <div className="absolute -top-1 -right-2 w-3 h-3 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full blur-sm animate-pulse opacity-70 pointer-events-none"></div>
                    <div className="absolute -bottom-2 -left-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm animate-pulse opacity-50 delay-700 pointer-events-none"></div>
                  </>
                )}
              </div>
            </nav>

            {/* Actions - Version épurée et professionnelle */}
            <div className="flex items-center space-x-4">
              
              {/* Toggle Theme */}
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                aria-label={`Basculer vers le thème ${theme === 'light' ? 'sombre' : 'clair'}`}
                className={`relative w-12 h-12 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-full flex items-center justify-center transition-all duration-300 group ${
                  !reducedMotion ? 'hover:scale-110 hover:bg-white/30 dark:hover:bg-black/30' : 'hover:bg-white/30 dark:hover:bg-black/30'
                }`}
              >
                <Sun className={`absolute w-5 h-5 text-orange-500 transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'rotate-180 scale-0 opacity-0' 
                    : 'rotate-0 scale-100 opacity-100'
                }`} />
                <Moon className={`absolute w-5 h-5 text-blue-400 transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'rotate-0 scale-100 opacity-100' 
                    : '-rotate-180 scale-0 opacity-0'
                }`} />
                
                {!reducedMotion && (
                  <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-spin" style={{transformOrigin: '0 24px'}}></div>
                    <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-spin" style={{transformOrigin: '0 24px', animationDelay: '0.5s'}}></div>
                  </div>
                )}
              </button>

              {/* Menu Mobile */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <button 
                    aria-label="Ouvrir le menu de navigation"
                    className={`w-12 h-12 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      !reducedMotion ? 'hover:scale-110' : ''
                    }`}
                  >
                    <Menu className="w-5 h-5" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-l border-white/20 dark:border-gray-800/20">
                  {/* AJOUT DU SHEETHEADER POUR CORRIGER L'ERREUR */}
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
                  </SheetHeader>
                  
                  <div className="flex flex-col h-full pt-8">
                    
                    {/* Mobile Header - Logo aussi cliquable */}
                    <button 
                      onClick={() => {
                        setIsOpen(false)
                        goToHome()
                      }}
                      aria-label="Retourner à l'accueil"
                      className="flex items-center space-x-4 pb-6 border-b border-gray-200/20 dark:border-gray-800/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 rounded-lg p-2 -m-2"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-500 rounded-xl flex items-center justify-center">
                        <Code className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h2 className="font-bold text-lg text-gray-900 dark:text-white">
                          Fidy R.
                        </h2>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Développeur web</p>
                      </div>
                    </button>

                    {/* Mobile Navigation */}
                    <nav className="flex-1 py-6 space-y-1" role="navigation" aria-label="Navigation mobile">
                      {navItems.map((item, index) => {
                        const Icon = item.icon
                        const isActive = activeSection === item.id
                        
                        return (
                          <button
                            key={item.href}
                            onClick={() => scrollToSection(item.href)}
                            aria-label={`Aller à la section ${item.label}`}
                            aria-current={isActive ? 'page' : undefined}
                            className={`group w-full flex items-center space-x-4 px-4 py-4 text-left font-medium transition-all duration-300 rounded-xl hover:shadow-lg ${
                              isActive 
                                ? 'text-white bg-gradient-to-r from-violet-500 to-blue-500' 
                                : 'text-gray-700 dark:text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500'
                            }`}
                          >
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                              isActive 
                                ? 'bg-white/20' 
                                : 'bg-gray-100 dark:bg-gray-800 group-hover:bg-white/20'
                            }`}>
                              <Icon className={`w-5 h-5 transition-transform duration-300 ${
                                !reducedMotion ? 'group-hover:scale-110' : ''
                              }`} />
                            </div>
                            <span className="text-lg">{item.label}</span>
                            
                            {/* Indicateur d'activité */}
                            <div className={`ml-auto transition-opacity duration-300 ${
                              isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                            }`}>
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </button>
                        )
                      })}
                    </nav>

                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}