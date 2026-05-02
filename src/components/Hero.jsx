import React from 'react'
import Profile from './Profile' // Make sure this component just returns the styled <img>
import { FiDownload } from 'react-icons/fi'; // (Required: npm install react-icons)
import { FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    // 1. Ensure the parent container is a column that centers items.
    <section id='home' className='min-h-screen flex flex-col items-center justify-center gap-6 px-6 pt-24 text-center'>
        
        {/* 2. The profile photo (now properly styled by Profile.jsx) goes first. */}
        <Profile />

        {/* 3. The main headline. Updated with the proper name. */}
        <h1 className='text-5xl md:text-6xl font-bold text-gray-950 leading-tight mt-6'>
            Hi, I'm Zay Yar Lin Tun
        </h1>
        
        {/* 4. The subtitle paragraph. Changed max-width and color to match the screenshot. */}
        <p className='text-xl text-gray-600 max-w-2xl font-light leading-relaxed mb-8'>
Transforming complex problems into elegant digital solutions. Specialized in building high-performance web applications with a focus on impact.        </p>

        {/* 5. Button Group. flex-col on mobile, flex-row on desktop for responsiveness. */}
        <div className='flex flex-col sm:flex-row gap-4'>
            
            {/* Primary 'Formal' Button */}
            <a 
                href="/CV.pdf" 
                download
                className='inline-flex items-center gap-2.5 px-7 py-3 bg-gray-950 text-white rounded-full text-base font-semibold hover:bg-gray-800 transition-colors shadow-lg'
            >
                <FiDownload className="text-lg" />
                Download Resume
            </a>
            
            {/* Secondary 'Formal' Button */}
            <a 
                href="#contact"
                className='inline-flex items-center gap-2.5 px-7 py-3 bg-white text-gray-950 rounded-full text-base font-semibold border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm'
            >
                <FiMail className="text-lg" />
                Contact Me
            </a>
        </div>
        
    </section>
  )
}

export default Hero