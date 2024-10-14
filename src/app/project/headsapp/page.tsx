'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Sun, Moon, Calendar, Code, Layers, Zap, ChevronLeft, ChevronRight, MessageCircle, Shield, Stethoscope } from 'lucide-react'
import Image from 'next/image'
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
const MotionImage = motion(Image)

export default function ProjectShowcase() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeMockup, setActiveMockup] = useState(0)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const nextMockup = () => setActiveMockup((prev) => (prev + 1) % project.mockups.length)
  const prevMockup = () => setActiveMockup((prev) => (prev - 1 + project.mockups.length) % project.mockups.length)

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Projects
          </Link>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>
        </div>
      </header>

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <MotionImage
              src={project.logo}
              alt={project.title}
              width={100}
              height={100}
              className="mx-auto mb-6 rounded-3xl shadow-lg"
              whileHover={{ scale: 1.05, rotate: 5 }}
            />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {project.description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">Project Details</h2>
                <ul className="space-y-4">
                  {[
                    { icon: Calendar, text: `Duration: ${project.duration}` },
                    { icon: Layers, text: `Architecture: ${project.architecture}` },
                    { icon: Zap, text: `State Management: ${project.stateManagement}` }
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <item.icon className="w-5 h-5 mr-3 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="relative h-[600px]"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMockup}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="w-64 h-[500px] rounded-3xl shadow-2xl overflow-hidden"
                  >
                    <Image
                      src={project.mockups[activeMockup]}
                      alt={`${project.title} mockup ${activeMockup + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-3xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={prevMockup}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md"
                aria-label="Previous mockup"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </button>
              <button
                onClick={nextMockup}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md"
                aria-label="Next mockup"
              >
                <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </button>
            </motion.div>
          </div>

          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: MessageCircle, title: 'Secure Messaging', description: 'End-to-end encrypted communication for patient data protection.' },
                { icon: Shield, title: 'HIPAA Compliant', description: 'Meets all necessary regulations for healthcare data security.' },
                { icon: Stethoscope, title: 'Streamlined Consultations', description: 'Efficient tools for quick and effective patient care discussions.' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
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
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.a
              href={project.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex justify-center items-center bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiAppstore className="w-6 h-6 mr-3" />
              Download on App Store
            </motion.a>
            {project.playStore && (
              <motion.a
                href={project.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <SiGoogleplay className="w-6 h-6 mr-3" />
                Get it on Google Play
              </motion.a>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  )
}