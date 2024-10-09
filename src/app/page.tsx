'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useSpring, useInView, useAnimation, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Github, Linkedin, Mail, ChevronDown, Smartphone, Code, Zap, Layers, Globe, Apple, PlayCircle, Briefcase, GraduationCap, Languages, Phone } from 'lucide-react'
import confetti from 'canvas-confetti'
import Image from 'next/image'

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface Project {
  title: string;
  description: string;
  image: string;
  mockup: string;
  appStore: string;
  playStore: string;
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
      title: 'DukhanBank',
      description: 'Experience seamless banking with the Dukhan Bank Mobile App. Featuring cutting-edge security with two-factor biometric login, this app revolutionizes your financial management. From instant money transfers to bill payments, credit card management to rewards redemption – all at your fingertips, 24/7. The sleek interface ensures a user-friendly experience, making complex banking tasks effortless.',
      image: '/ic_app_icon.svg',
      mockup: '/ic_app_icon.svg',
      appStore: 'https://apps.apple.com/qa/app/dukhan-bank/id1455948108',
      playStore: 'https://play.google.com/store/apps/details?id=com.dukhanbank.mobile',
    },
    {
      title: 'Digitrame',
      description: 'Digitrame is the ultimate business companion for artisans, small businesses, and freelancers. This powerhouse app streamlines your entire workflow – from quote creation to invoice management, client relations to inventory tracking. With its intuitive design and offline capabilities, Digitrame ensures you stay on top of your business, anytime, anywhere. Experience real-time insights and effortless supplier management in one beautifully crafted app.',
      image: '/digitrame.jpg',
      mockup: '/digitrame.jpg',
      appStore: 'https://apps.apple.com/fr/app/digitrame/id1494623897',
      playStore: 'https://play.google.com/store/apps/details?id=com.digitrame.app',
    },
    {
      title: 'HeadsApp',
      description: 'HeadsApp revolutionizes communication for healthcare professionals. Designed by doctors for doctors, this secure instant messaging service combines medical expertise with cutting-edge technology. Enjoy seamless collaboration, quick consultations, and efficient patient care coordination. With its intuitive interface and robust security features, HeadsApp is transforming the way medical professionals connect and share critical information.',
      image: '/headsapp.png',
      mockup: '/headsapp.png',
      appStore: 'https://apps.apple.com/us/app/headsapp/id1568508905',
      playStore: 'https://play.google.com/store/apps/details?id=com.TechAngela.HeadsApp&hl=fr&gl=US',
    },
    {
      title: 'ProximityStore',
      description: 'Discover a world of local deals with ProximityStore. This innovative app connects you with nearby merchants, offering unbeatable discounts across 25+ categories. Shop in-store or online, support local businesses, and reduce your carbon footprint – all while saving money. With its user-friendly interface and personalized recommendations, ProximityStore makes finding the best local offers as easy as a tap on your screen.',
      image: '/proximitystore.png',
      mockup: '/proximitystore.png',
      appStore: 'https://apps.apple.com/fr/app/proximitystore/id1612459998?l=en',
      playStore: 'https://play.google.com/store/apps/details?id=com.proximitystore.app',
    },
    {
      title: 'Swipe Color Game',
      description: 'Challenge your reflexes and color recognition skills with Swipe Color Game. This addictive mobile game tests your speed and accuracy as you swipe in the correct direction based on color cues. Compete against players worldwide and aim for the top 20 global rankings. With its sleek design and increasingly difficult levels, Swipe Color Game offers an engaging experience for casual gamers and competitive players alike.',
      image: '/swipe_color.png',
      mockup: '/swipe_color.png',
      appStore: 'https://apps.apple.com/us/app/swipe-color-game/id1522599744',
      playStore: 'https://play.google.com/store/apps/details?id=com.impactmsg.swipecolorgame',
    },
    {
      title: 'Le Jeu Qui',
      description: 'Elevate your group gatherings with Le Jeu Qui, the ultimate mobile party game. Embark on a hilarious and educational journey as players progress from CP students to "Brevet" graduates. With a perfect blend of trivia, challenges, and interactive tasks, Le Jeu Qui guarantees laughter and learning in equal measure. Ideal for family game nights, friend hangouts, or as an ice-breaker at social events.',
      image: '/le_jeu_qui.png',
      mockup: '/le_jeu_qui.png',
      appStore: 'https://apps.apple.com/us/app/le-jeu-qui/id6448712204',
      playStore: 'https://play.google.com/store/apps/details?id=com.lejeuqui',
    },
  ]

  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const controls = useAnimation()

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 }
    }))
  }, [controls])

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

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 text-gray-800 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-md transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Wassef Hassine</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">About</a></li>
                <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Skills</a></li>
                <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Projects</a></li>
                <li><a href="#resume" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Resume</a></li>
                <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">Contact</a></li>
              </ul>
            </nav>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          <motion.div
            className="h-1 bg-indigo-600 dark:bg-indigo-400"
            style={{ scaleX, transformOrigin: "0%" }}
          />
        </header>

        <main className="pt-20">
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
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
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
              <h2 className="text-5xl md:text-7xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">Flutter Developer</h2>
              <p className="text-xl md:text-2xl mb-8">Crafting beautiful mobile experiences</p>
              <motion.a
                href="#contact"
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
                whileHover={{ scale: 1.05  }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConfetti}
              >
                Get in Touch
              </motion.a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ChevronDown className="w-12 h-12 text-indigo-600 dark:text-indigo-400 animate-bounce" />
            </motion.div>
          </section>

          <section id="about" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div
                  className="md:w-1/3"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-64 h-64">
                    <Image
                      src="/placeholder.svg"
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
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg mb-4">
                    Im a passionate Flutter developer with 5 years of experience in creating beautiful,
                    high-performance mobile applications. My expertise lies in crafting intuitive user
                    interfaces and implementing complex features with clean, maintainable code.
                  </p>
                  <p className="text-lg">
                    When Im not coding, you can find me exploring new technologies, contributing to
                    open-source projects, or sharing my knowledge through tech blogs and community events.
                  </p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill.icon}
                    <span className="mt-2 text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h2 
                className="text-4xl font-bold mb-12 text-center text-indigo-600 dark:text-indigo-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Innovative Projects
              </motion.h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-100 dark:bg-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    custom={index}
                  >
                    <div className="relative h-64 overflow-hidden group">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        layout="fill"
                        objectFit="cover"
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
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex justify-between items-center mt-4">
                        <motion.a
                          href={project.appStore}
                          className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Apple className="w-6 h-6 mr-2" /> App Store
                        </motion.a>
                        <motion.a
                          href={project.playStore}
                          className="inline-flex items-center text-gray-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <PlayCircle className="w-6 h-6 mr-2" /> Play Store
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section id="resume" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-12 text-center">My Resume</h2>
              <InteractiveResume resumeData={resumeData} />
            </div>
          </section>

          <section id="contact" className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
              <p className="text-center text-lg mb-8">
                Im always open to new opportunities and collaborations. Feel free to reach out!
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

        <footer className="bg-white dark:bg-gray-800 py-8 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; {new Date().getFullYear()} Wassef Hassine. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

