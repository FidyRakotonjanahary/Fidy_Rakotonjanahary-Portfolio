"use client"

import React, { useState } from "react"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  User, 
  MessageCircle,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Contact
} from "lucide-react"
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href: string
  action: string
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo: ContactInfo[] = [
    {
      icon: Mail,
      label: "Email",
      value: "fidyrakotonjanahary00@gmail.com",
      href: "mailto:fidyrakotonjanahary00@gmail.com",
      action: "Envoyer un email"
    },
    {
      icon: Phone,
      label: "Téléphone", 
      value: "+261 34 48 323 37",
      href: "tel:+261344832337",
      action: "Appeler maintenant"
    },
    {
      icon: MapPin,
      label: "Localisation",
      value: "Anosibe, Antananarivo",
      href: "https://maps.google.com/?q=-18.919094,47.528175",
      action: "Voir sur la carte"
    }
  ]

  const handleContactClick = (info: ContactInfo) => {
    if (info.href.startsWith('tel:')) {
      window.location.href = info.href
    } else if (info.href.startsWith('mailto:')) {
      window.location.href = info.href
    } else if (info.href.startsWith('http')) {
      window.open(info.href, '_blank', 'noopener,noreferrer')
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis"
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis"
    } else if (formData.message.length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
  
    setIsSubmitting(true)
    setSubmitStatus('idle')
  
    try {
      // Configuration EmailJS
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
  
      // Paramètres du template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Fidy',
      }
  
      // Envoi avec EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      
      setSubmitStatus('success')
      setFormData({ name: "", email: "", message: "" })
      setErrors({})
      setTimeout(() => setSubmitStatus('idle'), 5000)
  
    } catch (error) {
      console.error('Erreur EmailJS:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <section 
      id="contact" 
      className="min-h-screen lg:h-screen bg-gradient-to-br from-white via-gray-50/50 to-blue-50/30 dark:from-blue-950/20 dark:via-gray-900/50 dark:to-gray-950 relative"
    >
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-48 h-48 bg-gradient-to-br from-violet-100/30 via-blue-50/15 to-transparent dark:from-violet-900/15 dark:via-blue-900/8 dark:to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-100/25 to-transparent dark:from-blue-900/12 dark:to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden py-4 px-4">
        {/* Header Mobile */}
        <div className="text-center mb-4">
          <h1 className="text-lg sm:text-xl font-bold mb-1 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
              Contactez-moi
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-xs max-w-xl mx-auto">
            Discutons de votre projet ensemble
          </p>
        </div>

        {/* Content Mobile */}
        <div className="max-w-2xl mx-auto space-y-4">
          
          {/* Coordonnées Mobile */}
          <div className="space-y-3">
            <div>
              <div className="w-8 h-8 mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl flex items-center justify-center text-white">
                <Contact className="h-4 w-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                Mes coordonnées
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xs">
                Contactez-moi directement. Réponse sous 24h.
              </p>
            </div>

            <div className="space-y-2">
              {contactInfo.map((info) => {
                const Icon = info.icon
                return (
                  <button
                    key={info.label}
                    onClick={() => handleContactClick(info)}
                    className="w-full flex items-center gap-3 p-2.5 sm:p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-800/40 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer group text-left"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform flex-shrink-0">
                      <Icon className="h-3 w-3" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-xs sm:text-sm">
                          {info.label}
                        </h3>
                        {info.href.startsWith('http') && (
                          <ExternalLink className="h-2 w-2 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-xs mb-0.5">
                        {info.value}
                      </p>
                      <p className="text-blue-600 dark:text-blue-400 text-xs font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        {info.action}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Formulaire Mobile */}
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl border border-white/40 dark:border-gray-800/40 shadow-xl p-4">
            <div className="mb-3">
              <div className="w-8 h-8 mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl flex items-center justify-center text-white">
                <MessageCircle className="h-4 w-4" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
                Envoyez-moi un message
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-xs">
                Je vous répondrai rapidement
              </p>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-3 p-3 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-green-700 dark:text-green-300 font-medium text-xs">
                    Message envoyé ! Réponse sous 24h.
                  </span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-3 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                  <span className="text-red-700 dark:text-red-300 font-medium text-xs">
                    Erreur d'envoi. Utilisez l'email direct.
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Nom *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Votre nom"
                    className={`w-full pl-9 pr-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs ${
                      errors.name 
                        ? 'border-red-300 dark:border-red-700' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="votre@email.com"
                    className={`w-full pl-9 pr-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs ${
                      errors.email 
                        ? 'border-red-300 dark:border-red-700' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Message *
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-2 h-3 w-3 text-gray-400" />
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Décrivez votre projet..."
                    rows={2}
                    className={`w-full pl-9 pr-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs ${
                      errors.message 
                        ? 'border-red-300 dark:border-red-700' 
                        : 'border-gray-200 dark:border-gray-700'
                    }`}
                    disabled={isSubmitting}
                  />
                </div>
                {errors.message && (
                  <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-2 px-4 rounded-lg font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Envoi...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-3 w-3" />
                    <span>Envoyer</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:items-center lg:h-screen lg:px-8">
        <div className="container mx-auto max-w-7xl">
          
          {/* Header Desktop */}
          <div className="text-center mb-4">
            <h1 className="text-xl xl:text-2xl font-bold mb-1 tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 dark:from-blue-400 dark:via-violet-400 dark:to-purple-400 bg-clip-text text-transparent">
                Contactez-moi
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-xs max-w-xl mx-auto">
              Discutons de votre projet ensemble
            </p>
          </div>

          {/* Content Desktop - Grid 2 colonnes */}
          <div className="grid grid-cols-2 gap-4 xl:gap-6">
            
            {/* Colonne gauche - Coordonnées */}
            <div className="flex flex-col justify-center space-y-3">
              <div className="mb-1">
                <div className="w-8 h-8 mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center text-white">
                  <Contact className="h-4 w-4" />
                </div>
                <h2 className="text-base xl:text-lg font-bold text-gray-900 dark:text-white mb-1">
                  Mes coordonnées
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-xs">
                  Contactez-moi directement. Réponse sous 24h.
                </p>
              </div>

              <div className="space-y-2">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <button
                      key={info.label}
                      onClick={() => handleContactClick(info)}
                      className="w-full flex items-center gap-3 p-2.5 xl:p-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-white/40 dark:border-gray-800/40 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] cursor-pointer group text-left"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform flex-shrink-0">
                        <Icon className="h-3 w-3" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-0.5">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-xs xl:text-sm">
                            {info.label}
                          </h3>
                          {info.href.startsWith('http') && (
                            <ExternalLink className="h-2 w-2 text-gray-400" />
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-xs mb-0.5">
                          {info.value}
                        </p>
                        <p className="text-blue-600 dark:text-blue-400 text-xs font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                          {info.action}
                        </p>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="flex flex-col justify-center">
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg border border-white/40 dark:border-gray-800/40 shadow-xl p-4 xl:p-5">
                
                <div className="mb-3">
                  <div className="w-8 h-8 mb-2 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg flex items-center justify-center text-white">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <h2 className="text-base xl:text-lg font-bold text-gray-900 dark:text-white mb-1">
                    Envoyez-moi un message
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-xs">
                    Je vous répondrai rapidement
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="mb-3 p-3 bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                      <span className="text-green-700 dark:text-green-300 font-medium text-xs">
                        Message envoyé ! Réponse sous 24h.
                      </span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-3 p-3 bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 rounded-lg">
                    <div className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                      <span className="text-red-700 dark:text-red-300 font-medium text-xs">
                        Erreur d'envoi. Utilisez l'email direct.
                      </span>
                    </div>
                  </div>
                )}

                <div className="space-y-2.5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Nom *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Votre nom"
                        className={`w-full pl-9 pr-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs ${
                          errors.name 
                            ? 'border-red-300 dark:border-red-700' 
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-gray-400" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="votre@email.com"
                        className={`w-full pl-9 pr-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs ${
                          errors.email 
                            ? 'border-red-300 dark:border-red-700' 
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-2 h-3 w-3 text-gray-400" />
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Décrivez votre projet..."
                        rows={2}
                        className={`w-full pl-9 pr-3 py-2 bg-gray-50/80 dark:bg-gray-800/80 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all resize-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-xs ${
                          errors.message 
                            ? 'border-red-300 dark:border-red-700' 
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                        disabled={isSubmitting}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-2 px-4 rounded-lg font-semibold text-xs shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mt-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Envoi...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-3 w-3" />
                        <span>Envoyer</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}