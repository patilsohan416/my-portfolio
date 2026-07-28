const fs = require('fs');
const content = `import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Full Stack',
    description: 'A full-featured online store with cart, payments, and admin dashboard built with MERN stack.',
    image: 'https://picsum.photos/seed/ecommerce/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'AI Chat Assistant',
    category: 'AI/ML',
    description: 'Real-time chatbot powered by GPT API with context awareness and multi-language support.',
    image: 'https://picsum.photos/seed/chatbot/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    category: 'Web App',
    description: 'Collaborative project management tool with Kanban boards, deadlines, and team analytics.',
    image: 'https://picsum.photos/seed/taskapp/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Fitness Tracker',
    category: 'Mobile',
    description: 'Cross-platform mobile app for workout tracking, nutrition logging, and progress visualization.',
    image: 'https://picsum.photos/seed/fitness/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Real Estate Portal',
    category: 'Full Stack',
    description: 'Property listing platform with virtual tours, mortgage calculator, and agent matching.',
    image: 'https://picsum.photos/seed/realestate/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    category: 'Web App',
    description: 'Drag-and-drop portfolio builder with customizable templates and one-click deployment.',
    image: 'https://picsum.photos/seed/portfolio/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 7,
    title: 'Weather Dashboard',
    category: 'Web App',
    description: 'Real-time weather forecasting app with interactive maps, alerts, and historical data.',
    image: 'https://picsum.photos/seed/weather/600/400',
    link: '#',
    github: '#',
  },
  {
    id: 8,
    title: 'Food Delivery App',
    category: 'Mobile',
    description: 'On-demand food delivery platform with real-time tracking, reviews, and smart recommendations.',
    image: 'https://picsum.photos/seed/food/600/400',
    link: '#',
    github: '#',
  },
]

function Projects() {
  const [filter, setFilter] = useState('All')
  const categories = ['All', ...new Set(projects.map((p) => p.category))]
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-16 pt-32 pb-24 text-center">
      <p className="text-red-500 font-semibold tracking-widest mb-2">MY WORK</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-10">Projects</h1>

      <div className="flex flex-wrap justify-center gap-4 mb-14">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={\`px-5 py-2 rounded-full border transition-all duration-300 backdrop-blur-md \${filter === cat ? 'bg-red-500/20 border-red-400 text-red-300' : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'}\`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 text-left hover:shadow-[0_10px_40px_rgba(255,42,42,0.15)]"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-red-400 text-sm mb-3">{project.category}</p>
              <p className="text-gray-400 text-sm mb-5">{project.description}</p>
              <div className="flex gap-4">
                <a href={project.link} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold hover:bg-white/20 transition-all duration-300">
                  GitHub
                </a>
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects`;

fs.writeFileSync('c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/pages/Projects.jsx', content);
console.log('Written successfully. Length:', content.length);
