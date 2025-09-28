import React from 'react';

const GradientLinesBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex">
        {Array.from({ length: 100 }).map((_, i) => (
            <div 
            key={i} 
            className={`w-full ${
                i % 2 === 0 ? 'bg-gradient-to-b to-red-700 via-purple-700 from-red-900' :
                'bg-transparent'
                } opacity-100`}
                />
            ))}
      </div>
      
     
      <div className='absolute mix-blend-multiply -bottom-20 right-0 rotate-45'>
        <div className='w-80 h-80 bg-blue-600 rotate-45 blur-3xl animate-pulse'
             style={{
               animation: 'float1 6s ease-in-out infinite, pulse 4s ease-in-out infinite'
             }}></div>
        <div className='w-50 h-50 bg-blue-500 rotate-120 blur-2xl -translate-y-5'
             style={{
               animation: 'float2 8s ease-in-out infinite, pulse 3s ease-in-out infinite reverse'
             }}></div>
      </div>
      
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(45deg);
          }
          25% { 
            transform: translateY(-20px) translateX(-10px) rotate(45deg);
          }
          50% { 
            transform: translateY(-10px) translateX(15px) rotate(45deg);
          }
          75% { 
            transform: translateY(-30px) translateX(-5px) rotate(45deg);
          }
        }
        
        @keyframes float2 {
          0%, 100% { 
            transform: translateY(-5px) translateX(0px) rotate(120deg);
          }
          33% { 
            transform: translateY(-25px) translateX(10px) rotate(120deg);
          }
          66% { 
            transform: translateY(-15px) translateX(-12px) rotate(120deg);
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.8;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.3);
          }
        }
      `}</style>
     </div>
  );
};

const GradientLines = () => {
  return (
    <div className="min-h-screen  bg-black">
      <div className="flex">
        <div className="w-full relative">
          <GradientLinesBackground />
        </div>
      </div>
    </div>
  );
};

export default GradientLines;