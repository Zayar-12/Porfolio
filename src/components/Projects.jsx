import React from 'react'
import { FiGithub } from 'react-icons/fi' // Import the GitHub icon
import profileImg from '../assets/onlinceclothingstore.png'
import JobPortal from '../assets/jobportal.png'
import chatapp from '../assets/chatapp.png'
import votingSystem from '../assets/votingSystem.png'

const Projects = () => {
  const projectList = [
    //  {
    //   title: "Job Portal",
    //   description: "JobPortal is a robust, high-performance web platform designed to streamline the recruitment process. Developed over a span of ~2 months, it features a decoupled RESTful API architecture ensuring clean separation of concerns, high scalability, and a responsive Single Page Application (SPA) user experience. ",
    //   image: JobPortal,
    //   tags: ["Laravel", "Tailwind CSS", "React", "MySQL"],
    //   github: "https://github.com/Zayar-12/JobPortal" // Placeholder link
    // },
    //  {
    //   title: "Online Clothing Store",
    //   description: "Developed during my third year of Computer Science, this full-stack e-commerce platform features a dynamic shopping experience built with PHP, MySQL, and jQuery. The application allows users to browse and search for clothing with real-time updates for size, color, and quantity-based pricing, supported by a multi-tier cart system and integrated Myanmar payment gateways including KBZPay, AYAPay, and WavePay. Designed with a robust three-tier authentication architecture, the system empowers Superadmins to manage roles, while Admins oversee inventory through automated low-stock notifications and verify pending orders to maintain seamless business operations.",
    //   image: profileImg,
    //   tags: ["PHP", "Tailwind CSS", "JQuery", "MySQL"],
    //   github: "https://github.com/Zayar-12/Online-Clothing-Store" // Placeholder link
    // },
    //  {
    //   title: "Chat App",
    //   description: "Developed during my third year of Computer Science, this full-stack e-commerce platform features a dynamic shopping experience built with PHP, MySQL, and jQuery. The application allows users to browse and search for clothing with real-time updates for size, color, and quantity-based pricing, supported by a multi-tier cart system and integrated Myanmar payment gateways including KBZPay, AYAPay, and WavePay. Designed with a robust three-tier authentication architecture, the system empowers Superadmins to manage roles, while Admins oversee inventory through automated low-stock notifications and verify pending orders to maintain seamless business operations.",
    //   image: chatapp,
    //   tags: ["Laravel", "Tailwind CSS", "Livewire", "MySQL"],
    //   github: "https://github.com/Zayar-12/chat-app" // Placeholder link
    // },

    {
      title: "Job Portal",
      description: "A robust, high-performance recruitment platform featuring a decoupled RESTful API architecture, advanced search and filtering, and dedicated portals for job seekers, employers, and administrators.",
      image: JobPortal,
      tags: ["Laravel", "Tailwind CSS", "React", "MySQL"],
      github: "https://github.com/Zayar-12/JobPortal"
    },
    {
      title: "Online Clothing Store",
      description: "A full-stack e-commerce clothing platform featuring real-time dynamic pricing, a multi-tier cart system, and local Myanmar payment gateway integrations (KBZPay, AYAPay, WavePay), managed through a robust three-tier administrative role architecture.",
      image: profileImg,
      tags: ["PHP", "Tailwind CSS", "JQuery", "MySQL"],
      github: "https://github.com/Zayar-12/Online-Clothing-Store"
    },
    {
      title: "Chat App",
      description: "A modern, real-time messaging web application built with Laravel Livewire and Tailwind CSS, featuring instant message delivery powered by reactive states, live user search, and secure Google OAuth authentication.",
      image: chatapp,
      tags: ["Laravel", "Tailwind CSS", "Livewire", "MySQL"],
      github: "https://github.com/Zayar-12/chat-app"
    }
   
  
   
   
   
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white scroll-mt-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-6">Featured Projects</h2>
        <p className="text-gray-500 text-lg">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projectList.map((project, index) => (
          <div 
            key={index} 
            className="group flex flex-col bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden h-56 bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* GitHub Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full text-black hover:scale-110 transition-transform"
                >
                  <FiGithub size={24} />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <FiGithub size={20} />
                </a>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-semibold text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects