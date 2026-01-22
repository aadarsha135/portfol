import { useEffect, useRef, useState } from 'react';

/* -----------------------------
   STATIC NAV ITEMS (ESLint FIX)
------------------------------ */
const NAV_ITEMS = [
  { name: 'Home', id: 'home', icon: 'home-outline' },
  { name: 'About', id: 'about', icon: 'person-outline' },
  { name: 'Skills', id: 'skills', icon: 'build-outline' },
  { name: 'Projects', id: 'projects', icon: 'layers-outline' },
  { name: 'Contact', id: 'contact', icon: 'mail-outline' },
];

const Navbar = ({ currentPage, onPageChange, toggleTheme, theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent scroll-spy during smooth scroll
  const isAutoScrolling = useRef(false);

  /* ------------------------------------
      Scroll + Scroll-Spy (ACTIVE HIGHLIGHT)
  ------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (isAutoScrolling.current) return;

      const scrollPos = window.scrollY + window.innerHeight / 3;
      let active = currentPage;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPos) {
          active = NAV_ITEMS[i].id;
          break;
        }
      }

      if (active !== currentPage) {
        onPageChange(active, false); // state only
      }
    };

    let timeoutId;
    const debouncedScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    window.addEventListener('scroll', debouncedScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
      clearTimeout(timeoutId);
    };
  }, [currentPage, onPageChange]);

  /* ------------------------------------
      Navigation Clicks
  ------------------------------------- */
  const handleNavClick = (id) => {
    isAutoScrolling.current = true;
    onPageChange(id, true);

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 700);
  };

  const handleMobileNavClick = (id) => {
    setMobileMenuOpen(false);
    handleNavClick(id);
  };

  const navbarStyles = scrolled
    ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 shadow-xl shadow-gray-900/5 dark:shadow-black/30'
    : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200/10 dark:border-gray-700/10';

  return (
    <nav className={`${navbarStyles} fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
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
            {NAV_ITEMS.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                /* CLEANED CLASSES: 
                   Removed: rounded-xl, bg-blue-50, shadow-inner, hover:bg-gray-50
                   Added: bg-transparent, border-none, outline-none, focus:ring-0
                */
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 ease-out group bg-transparent border-none outline-none focus:outline-none focus:ring-0
                  ${currentPage === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <ion-icon name={item.icon} className="text-lg"></ion-icon>
                  {item.name}
                </span>

                {/* THE REMOVED BLOCK WAS HERE (The conditional background div) */}

                <div
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 transform -translate-x-1/2 rounded-full
                    ${currentPage === item.id ? 'w-4/5' : 'group-hover:w-3/4'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* Theme Toggle + Mobile Button */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
            >
              <ion-icon
                name={theme === 'dark' ? 'sunny' : 'moon'}
                className="text-xl"
              ></ion-icon>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
            >
              <div className={`w-5 h-5 relative transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}>
                <span className={`absolute block w-5 h-0.5 bg-current ${mobileMenuOpen ? 'rotate-45 top-2' : 'top-1'}`}></span>
                <span className={`absolute block w-5 h-0.5 bg-current top-2 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`absolute block w-5 h-0.5 bg-current ${mobileMenuOpen ? '-rotate-45 top-2' : 'top-3'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="py-3 space-y-2">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-3 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              {NAV_ITEMS.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => handleMobileNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out transform
                    ${currentPage === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
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
                  <span className="ml-3">{item.name}</span>
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