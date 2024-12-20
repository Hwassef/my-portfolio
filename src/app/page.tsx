'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Github, Linkedin, Mail, ChevronDown, Smartphone, Code, Zap, Layers, Globe } from 'lucide-react'
import confetti from 'canvas-confetti'
import Image from 'next/image'
import Link from 'next/link'
import { SiGoogleplay, SiAppstore } from 'react-icons/si'

interface Skill {
  name: string;
  icon: JSX.Element;
}

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

interface ResumeData {
  personal: {
    name: string;
    phone: string;
    email: string;
    linkedin: string;
    github: string;
  };
  skills: string[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string;
  }[];
  education: {
    degree: string;
    major: string;
  };
  languages: string[];
}


export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true' ||
      (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const skills: Skill[] = [
    { name: 'Flutter', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Dart', icon: <Code className="w-6 h-6" /> },
    { name: 'Firebase', icon: <Zap className="w-6 h-6" /> },
    { name: 'RESTful APIs', icon: <Globe className="w-6 h-6" /> },
    { name: 'State Management', icon: <Layers className="w-6 h-6" /> },
    { name: 'UI/UX Design', icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Git', icon: <Code className="w-6 h-6" /> },
    { name: 'Agile Development', icon: <Zap className="w-6 h-6" /> },
    { name: 'Cross-platform', icon: <Layers className="w-6 h-6" /> },
    { name: 'App Store', icon: <Globe className="w-6 h-6" /> },
  ]

  const projects: Project[] = [
    {
      id: "dukhanbank",
      title: 'DukhanBank',
      description: 'Bank easily with secure login, instant transfers, bill payments, and more, all 24/7.',
      image: '/ic_app_icon.svg',
      mockup: '/ic_app_icon.svg',
      appStore: 'https://apps.apple.com/us/app/dukhan-mobile/id817391995',
      playStore: 'https://play.google.com/store/apps/details?id=com.Barwa&hl=en',
      duration: '6 months',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      architecture: 'Clean Architecture',
      stateManagement: 'BLoC',
    },
    {
      id: "digitrame",
      title: 'Digitrame',
      description: 'Manage quotes, invoices, and inventory with ease, designed for freelancers and small businesses.',
      image: '/digitrame.jpg',
      mockup: '/digitrame.jpg',
      appStore: 'https://apps.apple.com/fr/app/digitrame/id1494623897',
      duration: '4 months',
      techStack: ['Flutter', 'Dart', 'SQLite'],
      architecture: 'MVVM',
      stateManagement: 'Provider',
    },
    {
      id: "headsapp",
      title: 'HeadsApp',
      description: 'Secure messaging for healthcare professionals to streamline consultations and patient care.',
      image: '/headsapp.png',
      mockup: '/headsapp.png',
      appStore: 'https://apps.apple.com/us/app/headsapp/id1568508905',
      playStore: 'https://play.google.com/store/apps/details?id=com.TechAngela.HeadsApp&hl=fr&gl=US',
      duration: '5 months',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      architecture: 'Clean Architecture',
      stateManagement: 'Riverpod',
    },
    {
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
    },
    {
      id: "swipecolorgame",
      title: 'Swipe Color Game',
      description: 'Swipe based on color cues and compete globally in this fun, challenging game.',
      image: '/swipe_color.png',
      mockup: '/swipe_color.png',
      appStore: 'https://apps.apple.com/us/app/swipe-color-game/id1522599744',
      playStore: 'https://play.google.com/store/apps/details?id=com.impactmsg.swipecolorgame',
      duration: '2 months',
      techStack: ['Flutter', 'Dart'],
      architecture: 'Simple Architecture',
      stateManagement: 'setState',
    },
    {
      id: "lejeuqui",
      title: 'Le Jeu Qui',
      description: 'A fun party game with trivia and challenges, perfect for social gatherings.',
      image: '/le_jeu_qui.png',
      mockup: '/le_jeu_qui.png',
      appStore: 'https://apps.apple.com/us/app/le-jeu-qui/id6448712204',
      playStore: 'https://play.google.com/store/apps/details?id=com.lejeuqui',
      duration: '3 months',
      techStack: ['Flutter', 'Dart', 'Firebase'],
      architecture: 'MVVM',
      stateManagement: 'MobX',
    },
  ]

  const resumeData: ResumeData = {
    personal: {
      name: 'Wassef Hassine',
      phone: '53 252 928',
      email: 'hassinewassef@gmail.com',
      linkedin: 'https://www.linkedin.com/in/wassef-hassine-052329248/',
      github: 'https://github.com/Hwassef',
    },
    skills: [
      'Flutter', 'Dart', 'Java', 'Swift', 'Firebase', 'SQLite', 'BloC', 'Provider', 'Riverpod', 'Mobx',
      'Git', 'GitHub', 'GitLab', 'Trello', 'GitScrum'
    ],
    experience: [
      {
        company: 'Dukhan Bank',
        position: 'Software Developer',
        period: 'Janvier 2024 - Présent',
        description: 'Développement d\'applications mobiles avec Flutter, intégration de Google Maps, gestion des transferts internationaux et nationaux, et amélioration de l\'expérience utilisateur.',
      },
      {
        company: 'Digitrame',
        position: 'Développeur mobile',
        period: 'Novembre 2022 - Janvier 2024',
        description: 'Amélioration de l\'application Swift "Digitrame", intégration de fonctionnalités de signature numérique et de partage de documents sécurisé.',
      },
      {
        company: 'HeadsApp',
        position: 'Développeur Flutter',
        period: 'Janvier 2022 - Octobre 2022',
        description: 'Maintenance et amélioration de l\'application de messagerie interne pour les professionnels de la santé, mise à jour pour la sécurité nulle et internationalisation.',
      },
    ],
    education: {
      degree: 'Licence en informatique',
      major: 'Développement des systèmes d\'information',
    },
    languages: ['Arabe', 'Anglais', 'Français'],
  }

  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 })
  const drawPath = useTransform(scrollYProgress, [0, 1], [0, 1])

  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true })
  const skillsInView = useInView(skillsRef, { once: true })
  const projectsInView = useInView(projectsRef, { once: true })

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const colors = ['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400']
  const shapes = Array.from({ length: 50 }).map((_, i) => ({
    color: colors[i % colors.length],
    initialX: `${Math.random() * 120 - 10}%`,
    initialY: Math.random() * 7000 - 3000,
    size: Math.random() * 60 + 20,
    isSquare: Math.random() > 0.7,
  }))

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300 relative overflow-hidden">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold text-indigo-600 dark:text-indigo-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Wassef Hassine
            </motion.h1>
            <nav>
              <ul className="flex space-x-4">
                {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <a href={`#${item.toLowerCase()}`} className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}

            </motion.button>
          </div>
          <motion.div
            className="h-1 bg-indigo-600 dark:bg-indigo-400"
            style={{ scaleX, transformOrigin: "0%" }}
          />
        </header>

        <main className="pt-20 relative">
          <motion.svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            <motion.path
              d="M0,0 Q50,50 100,0 V100 H0 Z"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="0.5"
              style={{
                pathLength: drawPath,
                opacity: pathLength
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4F46E5" />
                <stop offset="100%" stopColor="#9333EA" />
              </linearGradient>
            </defs>
          </motion.svg>

          <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-20 dark:opacity-40"></div>
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <svg className="absolute left-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                </svg>
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                  </pattern>
                </defs>
              </motion.div>
            </div>

            <motion.div
              className="text-center z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-5xl md:text-7xl font-bold mb-4 text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Flutter Developer
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Crafting beautiful mobile experiences
              </motion.p>
              <motion.a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConfetti}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="w-12 h-12 text-indigo-600 dark:text-indigo-400 animate-bounce" />
            </motion.div>
          </section>

          <section id="about" ref={aboutRef} className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                About Me
              </motion.h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="md:w-1/3"
                  initial={{ opacity: 0, x: -50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <div className="relative w-64 h-64">
                    <Image
                      src="/dash.jpg?height=300&width=300"
                      alt="Wassef Hassine"
                      width={300}
                      height={300}
                      className="rounded-full w-64 h-64 object-cover shadow-lg"
                    />
                    <motion.div
                      className="absolute -top-4 -right-4 bg-indigo-600 text-white p-2 rounded-full"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Smartphone className="w-6 h-6" />
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:w-2/3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-4">
                    Passionate Flutter developer with over 3 years of experience,
                    specializing in user-centered design and mobile app performance optimization.
                    With a deep understanding of mobile development best practices,
                    I strive to create intuitive and high-performance user experiences.
                    Versatile and constantly keeping up with the latest trends,
                    I adapt to project requirements to deliver innovative and effective solutions..
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you can find me exploring new technologies, contributing to
                    open-source projects, or sharing my knowledge through tech blogs and community events.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="skills" ref={skillsRef} className="py-20 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-3xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: 20 }}
                animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                Skills
              </motion.h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon}
                    <span className="mt-2 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" ref={projectsRef} className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2
                className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: -20 }}
                animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                Innovative Projects
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={projectsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {project.id === "swipecolorgame" && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {colors.map((color, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-8 h-8 ${color} rounded-full`}
                            initial={{ x: "50%", y: "50%" }}
                            animate={{
                              x: `${Math.random() * 100}%`,
                              y: `${Math.random() * 100}%`,
                              transition: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                            }}
                          />
                        ))}
                      </motion.div>
                    )}
                    <Link href={`/project/${project.id}`}>
                      <div className="relative h-64 overflow-hidden group">
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="contain"
                          className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <Image
                            src={project.mockup}
                            alt={`${project.title} mockup`}
                            width={150}
                            height={300}
                            objectFit="contain"
                          />
                        </motion.div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-4">{project.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <motion.a
                          href={project.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <SiAppstore className="w-6 h-6 mr-2" /> App Store
                        </motion.a>
                        {project.playStore && (
                          <motion.a
                            href={project.playStore}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <SiGoogleplay className="w-6 h-6 mr-2" /> Play Store
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" ref={contactRef} className="py-20 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Get in Touch</h2>
              <p className="text-center text-lg mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a
                  href={`mailto:${resumeData.personal.email}`}
                  className="bg-indigo-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-indigo-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" /> Email Me
                </motion.a>
                <motion.a
                  href={resumeData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-gray-900 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5 mr-2" /> GitHub
                </motion.a>
                <motion.a
                  href={resumeData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-5 h-5 mr-2" /> LinkedIn
                </motion.a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md py-8 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              &copy; {new Date().getFullYear()} Wassef Hassine. All rights reserved.
            </motion.p>
          </div>
        </footer>
      </div>
    </div>
  )
}