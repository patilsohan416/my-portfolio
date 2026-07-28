import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Library Management System',
    category: 'Full Stack',
    coords: '41.8781° N, 87.6298° W',
    description: 'A complete library management system with book catalogs, member management, issue/return tracking, and fine calculation using SQL database.',
    image: 'https://picsum.photos/seed/library/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    category: 'HTML',
    coords: '40.7128° N, 74.0060° W',
    description: 'A responsive personal portfolio website built with pure HTML, CSS, and JavaScript featuring smooth animations and a modern clean design.',
    image: 'https://picsum.photos/seed/portfolio-site/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'E-Commerce Landing Page',
    category: 'HTML',
    coords: '34.0522° N, 118.2437° W',
    description: 'A fully responsive e-commerce landing page with product grid, shopping cart UI, and interactive elements built using HTML, CSS & JavaScript.',
    image: 'https://picsum.photos/seed/landing/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Employee Database System',
    category: 'SQL',
    coords: '37.7749° N, 122.4194° W',
    description: 'A relational database project for employee management with departments, salaries, attendance tracking, and advanced SQL queries with joins and views.',
    image: 'https://picsum.photos/seed/database/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Real-Time Chat App',
    category: 'Full Stack',
    coords: '51.5074° N, 0.1278° W',
    description: 'A real-time messaging application with WebSocket support, user authentication, and message history using Socket.io and MongoDB.',
    image: 'https://picsum.photos/seed/chatapp/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Weather Dashboard',
    category: 'HTML',
    coords: '48.8566° N, 2.3522° E',
    description: 'An interactive weather dashboard with live API data, 7-day forecasts, and dynamic UI components built with vanilla JavaScript.',
    image: 'https://picsum.photos/seed/weather/600/400',
    link: '#',
    github: '#',
  },
]

