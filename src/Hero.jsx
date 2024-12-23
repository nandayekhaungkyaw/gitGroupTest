import React, { useState, useCallback } from 'react'
import { ShoppingCart, Search } from 'lucide-react'
import Rotate from './components/Rotate'
import SlideAnimation from './components/SlideAnimation'
import yaw from './assets/yaw.mp4'
import frame1 from './assets/photo-2.jpg'
import frame2 from './assets/photo-3.jpg'
import frame3 from './assets/photo-1.jpg'
const slides = [
  { id: 1, title: "Makes and Distributes", subtitle: "Video Content.",img:frame1 },
  { id: 2, title: "Creates Engaging", subtitle: "Visual Stories.",img:frame2  },
  { id: 3, title: "Delivers Impactful", subtitle: "Media Solutions.",img:frame3  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const handleClick = () => {
    setIsAnimating(true);
    setShowContent(false); // Hide content during animation
    
    setTimeout(() => {
      setIsAnimating(false);
      
    }, 500); 
    
    setTimeout(() => {
        
        setShowContent(true);
      }, 400);// Duration matches the animation time
  };
  return (
    <div className="min-h-screen  bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Navigation */}
      <nav className="absolute  top-0 left-0 right-0 px-6 py-8 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-white text-2xl font-bold">MATO</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-red-500">HOME</a>
            <a href="/pages" className="text-white hover:text-red-500">PAGES</a>
            <a href="/gallery" className="text-white hover:text-red-500">GALLERY</a>
            <a href="/blog" className="text-white hover:text-red-500">BLOG</a>
            <a href="/shop" className="text-white hover:text-red-500">SHOP</a>
            <a href="/contacts" className="text-white hover:text-red-500">CONTACTS</a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <ShoppingCart className="text-white w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
            <Search className="text-white w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative min-h-screen grid grid-cols-3   items-center px-6">
      <div
        className={`absolute top-0 left-0 w-full h-full bg-blue-400 transition-transform duration-500 ${
          isAnimating ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>

      {/* Sliding main div */}
      <div
        className={`bg-gradient-to-r from-gray-900 to-gray-800 col-span-3 w-full z-20 absolute h-full transform transition-transform duration-500 ${
          isAnimating ? "translate-x-0  " : "-translate-x-2/3  "
        }`}
      ></div>
<div className="absolute h-full col-span-1 z-30 left-0 top-3/4 -translate-y-1/2 flex flex-col items-center space-y-4">
         
         <Rotate animation={handleClick} currentSlide={currentSlide} slides={slides} setCurrentSlide={setCurrentSlide} totalSlides={3}/>
        
       
       </div>
       <div className='col-span-1'></div>
        <div className="col-span-2 relative w-full h-full flex items-center  mr-0">
  
  
          {/* Slide Counter and Controls */}
         

          {/* Main Content */}
          {showContent && (
        <div className="absolute flex flex-col justify-center    h-full z-10 w-full text-center transition-opacity duration-500 opacity-100">
          <h1 className="text-4xl mx-auto flex flex-col justify-center items-center md:text-6xl text-center lg:text-7xl font-bold text-white leading-tight">
            <span className="block opacity-90">{slides[currentSlide].title}</span>
            <span className="block">{slides[currentSlide].subtitle}</span>
           
           {/* <video src={yaw} autoPlay loop    className="absolute  top-0 left-0 w-full h-full object-cover object-center z-[-1]"/> */}
           <img src={slides[currentSlide].img} className="absolute  top-0 left-0 w-full h-full object-cover object-center z-[-1]" alt="" />
          </h1>
          <button className="mt-8 text-red-500 hover:text-red-400 flex items-center space-x-2">
            <span>WATCH SHOWREEL</span>
            <span className="w-12 h-[1px] bg-red-500"></span>
          </button>
        </div>
      )}


        
          {/* Social Links */}
          <div className="absolute bottom-8 left-0 flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-white/50 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-white/50 hover:text-white">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

