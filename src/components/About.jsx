import React from 'react'

const About = () => {
  const skills = [
    "React", "Next.js","Laravel" ,"TypeScript", "PHP", "JavaScript",
    "Tailwind CSS","HTML5", "CSS3","GSAP",
     "Python","Java" ,"REST APIs", "MongoDB",
    "PostgreSQL", "MySQL", "Drizzle ORM","Auth.js","Zod","Resend"
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white">
      {/* Header Section */}
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
         Final-year Computer Science student and Full-Stack Developer specializing in the React ecosystem. Currently pivoting toward Data Engineering with a focus on Python and diverse database technologies (PostgreSQL, MySQL, and MongoDB). I build applications with the future of data in mind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {/* Left Side: Journey */}
        <div>
          <h3 className="text-2xl font-bold mb-6">My Journey</h3>
          <div className="text-gray-600 space-y-4 leading-relaxed">
            <p>
             I began my academic career as a Computer Science student with a drive to understand the architecture of the digital world. While mastering the fundamentals in the classroom, I dedicated myself to becoming proficient in React, PHP, and MySQL, building a solid foundation in functional web development. Currently, I am expanding my technical stack into the Next.js ecosystem, focusing on creating high-performance applications that bridge the gap between classic back-end logic and modern front-end efficiency.
            </p>
            <p>
             Beyond the interface, my true passion lies in the flow and integrity of information. I am currently deep-diving into Data Engineering, mastering the complexities of MongoDB, Python, and the strategic roadmaps required to manage large-scale data systems. My goal is to evolve into a versatile engineer who can not only build beautiful user experiences but also design the robust data infrastructures that power them.
            </p>
          </div>

          <h4 className="font-bold mt-10 mb-4">Experience Highlights</h4>
          <div className="flex gap-4">
            <div className="flex-1 p-6 border border-gray-100 rounded-2xl shadow-sm text-center">
              <span className="block text-2xl font-bold">4</span>
              <span className="text-xs text-gray-500 uppercase"> 4 Years of Learning & Building</span>
            </div>
           
          </div>
        </div>

        {/* Right Side: Skills & Proficiency */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {skills.map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
                {skill}
              </span>
            ))}
          </div>

          <h4 className="font-bold mb-6 text-gray-700 uppercase text-sm tracking-widest">Proficiency Levels</h4>
          <div className="space-y-6">
            <SkillBar label="PHP" percent="85%" />
            <SkillBar label="TypeScript/JavaScript" percent="80%" />
            <SkillBar label="Java" percent="50%" />
            <SkillBar label="Database Design" percent="75%" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Sub-component for progress bars
const SkillBar = ({ label, percent }) => (
  <div className="w-full">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-gray-700">{label}</span>
      <span className="text-sm font-medium text-gray-500">{percent}</span>
    </div>
    <div className="w-full bg-gray-100 rounded-full h-2">
      <div className="bg-black h-2 rounded-full" style={{ width: percent }}></div>
    </div>
  </div>
)

export default About