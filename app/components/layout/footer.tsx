"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Github, 
  Linkedin, 
  Facebook,
  Instagram,
  ArrowUp
} from "lucide-react"

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  href: string
  label: string
  color: string
  hoverColor: string
}

export default function Footer() {
  // Configuration des réseaux sociaux
  const socialLinks: SocialLink[] = [
    {
      icon: Github,
      href: "https://github.com/FidyRakotonjanahary",
      label: "GitHub",
      color: "text-gray-800 dark:text-gray-300",
      hoverColor: "hover:text-black dark:hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fidy-rakotonjanahary",
      label: "LinkedIn",
      color: "text-blue-600 dark:text-blue-400",
      hoverColor: "hover:text-blue-700 dark:hover:text-blue-300"
    },
    {
      icon: Facebook,
      href: "https://web.facebook.com/fidy.rakii",
      label: "Facebook",
      color: "text-blue-500 dark:text-blue-400",
      hoverColor: "hover:text-blue-600 dark:hover:text-blue-300"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/fidyrakotonjanahary/",
      label: "Instagram",
      color: "text-pink-500 dark:text-pink-400",
      hoverColor: "hover:text-pink-600 dark:hover:text-pink-300"
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30 border-t border-gray-200/50 dark:border-gray-800/50 overflow-hidden">
      
      {/* Background Elements - Réduits */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-32 bg-gradient-to-br from-violet-100/20 via-blue-50/10 to-transparent dark:from-violet-900/10 dark:via-blue-900/5 dark:to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-24 bg-gradient-to-tl from-blue-100/20 to-transparent dark:from-blue-900/10 dark:to-transparent rounded-full blur-2xl translate-x-1/2 translate-y-1/2"></div>
        
        {/* Particules flottantes - Réduites */}
        <div className="absolute top-4 left-1/4 w-1.5 h-1.5 bg-violet-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-1/3 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-4 left-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative">
        <div className="container mx-auto px-6 py-4">
          
          {/* Section principale - Centré */}
          <motion.div 
            className="flex flex-col items-center space-y-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Réseaux sociaux - Élément principal centré */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-8 h-8 ${social.color} ${social.hoverColor} bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </motion.div>

            {/* Contact email - Sous les réseaux sociaux */}

            {/* Footer bottom - Copyright à gauche, bouton à droite */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-full flex items-center justify-between pt-2 border-t border-gray-200/30 dark:border-gray-700/30"
            >
              <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <span>© {currentYear} Fidy R.</span>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault()
                    const element = document.querySelector('#contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </div>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-violet-600 to-blue-500 hover:from-violet-700 hover:to-blue-600 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 group"
                aria-label="Retour en haut"
              >
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
                <span className="text-xs font-medium">Haut</span>
              </motion.button>
            </motion.div>

          </motion.div>
        </div>

        {/* Effet de brillance qui traverse - Plus fin */}
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatDelay: 5,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"
        ></motion.div>
      </div>
    </footer>
  )
}