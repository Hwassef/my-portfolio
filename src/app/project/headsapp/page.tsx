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
  logo: string;
  mockups: string[];
  appStore: string;
  playStore?: string;
  duration: string;
  techStack: string[];
  architecture: string;
  stateManagement: string;
}

const project: Project = {
  id: "headsapp",
  title: 'HeadsApp',
  description: 'Secure messaging for healthcare professionals to streamline consultations and patient care.',
  logo: '/headsapp-logo.png',
  mockups: [
    '/headsapp_mockups.png',
    '/headsapp_mockup_two.png',
    '/headsapp_mockup_three.png',
  ],
  appStore: 'https://apps.apple.com/us/app/headsapp/id1568508905',
  playStore: 'https://play.google.com/store/apps/details?id=com.TechAngela.HeadsApp&hl=fr&gl=US',
  duration: '5 months',
  techStack: ['Flutter', 'Dart', 'Firebase'],
  architecture: 'Clean Architecture',
  stateManagement: 'Riverpod',
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
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
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
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Image
              src={project.logo}
              alt={project.title}
              width={100}
              height={100}
              className="mx-auto mb-6 rounded-3xl shadow-lg"
            />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          <nav className="mb-12">
            <ul className="flex justify-center space-x-4">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`px-6 py-2 rounded-full transition-all duration-300 ${activeSection === section.id
                        ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-800'
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
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 mb-12"
            >
              {activeSection === 'overview' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">About HeadsApp</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      HeadsApp is a cutting-edge secure messaging platform designed specifically for healthcare professionals. It aims to streamline consultations and improve patient care through efficient, HIPAA-compliant communication.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      With its intuitive interface and robust features, HeadsApp is revolutionizing the way healthcare providers collaborate and share critical information.
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
                <div>
                  <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Project Details</h2>
                  <ul className="space-y-4">
                    {[
                      { icon: Calendar, text: `Duration: ${project.duration}` },
                      { icon: Code, text: `Tech Stack: ${project.techStack.join(', ')}` },
                      { icon: Layers, text: `Architecture: ${project.architecture}` },
                      { icon: Zap, text: `State Management: ${project.stateManagement}` }
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 p-4 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <item.icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
                        <span>{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {activeSection === 'features' && (
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { icon: MessageCircle, title: 'Secure Messaging', description: 'End-to-end encrypted communication for patient data protection.' },
                    { icon: Shield, title: 'HIPAA Compliant', description: 'Meets all necessary regulations for healthcare data security.' },
                    { icon: Stethoscope, title: 'Streamlined Consultations', description: 'Efficient tools for quick and effective patient care discussions.' },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-100 dark:bg-gray-700 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <feature.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
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
              <SiAppstore className="w-6 h-6 mr-3" /> Download on App Store
            </motion.a>
            {project.playStore && (
              <motion.a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGoogleplay className="w-6 h-6 mr-3" /> Get it on Google Play
              </motion.a>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}