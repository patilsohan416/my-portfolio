const skills = [
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React.js', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚂' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Git & GitHub', icon: '🔧' },
  { name: 'Tailwind CSS', icon: '🎨' },
  { name: 'TypeScript', icon: '📘' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Figma', icon: '🖌️' },
]

function Skills() {
  return (
    <section id="skills" className="relative min-h-screen bg-[#ff6b6b] text-white px-6 md:px-16 pt-32 pb-24 text-center overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-white opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-white opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>

      <p className="text-white/80 font-semibold tracking-widest mb-2">MY SKILLS</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-14">Technologies I Work With</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(255,107,107,0.4)] group"
          >
            <span className="text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
            <p className="font-semibold text-gray-800 group-hover:text-[#ff6b6b] transition-colors duration-300">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Skills
