'use client'

import { useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { FaGithub, FaTwitter, FaLinkedin, FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt, FaEnvelope, FaHtml5, FaCss3 } from 'react-icons/fa'
import { SiLeetcode,  SiNextdotjs, SiNodered, SiUikit, SiRos, SiExpress } from 'react-icons/si'
import Image from 'next/image'

const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 via-transparent to-purple-900/10" />
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-violet-500/20 rounded-full"
          animate={{
            y: ['0vh', '100vh'],
            x: Math.random() * 100 + 'vw',
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          initial={{ x: Math.random() * 100 + 'vw' }}
        />
      ))}
    </div>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const skills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'ExpressJS', icon: <SiExpress /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'NodeRED', icon: <SiNodered /> },
    { name: 'UIpath', icon: <SiUikit/> },
    { name: 'ROS', icon: <SiRos /> },

  ]

  const projects = [
    {
      id: 1,
        "title": "OnlyFIT - Fitness Tracker",
        "description": "A MERN stack web application that tracks user health activities such as workouts and steps, providing personalized exercise and diet recommendations using machine learning for improved fitness outcomes.",
        "longDescription": "Developed using the MERN stack, OnlyFIT is a fitness tracker designed to monitor and log user activities, including workouts and daily step counts. The application leverages machine learning algorithms to offer tailored fitness and dietary suggestions, aiming to optimize user health and wellness. Features include real-time tracking, custom recommendations, and comprehensive analytics.",
        "tech": ["MongoDB", "Express.js", "React", "Node.js", "Machine Learning"],
      image: './Capte.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/SpaceCadet2308/Fitness_tracker',
      featured: true
    },
    {
      id: 2,
        "title": "Facial Expression Detection",
        "description": "An application leveraging DeepFace to recognize real-time facial expressions, identifying emotions like happiness, anger, and sadness for applications in mental health and user engagement.",
        "longDescription": "Built using DeepFace, this facial expression detection application is designed to recognize and interpret real-time emotions, including happiness, anger, and sadness. The tool is tailored for potential applications in mental health monitoring and enhancing user interaction through emotional awareness. This project integrates computer vision and machine learning to deliver precise emotion recognition, aiming to support both individual well-being and responsive interaction systems.",
        "tech": ["DeepFace", "Computer Vision", "Python", "Machine Learning"],
      image: '/Capte.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
      featured: true
    },
    {
      id: 3,
        "title": "Password Vault",
        "description": "A Python desktop application for secure password management, using AES encryption to safeguard user credentials and an integrated random password generator for enhanced security.",
        "longDescription": "Password Vault is a Python-based desktop application designed to securely manage user passwords. It employs AES encryption to protect sensitive data, ensuring only authorized access to stored credentials. The app also features a random password generator, helping users create strong and secure passwords. This project prioritizes data security and ease of use, providing a reliable solution for personal and professional password management.",
        "tech": ["Python", "AES Encryption", "Desktop Application", "Security"],
      image: '/Capte.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/SpaceCadet2308/Password-vault',
      featured: true
    },
  {
    id: 4,
      "title": "PPE Detection (Personal Protection Equipment)",
      "description": "A real-time PPE detection system using YOLOv8 to identify safety equipment like helmets and masks, with integrated Telegram alerts for instant non-compliance notifications to promote workplace safety.",
      "longDescription": "Developed with YOLOv8, this real-time detection system monitors personal protection equipment (PPE) compliance by identifying gear such as helmets and masks. It is designed for workplace safety, providing instant Telegram alerts to notify users of any detected non-compliance. The system offers a practical solution to enhance safety measures in industrial environments, ensuring personnel adhere to safety regulations effectively.",
      "tech": ["YOLOv8", "Computer Vision", "Python", "Telegram API", "Real-time Detection"],
      image: '/Capte.jpg',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com',
      featured: true
    }
  ]

  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com/SpaceCadet2308' },
    { icon: <FaLinkedin className="w-6 h-6" />, url: 'https://www.linkedin.com/in/aryan-2312d08/' },
    { icon: <FaTwitter className="w-6 h-6" />, url: 'https://x.com/Aryan02025651' },
    { icon: <SiLeetcode className="w-6 h-6" />, url: 'https://leetcode.com/u/Aryan2308/' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-violet-600 transform origin-left z-50"
        style={{ scaleX }}
      />
      <ParticleBackground />
      
      <nav className="fixed w-full bg-black/80 backdrop-blur-md z-40 border-b border-violet-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text"
            >
              Aryan-folio
            </motion.div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="px-3 py-2 text-sm hover:text-violet-400 transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.a>
                ))}
                  <motion.a
                      href="/resume.pdf"
                      download
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-full text-sm font-medium transition-colors duration-200"
                    >
                    Resume
                  </motion.a>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-violet-900/20"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden bg-black/80 backdrop-blur-md"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['Home', 'Projects', 'Skills', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 text-base hover:text-violet-400 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              className="block w-full mt-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 rounded-full text-sm font-medium text-center transition-colors duration-200"
            >
              Resume
            </a>
          </div>
        </motion.div>
      </nav>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex-1 text-center md:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Software Developer & <br />
                    <span className="bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text">
                      Active learner
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
                  Building practical solutions to tough problems through innovative technologies and approaches.
                  </p>
                </motion.div>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.1, color: '#8B5CF6' }}
                      className="text-gray-400 hover:text-violet-400 transition-colors duration-200"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-72 h-72 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-600 to-purple-600 blur-3xl opacity-20 animate-pulse" />
                <div className="relative w-full h-full">
                  <Image
                    src="./profilepic.jpg"
                    alt="Profile"
                    fill
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-violet-400 text-sm font-semibold tracking-wide uppercase mb-3"
              >
                Working on thse things
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-gray-400 max-w-2xl mx-auto"
              >
                Explore my latest projects.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-violet-900/20"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-violet-900/20 rounded-full text-violet-400 text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <motion.a
                        
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.a>
                    </div>
                  </div>
                  <motion.div
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.featured && (
                      <span className="px-3 py-1 bg-violet-600 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Technical Skills
            </motion.h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 p-4 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-violet-900/20"
                >
                  <span className="text-2xl text-violet-400">{skill.icon}</span>
                  <span className="font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 relative">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12"
            >
              Get in Touch
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-violet-900/20"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black/50 rounded-lg border border-violet-900/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black/50 rounded-lg border border-violet-900/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-black/50 rounded-lg border border-violet-900/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors duration-200"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors duration-200"
                >
                  Send Message
                </motion.button>
              </form>
              <div className="mt-8 flex justify-center">
                <a
                  href="mailto:aryan.r1710@gmail.com"
                  className="flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors duration-200"
                >
                  <FaEnvelope />
                  <span>aryan.r1710@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

    </div>
  )
}