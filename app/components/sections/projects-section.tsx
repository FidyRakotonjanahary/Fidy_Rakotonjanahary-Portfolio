"use client"

import React, { useState, useEffect, useCallback } from "react"
import { ExternalLink, Github, Eye, ChevronLeft, ChevronRight, Calendar, Clock, Image, X, ZoomIn } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  image: string | null
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
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set())
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Gestion de Parc Informatique",
      description: "Application métier pour la gestion de parc informatique de SALAMA",
      fullDescription: "Solution complète permettant de gérer l'inventaire détaillé des équipements informatiques, de suivre les interventions techniques avec historique complet et de générer des tableaux de bord statistiques avec rapports PDF.",
      image: "/images/projects/gestion-parc-informatique.png",
      technologies: [
        { name: "WebDev", logo: "/images/logo/webdev.png" },
        { name: "Microsoft SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
        { name: "WLanguage", logo: "/images/logo/wlanguage.jpg" }
      ],
      category: "web",
      startDate: "Septembre 2023",
      endDate: "Novembre 2023",
      duration: "3 mois"
    },
    {
      id: 2,
      title: "Gestion des Budgets et Engagements",
      description: "Application web pour la gestion des budgets et engagements.",
      fullDescription: "Application web de gestion budgétaire et demandes d'engagement de dépenses avec module de gestion des rubriques budgétaires, factures, modes de paiement et génération de documents PDF.",
      image: null,
      technologies: [
        { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
        { name: "Livewire", logo: "https://laravel-livewire.com/img/twitter.png" },
        { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
        { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
       ],
      category: "web",
      startDate: "Septembre 2022",
      endDate: "Novembre 2022",
      duration: "2 mois"
    },
    {
      id: 3,
      title: "Gestion des Opérations Bancaires",
      description: "Application web pour la gestion des opérations bancaires.",
      fullDescription: "Solution complète permettant de gérer les comptes clients bancaires, de traiter les opérations financières avec mise à jour automatique des soldes et de contrôler les accès utilisateurs avec système d'audit et tableaux de bord intégrés.",
      image: "/images/projects/gestion-bancaire.png",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      category: "web",
      startDate: "Mars 2025",
      endDate: "Avril 2025",
      duration: "2 mois"
    },
    {
      id: 4,
      title: " Système d'évaluation en ligne",
      description: "Application web pour la gestion des évaluations en ligne.",
      fullDescription: "Solution complète permettant de gérer les étudiants et leurs matières, de créer des questionnaires d'examens personnalisés et de synchroniser les données d'évaluation via API REST avec une application mobile dédiée aux étudiants.",
      image: "/images/projects/gestion-evaluation-en-ligne.png",
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
      ],
      category: "web",
      startDate: "Septembre 2024",
      endDate: "Octobre 2024",
      duration: "2 mois"
    }
  ]

  // Utilisation de useCallback pour éviter les re-créations de fonction
  const closeModal = useCallback(() => {
    console.log("Closing modal")
    setIsModalOpen(false)
    setModalImage(null)
  }, [])

  const openModal = useCallback((imageSrc: string) => {
    console.log("Opening modal with image:", imageSrc)
    setModalImage(imageSrc)
    setIsModalOpen(true)
  }, [])

  // Préchargement des images au montage du composant
  useEffect(() => {
    const preloadImages = async () => {
      const allImages = projects
        .filter(p => p.image)
        .map(p => p.image!)
        .concat(
          projects.flatMap(p => 
            p.technologies.map(t => t.logo)
          )
        )

      const preloadPromises = allImages.map(src => {
        return new Promise<string>((resolve, reject) => {
          // ✅ CORRECTION: Utilisation de window.Image() au lieu de new Image()
          const img = new window.Image()
          img.onload = () => resolve(src)
          img.onerror = () => reject(src)
          img.src = src
        })
      })

      Promise.allSettled(preloadPromises).then(results => {
        const loadedImages = new Set<string>()
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            loadedImages.add(allImages[index])
          }
        })
        setPreloadedImages(loadedImages)
      })
    }

    preloadImages()
  }, [])

  // Gestion des touches clavier pour le modal - CORRIGÉ
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown)
      // Empêcher le scroll en arrière-plan
      const originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'
      
      return () => {
        document.removeEventListener('keydown', handleKeyDown)
        document.body.style.overflow = originalStyle
      }
    }
  }, [isModalOpen, closeModal])

  const currentProject = projects[selectedProject] || projects[0]

  const nextProject = () => {
    setSelectedProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setSelectedProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  // Composant Modal en plein écran - AMÉLIORÉ
  const ImageModal = () => {
    if (!isModalOpen || !modalImage) return null

    return (
      <>
        {/* Overlay background */}
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ zIndex: 999999 }} // Z-index très élevé
          onClick={closeModal}
        >
          <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
            {/* Bouton fermer - TOUJOURS VISIBLE */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeModal()
              }}
              className="fixed top-4 right-4 z-[999999] p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full transition-all duration-300 group border border-white/20"
              aria-label="Fermer le modal"
            >
              <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
            </button>

            {/* Image en plein écran */}
            <div className="relative max-w-full max-h-full">
              <img
                src={modalImage}
                alt={`${currentProject.title} - Vue agrandie`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  console.error("Erreur de chargement de l'image modal:", modalImage)
                  closeModal()
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }

  // Composant optimisé pour l'affichage d'image - AMÉLIORÉ
  const ProjectImage = ({ project }: { project: Project }) => {
    const [imageError, setImageError] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    const isPreloaded = project.image && preloadedImages.has(project.image)

    useEffect(() => {
      if (isPreloaded) {
        setImageLoaded(true)
      }
    }, [isPreloaded])

    const handleImageClick = (e: React.MouseEvent) => {
      e.preventDefault()
      e.stopPropagation()
      
      console.log("handleImageClick called for:", project.image)
      
      if (project.image && !imageError) {
        console.log("Image clicked, opening modal with:", project.image)
        openModal(project.image)
      } else {
        console.log("Cannot open modal - image error or no image")
      }
    }

    if (!project.image || imageError) {
      return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-blue-100/80 via-violet-100/60 to-purple-100/40 dark:from-blue-950/60 dark:via-violet-950/40 dark:to-purple-950/30">
          <div className="p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500/20 to-violet-500/20 dark:from-blue-400/30 dark:to-violet-400/30 rounded-full flex items-center justify-center">
              <Image className="w-10 h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Aperçu non disponible
            </p>
            <div className="mt-4 flex justify-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 dark:bg-blue-500 rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-violet-400 dark:bg-violet-500 rounded-full opacity-40"></div>
              <div className="w-2 h-2 bg-purple-400 dark:bg-purple-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="relative w-full h-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 group">
        
        {/* Zone cliquable PRINCIPALE qui couvre tout */}
        <div 
          className="absolute inset-0 cursor-pointer z-20"
          onClick={(e) => {
            // Vérifier si le clic n'est pas sur un bouton de navigation
            const target = e.target as HTMLElement
            const isNavigationButton = target.closest('button')
            
            if (!isNavigationButton) {
              handleImageClick(e)
            }
          }}
          onMouseDown={(e) => console.log("Mouse down on clickable area")}
        >
        </div>

        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-violet-100/60 to-purple-100/40 dark:from-blue-950/60 dark:via-violet-950/40 dark:to-purple-950/30 flex items-center justify-center z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                Chargement...
              </div>
            </div>
          </div>
        )}
        
        <img
          src={project.image}
          alt={`Capture d'écran - ${project.title}`}
          className={`w-full h-full object-contain object-center transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => {
            console.log("Image loaded successfully:", project.image)
            setImageLoaded(true)
          }}
          onError={(e) => {
            console.error("Erreur de chargement de l'image:", project.image)
            setImageError(true)
          }}
          loading="lazy"
          decoding="async"
        />

        {/* Overlay avec icône zoom au hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center pointer-events-none z-20">
          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
              <ZoomIn className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </div>
          </div>
        </div>

        {/* Indication cliquable */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
          <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-gray-700 dark:text-gray-300 font-medium">
            Cliquer pour agrandir
          </div>
        </div>
      </div>
    )
  }

  // Composant optimisé pour les logos de technologies
  const TechnologyIcon = ({ tech }: { tech: { name: string; logo: string } }) => {
    const [imageError, setImageError] = useState(false)
    const isPreloaded = preloadedImages.has(tech.logo)

    if (imageError || !isPreloaded) {
      return (
        <div 
          className="w-10 h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-800/40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group relative"
          title={tech.name}
        >
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-violet-500 rounded text-white text-xs flex items-center justify-center font-bold">
            {tech.name.charAt(0)}
          </div>
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
            {tech.name}
          </div>
        </div>
      )
    }

    return (
      <div
        className="w-10 h-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-800/40 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center group relative"
        title={tech.name}
      >
        <img
          src={tech.logo}
          alt={tech.name}
          className="w-6 h-6 object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setImageError(true)}
        />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
          {tech.name}
        </div>
      </div>
    )
  }

  return (
    <>
      <section id="projets" className="h-screen flex flex-col overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-blue-950/20 dark:via-gray-900/50 dark:to-gray-950 relative pt-4">
        
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
                  <ProjectImage project={currentProject} />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>

                {/* Navigation Arrows */}
                {projects.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log("Previous button clicked")
                        prevProject()
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/40 dark:border-gray-800/40 z-30"
                    >
                      <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        console.log("Next button clicked")
                        nextProject()
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-white/40 dark:border-gray-800/40 z-30"
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
                      <TechnologyIcon key={tech.name} tech={tech} />
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.liveUrl && (
                    <button 
                      className="px-3 py-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white rounded-md shadow-lg hover:shadow-xl transition-all duration-300 group text-xs flex items-center gap-1"
                      onClick={() => window.open(currentProject.liveUrl, '_blank')}
                    >
                      <Eye className="h-3 w-3 group-hover:scale-110 transition-transform" />
                      Voir le projet
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </button>
                  )}
                  
                  {currentProject.githubUrl && (
                    <button 
                      className="px-3 py-2 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded-md transition-all duration-300 text-xs flex items-center gap-1"
                      onClick={() => window.open(currentProject.githubUrl, '_blank')}
                    >
                      <Github className="h-3 w-3" />
                      Code source
                      <ExternalLink className="h-3 w-3 opacity-70" />
                    </button>
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

                {/* Boutons de test supprimés */}

                {/* Debug info - SUPPRIMÉ */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal en plein écran - Rendu conditionnellement */}
      {isModalOpen && <ImageModal />}
    </>
  )
}