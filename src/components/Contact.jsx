import React from 'react'
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-white scroll-mt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Let's Work Together
        </h2>
        
        {/* Subtext */}
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and discuss how we can bring your ideas to life.
        </p>

        {/* Button Group */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          {/* Email Me Button (Primary) */}
          <a 
            href="mailto:zayarlintun04@gmail.com" 
            className="flex items-center gap-2 px-8 py-3 bg-gray-950 text-white rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
          >
            <FiMail />
            Email Me
          </a>

          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/zayar-lin-tun-779857384/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm"
          >
            <FiLinkedin />
            LinkedIn
          </a>

          {/* GitHub Button */}
          <a 
            href="https://github.com/Zayar-12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-sm"
          >
            <FiGithub />
            GitHub
          </a>
        </div>

        {/* Footer Copyright */}
        <footer className="border-t border-gray-100 pt-12">
          <p className="text-gray-400 text-sm tracking-wide">
            © {new Date().getFullYear()} Khun Thi Han. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  )
}

export default Contact