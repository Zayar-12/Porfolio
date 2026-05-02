import React from 'react'
import profileImg from '../assets/profile.jpg' // Import it like a module

const Profile = () => {
  return (
    <div className="flex justify-center items-center py-10">
        <div className="relative group">
            {/* Decorative background ring */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <img 
                src={profileImg} 
                alt="Profile" 
                className='relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-xl' 
            />
        </div>
    </div>
  )
}

export default Profile