import { useEffect, useRef, useState } from 'react';

const Navbar = ({ currentPage, onPageChange, toggleTheme, theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔑 Prevent scroll-spy during programmatic scroll
  const isAutoScrolling = useRef(false);

  const navItems = [
    { name: 'Home', id: 'home', icon: 'home-outline' },
    { name: 'About', id: 'about', icon: 'person-outline' },
    { name: 'Skills', id: 'skills', icon: 'build-outline' },
    { name: 'Projects', id: 'projects', icon: 'layers-outline' },
    { name: 'Contact', id: 'contact', icon: 'mail-outline' },
  ];

  /* -------------------------------------------
     Scroll handling + scroll spy
  -------------------------------------------- */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // ❌ Do not update active section while auto-scrolling
      if (isAutoScrolling.current) return;

      const sections = navItems.map(i => document.getElementById(i.id));
      const scrollPos = window.scrollY + window.innerHeight / 3;

      let active = currentPage;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          active = section.id;
          break;
        }
      }

      if (active !== currentPage) {
        onPageChange(active, false); // state update only
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

  /* -------------------------------------------
     Desktop nav click
  -------------------------------------------- */
  const handleNavClick = id => {
    isAutoScrolling.current = true;
    onPageChange(id, true);

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 700);
  };

  /* -------------------------------------------
     Mobile nav click
  -------------------------------------------- */
  const handleMobileNavClick = id => {
    setMobileMenuOpen(false);
    isAutoScrolling.current = true;
    onPageChange(id, true);

    setTimeout(() => {
      isAutoScrolling.current = false;
    }, 700);
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
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
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
                  className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 transform -translate-x-1/2 rounded-full
                    ${currentPage === item.id ? 'w-4/5' : 'group-hover:w-3/4'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* Theme Toggle & Mobile Button */}
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

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 mt-2' : 'max-h-0'}`}>
          <div className="py-3 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleMobileNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all
                  ${currentPage === item.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-700 dark:text-gray-200'
                  }`}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>


      </div>
    </nav>
  );
};

export default Navbar;
