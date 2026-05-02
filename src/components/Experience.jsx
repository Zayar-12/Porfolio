import React from 'react'
import { FiExternalLink, FiMapPin, FiCalendar } from 'react-icons/fi'
import kbzgroupImg from "../assets/kbzgroup.jpg"
import scienceImg from '../assets/sciencefestival.jpg'

const Experience = () => {
  const experiences = [
    {
      id: "science-festival-2025",
      title: "Science Festival Myanmar 2025",
      organization: "Computer University, Taunggyi (CU-Taunggyi) @ NSPU",
      status: "Selected Representative — Project Showcase",
      date: "2025",
      location: "Naypyitaw State Polytechnic University, Nay Pyi Taw",
      description: "Selected to represent Computer University, Taunggyi at the National Science Festival. Developed and showcased an automated Phishing Detection & Alert System built on the n8n automation platform. The system analyzes incoming emails for malicious links in real-time, triggering instant security alerts via Gmail and a custom-built Telegram Bot. The project also features an interactive Telegram AI assistant capable of answering complex cybersecurity queries.",
      tags: ["n8n", "Automation", "Cybersecurity", "Phishing Detection", "Telegram Bot API", "API Integration", "Workflow Engineering"],
      image: scienceImg,
      borderColor: "border-emerald-400",
      badgeColor: "bg-emerald-500",
      type: "Project Show"
    },
    {
      id: "kbzpay",
      title: "KBZPay Mini App Developers Bootcamp & Hackathon",
      organization: "KBZPay - AppCube (Powered by Huawei Technology)",
      status: "Participant — Developers Bootcamp with Hackathon",
      date: "2025",
      location: "Myanmar (Online)",
      description: "Participated in the KBZPay Mini Apps Developers Bootcamp & Hackathon — building functional mini apps with AppCube, a low-code platform powered by Huawei technology. Completed both Basic and Advanced levels, covering everything from UI Builder and Data Modeling to Custom Business Logic and KBZPay Payment Integration.",
      tags: ["AppCube", "Huawei", "KBZPay", "Mini App", "Low-Code", "Payment Integration", "Hackathon", "UI Builder"],
      image: kbzgroupImg,
      borderColor: "border-orange-400",
      badgeColor: "bg-orange-500",
      type: "Hackathon"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 md:px-20 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            className={`flex flex-col md:flex-row bg-white border-2 ${exp.borderColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
          >
            {/* Left side: Image */}
            <div className="md:w-5/12 relative">
              <img src={exp.image} alt={exp.title} className="w-full h-full object-cover min-h-[250px]" />
              <span className={`absolute top-4 left-4 ${exp.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 opacity-90`}>
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                {exp.type}
              </span>
            </div>

            {/* Right side: Content */}
            <div className="md:w-7/12 p-8 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">{exp.title}</h3>
                <a href="#" className="text-gray-400 hover:text-black transition-colors">
                  <FiExternalLink size={20} />
                </a>
              </div>

              <p className="text-gray-600 font-medium">{exp.organization}</p>
              <p className={`text-sm font-bold mb-4 ${exp.id === 'kbzpay' ? 'text-orange-600' : 'text-emerald-600'}`}>
                {exp.status}
              </p>

              <div className="flex flex-wrap gap-4 text-gray-400 text-xs mb-6">
                <span className="flex items-center gap-1"><FiCalendar /> {exp.date}</span>
                <span className="flex items-center gap-1"><FiMapPin /> {exp.location}</span>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Tags visible by default */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 border border-gray-200 rounded-full text-[11px] font-semibold text-gray-600 bg-gray-50/50">
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

export default Experience