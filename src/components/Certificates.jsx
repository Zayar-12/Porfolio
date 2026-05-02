import React from 'react'
import { FiMaximize2 } from 'react-icons/fi'
import kbzCerti from '../assets/kbzcerti.jpg'

const Certificates = () => {
  const certifications = [
    {
      title: "KBZPay Mini Apps Developers Bootcamp with Hackathon",
      issuer: "KBZPay",
      date: "2025-04-01",
      id: "KBZPAY-MINIAPP-HACKATHON-2025",
      image: kbzCerti,
      tags: ["AppCube (Huawei)", "Mini App Development", "Low-Code Platform", "UI Builder"],
    }
  ];

  return (
    <section id="certificates" className="py-20 px-6 md:px-20 bg-gray-50/30 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-5xl font-bold mb-6">Certifications</h2>
        <p className="text-gray-500 text-lg">
          Professional certifications that validate my expertise and commitment to continuous learning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all"
          >
            {/* Clickable Image - Opens in same tab for "Back Button" flow */}
            <a 
              href={cert.image} 
              className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 rounded-2xl overflow-hidden border border-gray-100 bg-gray-50 cursor-pointer group relative"
            >
                <img src={cert.image} alt={cert.issuer} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                   <FiMaximize2 className="text-white" />
                </div>
            </a>

            <div className="flex-grow">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-gray-900 uppercase leading-tight">{cert.title}</h3>
                
                {/* Direct link to image file */}
                <a 
                  href={cert.image} 
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <FiMaximize2 size={18} />
                </a>
              </div>
              
              <p className="text-gray-500 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-400 text-xs mb-3">Issued: {cert.date}</p>

              <div className="inline-block bg-gray-100 px-3 py-1 rounded-md mb-4">
                <code className="text-[10px] text-gray-500 font-mono">ID: {cert.id}</code>
              </div>

              <div className="flex flex-wrap gap-2">
                {cert.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-50 border border-gray-100 rounded-lg text-[10px] font-semibold text-gray-600">
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

export default Certificates;