const ProjectPin = ({ project, index, filter }) => {
  const pinRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      ref={pinRef}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Pin marker */}
      <div className="flex flex-col items-center cursor-pointer group">
        {/* Pin head */}
        <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 ${isHovered ? 'bg-[#ff6b6b] scale-125' : 'bg-white'}`}>
          <svg className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#ff6b6b]'}`} fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        {/* Pin needle */}
        <div className={`w-0.5 h-6 transition-colors duration-300 ${isHovered ? 'bg-[#ff6b6b]' : 'bg-gray-400'}`}></div>
        {/* Pin base circle */}
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? 'bg-[#ff6b6b] scale-125' : 'bg-gray-300'}`}></div>
      </div>

      {/* Hover card - appears above pin */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -10 : 0,
          scale: isHovered ? 1 : 0.9,
          pointerEvents: isHovered ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 z-50"
      >
        <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#ff6b6b] shadow-[0_10px_40px_rgba(255,107,107,0.3)]">
          <div className="relative h-32 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className="absolute bottom-2 left-3 px-2 py-0.5 bg-[#ff6b6b] text-white text-[10px] font-bold rounded-full">
              {project.category}
            </span>
          </div>
          <div className="p-4">
            <h3 className="text-base font-bold text-gray-800 mb-1">{project.title}</h3>
            <p className="text-[10px] font-mono text-gray-400 mb-2">📍 {project.coords}</p>
            <p className="text-xs text-gray-500 mb-3 leading-relaxed line-clamp-2">{project.description}</p>
            <div className="flex gap-2">
              <a href={project.link} target="_blank" rel="noreferrer" className="flex-1 text-center px-3 py-1.5 rounded-full bg-[#ff6b6b] text-[11px] font-semibold text-white hover:bg-white hover:text-[#ff6b6b] border border-[#ff6b6b] transition-all duration-300">
                Live Demo
              </a>
              <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 text-center px-3 py-1.5 rounded-full bg-gray-100 border border-gray-300 text-[11px] font-semibold text-gray-700 hover:bg-[#ff6b6b] hover:text-white hover:border-[#ff6b6b] transition-all duration-300">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const [filter, setFilter] = useState('All')
  const sectionRef = useRef(null)
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const mapY = useTransform(scrollYProgress, [0, 1], ['0%', '5%'])

  return (
    <section id="projects" ref={sectionRef} className="relative min-h-screen bg-[#0f1923] text-white px-6 md:px-16 pt-32 pb-24 overflow-hidden">
      {/* Map Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.08]">
        {/* Grid lines */}
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <pattern id="map-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#ff6b6b" strokeWidth="0.5" />
            </pattern>
            <pattern id="map-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1.5" fill="#ff6b6b" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="1200" height="800" fill="url(#map-grid)" />
          <rect width="1200" height="800" fill="url(#map-dots)" />
        </svg>
        {/* Topographic contour lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
          <path d="M-100,400 Q200,200 400,350 T700,300 T1000,450 T1300,350" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.3" />
          <path d="M-100,450 Q200,250 400,400 T700,350 T1000,500 T1300,400" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.25" />
          <path d="M-100,500 Q200,300 400,450 T700,400 T1000,550 T1300,450" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.2" />
          <path d="M-100,550 Q200,350 400,500 T700,450 T1000,600 T1300,500" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.15" />
          <path d="M-100,600 Q200,400 400,550 T700,500 T1000,650 T1300,550" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.1" />
          {/* Horizontal contours */}
          <path d="M200,-100 Q300,200 250,400 T350,700 T250,900" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.2" />
          <path d="M600,-100 Q700,200 650,400 T750,700 T650,900" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.2" />
          <path d="M1000,-100 Q1100,200 1050,400 T1150,700 T1050,900" fill="none" stroke="#ff6b6b" strokeWidth="0.8" opacity="0.2" />
        </svg>
      </div>

      {/* Compass Rose Decoration */}
      <motion.div
        style={{ y: mapY }}
        className="absolute top-32 right-6 md:right-16 z-10 opacity-20"
      >
        <svg className="w-20 h-20 md:w-28 md:h-28" viewBox="0 0 100 100" fill="none" stroke="#ff6b6b" strokeWidth="1.5">
          {/* Compass circle */}
          <circle cx="50" cy="50" r="45" strokeWidth="1" />
          <circle cx="50" cy="50" r="40" strokeWidth="0.5" />
          {/* North pointer */}
          <polygon points="50,5 45,25 50,20 55,25" fill="#ff6b6b" stroke="none" />
          <text x="50" y="8" textAnchor="middle" fontSize="8" fill="#ff6b6b" fontWeight="bold">N</text>
          {/* South pointer */}
          <polygon points="50,95 45,75 50,80 55,75" fill="rgba(255,107,107,0.3)" stroke="none" />
          <text x="50" y="98" textAnchor="middle" fontSize="8" fill="rgba(255,107,107,0.5)">S</text>
          {/* East/West */}
          <text x="97" y="53" textAnchor="middle" fontSize="7" fill="rgba(255,107,107,0.5)">E</text>
          <text x="3" y="53" textAnchor="middle" fontSize="7" fill="rgba(255,107,107,0.5)">W</text>
          {/* Center dot */}
          <circle cx="50" cy="50" r="3" fill="#ff6b6b" />
          {/* Degree ticks */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1={50 + 42 * Math.cos((i * 30 * Math.PI) / 180)}
              y1={50 + 42 * Math.sin((i * 30 * Math.PI) / 180)}
              x2={50 + 36 * Math.cos((i * 30 * Math.PI) / 180)}
              y2={50 + 36 * Math.sin((i * 30 * Math.PI) / 180)}
              stroke="#ff6b6b"
              strokeWidth="0.5"
            />
          ))}
        </svg>
      </motion.div>

      {/* Header */}
      <div className="relative z-10 mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#ff6b6b] animate-pulse"></span>
          <p className="text-[#ff6b6b] font-semibold tracking-[0.3em] text-sm uppercase">DISCOVER MY WORK</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">
          Project <span className="text-[#ff6b6b]">Map</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base max-w-lg font-medium">
          Explore my projects pinned across the development world. Hover on markers to see details.
        </p>
      </div>

      {/* Filter Buttons - Map Legend Style */}
      <div className="relative z-10 flex flex-wrap items-center gap-3 mb-16 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 max-w-max">
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mr-2">Legend:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
              filter === cat
                ? 'bg-[#ff6b6b] text-white shadow-lg shadow-red-500/30 border border-[#ff6b6b]'
                : 'bg-transparent text-gray-400 border border-gray-600 hover:border-[#ff6b6b] hover:text-[#ff6b6b]'
            }`}
          >
            {cat === 'All' ? '📍 All Projects' : `📍 ${cat}`}
          </button>
        ))}
      </div>

      {/* Map Area - Pinboard Grid */}
      <div className="relative z-10">
        {/* Connection lines between pins */}
        <svg
          className="absolute inset-0 z-0 h-full w-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="4"
              refX="6"
              refY="2"
              orient="auto"
            >
              <polygon
                points="0 0, 6 2, 0 4"
                fill="#ff6b6b"
                opacity="0.3"
              />
            </marker>
          </defs>

          {filtered.map((_, i) => {
            if (i >= filtered.length - 1) return null;

            const row1 = Math.floor(i / 3);
            const col1 = i % 3;

            const row2 = Math.floor((i + 1) / 3);
            const col2 = (i + 1) % 3;

            const startX = col1 * 400 + 200;
            const startY = row1 * 300 + 150;

            const endX = col2 * 400 + 200;
            const endY = row2 * 300 + 150;

            const controlX = (startX + endX) / 2;
            const controlY = (startY + endY) / 2;

            return (
              <motion.path
                key={`line-${i}`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
                d={`M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`}
                fill="none"
                stroke="#ff6b6b"
                strokeWidth="2"
                strokeDasharray="6 4"
                opacity="0.3"
                markerEnd="url(#arrowhead)"
              />
            );
          })}
        </svg>

        {/* Pin Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-16 md:gap-y-20 relative z-10">
          {filtered.map((project, i) => (
            <div key={project.id} className="flex flex-col items-center">
              {/* The pin marker */}
              <ProjectPin project={project} index={i} filter={filter} />

              {/* Project info label below pin */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
                className="mt-4 text-center"
              >
                <p className="text-[10px] font-mono text-gray-500 mb-1">📍 {project.coords}</p>
                <h3 className="text-sm font-bold text-white hover:text-[#ff6b6b] transition-colors duration-300 cursor-pointer">
                  {project.title}
                </h3>
                <span className="inline-block mt-1 px-2 py-0.5 bg-[#ff6b6b]/10 border border-[#ff6b6b]/30 text-[10px] font-bold text-[#ff6b6b] rounded-full">
                  {project.category}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom decorative map elements */}
      <div className="absolute bottom-8 left-6 md:left-16 z-10 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff6b6b]"></span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Pinned</span>
        </div>
        <div className="w-px h-4 bg-gray-700"></div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-0.5 bg-[#ff6b6b] opacity-30" style={{ borderTop: '1px dashed rgba(255,107,107,0.3)' }}></span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Route</span>
        </div>
        <div className="w-px h-4 bg-gray-700"></div>
        <span className="text-[10px] font-mono text-gray-600">{filtered.length} markers</span>
      </div>

      {/* Torn paper divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0f1923]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Projects