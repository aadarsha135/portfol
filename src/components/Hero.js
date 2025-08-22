import React from 'react';

const HomePage = ({ onExploreClick }) => (
  <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
  
    {/* Background gradients and geometric shapes remain */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950 transition-all duration-1000"></div>
    
    <div className="absolute inset-0 opacity-30 dark:opacity-20">
      {/* example floating SVG */}
      <svg className="absolute top-20 left-10 w-32 h-32 text-blue-200 dark:text-blue-900 animate-spin-slow" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>
    </div>
    
    {/* Main content container */}
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
      {/* Hero heading */}
      <div className="space-y-6 mb-8">
        <p className="text-sm sm:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 tracking-widest uppercase mb-4">
          Digital Craftsman & Problem Solver
        </p>
        <h1>
          <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
            Hello, I'm
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 dark:from-violet-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-500 cursor-default">
            Aadarsha Chaulagain
          </span>
        </h1>
      </div>

      {/* Description */}
      <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed font-light mb-8">
        I craft <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">digital experiences</span> that blend elegant design with robust functionality.
      </p>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
        <button
          onClick={onExploreClick}
          className="px-8 py-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700 text-white font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
        >
          Explore My Work
        </button>
        
      </div>

      <div className="text-gray-500 dark:text-gray-400 text-sm">Scroll to explore ↓</div>
    </div>

    {/* Floating orbs & gradients animations remain */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-violet-400/30 to-purple-400/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-float-1"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-2xl animate-float-2"></div>
    </div>
  </section>
);

export default HomePage;
