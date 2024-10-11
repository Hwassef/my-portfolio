'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Calendar, Code, Layers, Zap, Sun, Moon, Users, Star, Gamepad } from 'lucide-react'
import Image from 'next/image'

const project = {
  id: "lejeugui",
  title: 'Le Jeu Qui',
  description: 'Le jeu qui... permet de passer une soirée délirante entre amis ou en famille !',
  image: '/le_jeu_qui.png',
  appStore: 'https://apps.apple.com/us/app/le-jeu-qui/id6448712204',
  playStore: 'https://play.google.com/store/apps/details?id=com.lejeuqui',
  duration: '3 months',
  techStack: ['Flutter', 'Dart', 'Firebase'],
  architecture: 'MVVM',
  stateManagement: 'MobX',
  mockups: [
    '/lejeuqui_mockup_1.png',
    '/lejeuqui_mockup_2.png',
  ]
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
          <a href="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </a>
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
            <img
              src={project.image}
              alt={project.title}
              className="w-40 h-40 mx-auto mb-6 rounded-3xl shadow-lg object-cover"
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
                    className={`px-4 py-2 rounded-full transition-colors duration-200 ${activeSection === section.id
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
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">About Le Jeu Qui</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Le Jeu Qui is an exciting party game designed to bring friends and family together for hilarious evenings filled with laughter and fun. With a wide variety of challenges and questions, it promises to create unforgettable moments during your gatherings.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Whether youre looking to break the ice at a party or simply want to spice up your game nights, Le Jeu Qui offers an engaging and entertaining experience for players of all ages.
                    </p>
                  </div>
                  <div className="relative h-[600px] w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-full h-full max-w-md">
                        {project.mockups.map((mockup, index) => (
                          <motion.div
                            key={index}
                            className="absolute top-1/2 left-1/2 w-48 h-96 rounded-3xl shadow-2xl overflow-hidden"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                              x: `${(index - 1) * 60}%`,
                              y: `-50%`,
                              rotate: (index - 1) * 5,
                              zIndex: 3 - index
                            }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                          >
                            <Image
                              src={mockup}
                              alt={`${project.title} mockup ${index + 1}`}
                              layout="fill"
                              objectFit="cover"
                              className="rounded-3xl"
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
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
                    { icon: Users, title: 'Multiplayer Fun', description: 'Play with friends and family for an exciting group experience.' },
                    { icon: Star, title: 'Diverse Challenges', description: 'Wide variety of questions and tasks to keep the game fresh and entertaining.' },
                    { icon: Gamepad, title: 'Easy to Play', description: 'Simple rules and intuitive interface for players of all ages.' },
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
              <svg viewBox="0 0 384 512" className="w-6 h-6 mr-3 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" /></svg>
              Download on App Store
            </motion.a>
            <motion.a
              href={project.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg viewBox="0 0 512 512" className="w-6 h-6 mr-3 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" /></svg>
              Get it on Google Play
            </motion.a>
          </motion.div>
        </div>
      </main>
    </div>
  )
}