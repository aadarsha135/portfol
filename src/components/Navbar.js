import React, { useState, useEffect } from 'react';

const Navbar = ({ currentPage, onPageChange, toggleTheme, theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', icon: 'home-outline' },
    { name: 'About', id: 'about', icon: 'person-outline' },
    { name: 'Skills', id: 'skills', icon: 'build-outline' },
    { name: 'Projects', id: 'projects', icon: 'layers-outline' },

    { name: 'Contact', id: 'contact', icon: 'mail-outline' },
  ];

  const navbarStyles = scrolled 
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 shadow-xl shadow-gray-900/5 dark:shadow-black/30' 
    : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-700/10';

  return (
    <nav className={`${navbarStyles} fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="relative group">
              <img
                src="finallogo.png"
                alt="Portfolio Logo"
                className="w-36 h-14 object-contain rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`relative px-5 py-2.5 text-sm font-medium rounded-xl transition-all duration-300 ease-out group
                  ${currentPage === item.id 
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/30 shadow-inner' 
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50/50 dark:hover:bg-gray-800/30'
                  }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ion-icon name={item.icon} className="text-lg"></ion-icon>
                  {item.name}
                </span>
                
                {currentPage === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl" />
                )}
                
                <div 
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 transform -translate-x-1/2 rounded-full ${
                    currentPage === item.id ? 'w-4/5' : 'group-hover:w-3/4'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 ease-out group shadow-sm hover:shadow-md"
              aria-label="Toggle dark mode"
            >
              <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                <ion-icon 
                  name={theme === 'dark' ? 'sunny' : 'moon'} 
                  className="text-xl"
                ></ion-icon>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 dark:from-blue-400/20 dark:to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-600 dark:text-gray-300 hover:from-gray-200 hover:to-gray-300 dark:hover:from-gray-700 dark:hover:to-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 ease-out group shadow-sm hover:shadow-md"
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                <div className={`w-5 h-5 relative transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
                  <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 top-2' : 'top-1'}`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-current top-2 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'} transition-all duration-300`}></span>
                  <span className={`absolute block w-5 h-0.5 bg-current transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 top-2' : 'top-3'}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="py-3 space-y-2">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-3 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onPageChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out transform hover:scale-[0.98] active:scale-95 flex items-center space-x-3
                    ${currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-white/50 dark:hover:bg-gray-700/50'
                    }`}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: mobileMenuOpen ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <ion-icon 
                    name={item.icon} 
                    className={`text-lg ${currentPage === item.id ? 'text-white' : 'text-gray-500'}`}
                  ></ion-icon>
                  <span>{item.name}</span>
                  
                  {currentPage === item.id && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;