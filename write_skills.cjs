const fs = require('fs');
const content = `const skills = [
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
    <section className="min-h-screen bg-black text-white px-6 md:px-16 pt-32 pb-24 text-center">
      <p className="text-red-500 font-semibold tracking-widest mb-2">MY SKILLS</p>
      <h1 className="text-4xl md:text-5xl font-bold mb-14">Technologies I Work With</h1>

      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,42,42,0.3)]"
          >
            <span className="text-4xl block mb-3">{skill.icon}</span>
            <p className="font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills`;

fs.writeFileSync('c:/Users/Lenovo/Desktop/project/video_portfolio-main/video_portfolio-main/src/pages/Skills.jsx', content);
console.log('Written successfully. Length:', content.length);
