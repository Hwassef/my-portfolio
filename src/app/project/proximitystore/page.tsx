'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, Code, Layers, Zap, Sun, Moon, MessageCircle, Shield, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import { SiGoogleplay, SiAppstore } from 'react-icons/si'

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  mockup: string;
  appStore: string;
  playStore?: string;
  duration: string;
  techStack: string[];
  architecture: string;
  stateManagement: string;
}

const project: Project = {
  id: "proximitystore",
  title: 'ProximityStore',
  description: 'Find local deals and support nearby businesses with personalized shopping recommendations.',
  image: '/proximitystore.png',
  mockup: '/proximitystore.png',
  appStore: 'https://apps.apple.com/fr/app/proximitystore/id1612459998?l=en',
  playStore: 'https://play.google.com/store/apps/details?id=com.proximitystore.app',
  duration: '3 months',
  techStack: ['Flutter', 'Dart', 'Firebase'],
  architecture: 'MVC',
  stateManagement: 'GetX',
}

export default function ProjectDetails() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('overview')

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'details', title: 'Project Details' },
    { id: 'features', title: 'Key Features' },
  ]

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={150}
              height={80}
              className="mx-auto mb-6 rounded-3xl shadow-lg"
            />

            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          <nav className="mb-8">
            <ul className="flex justify-center space-x-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`px-4 py-2 rounded-full transition-colors duration-200 ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeSection === 'overview' && (
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">About ProximityStore</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Find local deals and support nearby businesses with personalized shopping recommendations.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Empowering local businesses to grow while offering customers curated deals in their proximity.
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={project.mockup}
                      alt={`${project.title} mockup`}
                      sizes='100vw'
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              )}

              {activeSection === 'details' && (
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Project Details</h2>
                  <ul className="space-y-4">
                    {[
                      { icon: Calendar, text: `Duration: ${project.duration}` },
                      { icon: Code, text: `Tech Stack: ${project.techStack.join(', ')}` },
                      { icon: Layers, text: `Architecture: ${project.architecture}` },
                      { icon: Zap, text: `State Management: ${project.stateManagement}` }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                        <item.icon className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === 'features' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: MessageCircle, title: 'Personalized Recommendations', description: 'Get local deals tailored to your preferences and location.' },
                    { icon: Shield, title: 'Data Security', description: 'Your personal data is safe and encrypted.' },
                    { icon: Stethoscope, title: 'Nearby Business Support', description: 'Encourages customers to shop locally, helping small businesses grow.' },
                  ].map((feature, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                      <feature.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiAppstore className="w-5 h-5 mr-2" />
              Download on the App Store
            </motion.a>
            
            {project.playStore && (
              <motion.a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGoogleplay className="w-5 h-5 mr-2" />
                Get it on Google Play
              </motion.a>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}