interface InteractiveResumeProps {
  resumeData: ResumeData;
}

function InteractiveResume({ resumeData }: InteractiveResumeProps) {
  const [activeTab, setActiveTab] = useState('experience')

  const tabs = [
    { id: 'experience', label: 'Expérience', icon: Briefcase },
    { id: 'skills', label: 'Compétences', icon: Code },
    { id: 'education', label: 'Éducation', icon: GraduationCap },
    { id: 'languages', label: 'Langues', icon: Languages },
  ]

  return (
    <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
      <div className="p-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-2">{resumeData.personal.name}</h2>
        <p className="text-xl mb-4">Développeur Flutter</p>
        <div className="flex flex-wrap gap-4">
          <a href={`tel:${resumeData.personal.phone}`} className="flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            {resumeData.personal.phone}
          </a>
          <a href={`mailto:${resumeData.personal.email}`} className="flex items-center">
            <Mail className="w-5 h-5 mr-2" />
            {resumeData.personal.email}
          </a>
          <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </a>
          <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="flex items-center">
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </a>
        </div>
      </div>
      <div className="p-6">
        <div className="flex mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center py-2 px-4 rounded-md transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-gray-600 text-indigo-600 dark:text-indigo-400 shadow-md'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              <tab.icon className="w-5 h-5 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'experience' && (
              <div>
                {resumeData.experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-6 last:mb-0"
                  >
                    <h3 className="text-xl font-semibold">{job.company}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{job.position}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{job.period}</p>
                    <p className="text-gray-700 dark:text-gray-200">{job.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === 'skills' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {resumeData.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            )}
            {activeTab === 'education' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold">{resumeData.education.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{resumeData.education.major}</p>
              </motion.div>
            )}
            {activeTab === 'languages' && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {resumeData.languages.map((language, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 text-center"
                  >
                    {language}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}