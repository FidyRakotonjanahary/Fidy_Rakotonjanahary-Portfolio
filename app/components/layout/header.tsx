"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Moon, Sun, Code, Palette, Sparkles, Home, User, Briefcase, Mail } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState(-1)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: "#accueil", label: "Accueil", icon: Home },
    { href: "#apropos", label: "Profil", icon: User },
    { href: "#skills", label: "Skills", icon: Code },
    { href: "#projets", label: "Projets", icon: Briefcase },
    { href: "#contact", label: "Contact", icon: Mail },
  ]

  const scrollToSection = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (!mounted) return null

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/90 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Premium (gardé identique) */}
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              {/* Logo avec animation */}
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 via-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-violet-500/25 transition-all duration-300 group-hover:scale-110">
                <Code className="w-6 h-6 text-white" />
              </div>
              {/* Cercles animés autour du logo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-blue-500 rounded-xl blur opacity-30 group-hover:opacity-60 animate-pulse"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-2xl bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                FidyRak
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Developpeur web
              </p>
            </div>
          </div>
          
          {/* Navigation Desktop avec animations complètes */}
          <nav className="hidden lg:block">
            <div className="relative"
                 onMouseLeave={() => setHoveredIndex(-1)}>
              {/* Container glassmorphism */}
              <div className="flex items-center bg-white/20 dark:bg-black/20 border border-white/30 dark:border-white/10 rounded-full px-2 py-2 shadow-xl">
                
                {/* Indicateur morphique qui suit la souris */}
                <div 
                  className={`absolute top-2 bottom-2 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400 rounded-full transition-all duration-500 ease-out shadow-lg pointer-events-none ${
                    hoveredIndex >= 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                  style={{
                    left: hoveredIndex >= 0 ? `${8 + hoveredIndex * 112}px` : '8px',
                    width: '108px',
                  }}
                ></div>
                
                {navItems.map((item, index) => {
                  const Icon = item.icon
                  const isHovered = hoveredIndex === index
                  return (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`relative z-10 flex items-center justify-center space-x-2 px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 w-[112px] group ${
                        isHovered ? 'text-white' : 'text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      <Icon className={`w-[18px] h-[18px] flex-shrink-0 transition-all duration-300 ${
                        isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
                      }`} />
                      <span className="font-medium text-sm leading-none">{item.label}</span>
                      
                      {/* Particules qui apparaissent au hover */}
                      {isHovered && (
                        <>
                          <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-300 rounded-full animate-ping pointer-events-none"></div>
                          <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse pointer-events-none"></div>
                          <div className="absolute top-1 left-1 w-1 h-1 bg-pink-300 rounded-full animate-bounce pointer-events-none"></div>
                        </>
                      )}
                      
                      {/* Effet de brillance qui traverse */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full transition-all duration-700 pointer-events-none ${
                        isHovered 
                          ? 'translate-x-0 opacity-100' 
                          : '-translate-x-full opacity-0'
                      }`} style={{ transform: isHovered ? 'translateX(100%) skewX(-12deg)' : 'translateX(-100%) skewX(-12deg)' }}></div>
                    </button>
                  )
                })}
              </div>
              
              {/* Halo externe animé */}
              <div className={`absolute -inset-3 bg-gradient-to-r from-violet-500/20 via-blue-500/20 to-cyan-500/20 rounded-full blur-xl transition-opacity duration-500 pointer-events-none ${
                hoveredIndex >= 0 ? 'opacity-100' : 'opacity-40'
              } animate-pulse`}></div>
              
              {/* Orbes flottants */}
              <div className="absolute -top-1 -right-2 w-3 h-3 bg-gradient-to-r from-violet-400 to-blue-400 rounded-full blur-sm animate-pulse opacity-70 pointer-events-none"></div>
              <div className="absolute -bottom-2 -left-1 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-sm animate-pulse opacity-50 delay-700 pointer-events-none"></div>
            </div>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Toggle Theme Futuriste */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="relative w-12 h-12 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/30 dark:hover:bg-black/30 group"
            >
              {/* Icônes avec rotation fluide */}
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
              
              {/* Particules qui tournent autour */}
              <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-yellow-400 rounded-full animate-spin" style={{transformOrigin: '0 24px'}}></div>
                <div className="absolute top-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full animate-spin" style={{transformOrigin: '0 24px', animationDelay: '0.5s'}}></div>
              </div>
            </button>

            {/* CTA Button Premium */}
            <button 
              onClick={() => scrollToSection('#contact')}
              className="hidden md:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-600 via-blue-500 to-cyan-400 hover:from-violet-700 hover:via-blue-600 hover:to-cyan-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group relative overflow-hidden"
            >
              {/* Effet de vague au hover */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              
              <span className="relative">Collaborons</span>
              <Sparkles className="relative w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              
              {/* Points lumineux aux coins */}
              <div className="absolute top-0 right-0 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            </button>

            {/* Menu Mobile */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <button className="w-12 h-12 bg-white/20 dark:bg-black/20 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl border-l border-white/20 dark:border-gray-800/20">
                <div className="flex flex-col h-full pt-8">
                  
                  {/* Mobile Header */}
                  <div className="flex items-center space-x-4 pb-8 border-b border-gray-200/20 dark:border-gray-800/20">
                    <div className="w-10 h-10 bg-gradient-to-br from-violet-600 to-blue-500 rounded-xl flex items-center justify-center">
                      <Code className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h2 className="font-bold text-xl bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                        Navigation
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Explorez mon travail</p>
                    </div>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex-1 py-8 space-y-2">
                    {navItems.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <button
                          key={item.href}
                          onClick={() => scrollToSection(item.href)}
                          className="group w-full flex items-center space-x-4 px-4 py-4 text-left font-medium text-gray-700 dark:text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gradient-to-r hover:from-violet-500 hover:to-blue-500 hover:shadow-lg"
                        >
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-white/20 transition-all duration-300">
                            <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                          </div>
                          <span className="text-lg">{item.label}</span>
                          
                          {/* Indicateur d'activité */}
                          <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                        </button>
                      )
                    })}
                  </nav>

                  {/* Mobile CTA */}
                  <div className="pb-8 pt-4 border-t border-gray-200/20 dark:border-gray-800/20">
                    <button 
                      onClick={() => scrollToSection('#contact')}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <span>Contactez-moi</span>
                      <Sparkles className="w-5 h-5" />
                    </button>
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                      Créons quelque chose d'extraordinaire ensemble
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}