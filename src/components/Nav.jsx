import React from 'react'

const Nav = () => {
  return (
    <header className='fixed top-0 left-0 w-full flex items-center justify-center p-6 z-50'>
      <nav className='w-full max-w-2xl flex items-center justify-around gap-8 px-8 py-3 
                      bg-white/70 backdrop-blur-md border border-white/20 
                      shadow-lg rounded-full transition-all duration-300 hover:shadow-xl'>
        
        {['Home', 'About', 'Projects','Experience','Certificates', 'Contact'].map((item) => (
          <a 
            key={item}
            // CHANGE: Link to #id instead of /path
            href={`#${item.toLowerCase()}`} 
            className="relative text-sm font-medium text-slate-700 transition-colors 
                       duration-300 hover:text-black group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black 
                             transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
        
      </nav>
    </header>
  )
}

export default Nav