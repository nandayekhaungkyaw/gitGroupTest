import React, { useState, useCallback } from 'react'

export default function Rotate({currentSlide,totalSlides,setCurrentSlide,slides,animation}) {
 
  const [rotationDirection, setRotationDirection] = useState(1)


  const handleNavigation = useCallback((direction) => {
    setCurrentSlide(prev => {
        animation()
        if (direction === 'up') {
            setRotationDirection(0)
            return prev === 0 ? slides.length - 1 : prev - 1
          } else {
            setRotationDirection(1)
            return (prev + 1) % slides.length
           
          }
    })
  }, [totalSlides])
currentSlide+=1
  return (
    <div className="relative w-[300px] z-40 h-[300px]">
      {/* Outer Dotted Circle Pattern */}
      <div 
        className={`absolute inset-0 ${rotationDirection === 1 ? 'animate-spin-slow' : 'animate-spin-slow-reverse'}`}
        style={{ animationDuration: '30s' }}
      >
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20"
            style={{
              left: '50%',
              top: '50%',
              transform: `
                rotate(${i * 6}deg)
                translateY(-140px)
              `
            }}
          />
        ))}
      </div>

      {/* Inner Dotted Circle Pattern */}
      <div 
        className={`absolute inset-0 ${rotationDirection === 1 ? 'animate-spin-fast' : 'animate-spin-fast-reverse'}`}
        style={{ animationDuration: '20s' }}
      >
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30"
            style={{
              left: '50%',
              top: '50%',
              transform: `
                rotate(${i * 12}deg)
                translateY(-100px)
              `
            }}
          />
        ))}
      </div>

      {/* Horizontal Dotted Line */}
      <div className="absolute left-1/2 top-1/2 w-[140px] h-[1px] flex items-center justify-between">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="w-[1px] h-[1px] bg-white/40" />
        ))}
      </div>

      {/* Rotating Circle */}
     
      {/* Navigation Controls */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4">
        <button
          onClick={() => handleNavigation('up')}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        
        <div className="text-white font-medium">
          <span className="text-2xl">
            {String(currentSlide).padStart(2, '0')}
          </span>
          <span className="text-white/30 text-sm block text-center">
            / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={() => handleNavigation('down')}
          className="text-white/50 hover:text-white transition-colors"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

