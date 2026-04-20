import { Analytics } from '@vercel/analytics/react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';

/* ---------------- Dark Mode Hook ---------------- */
const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    if (saved === 'dark') document.documentElement.classList.add('dark');
  }, []);

  return [theme, toggleTheme];
};

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [currentPage, setCurrentPage] = useState('home');

  /* ---------------- Centralized page change ---------------- */
  const handlePageChange = (id, shouldScroll = true) => {
    setCurrentPage(id);

    if (!shouldScroll) return;

    const section = document.getElementById(id);
    if (!section) return;

    const navbarHeight = 80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  };

  return (
    <Router>
      <Analytics />
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">

        <Navbar
          currentPage={currentPage}
          onPageChange={handlePageChange}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <main className="px-4 sm:px-8">
          <section id="home" className="min-h-screen flex items-center justify-center">
            <HomePage onExploreClick={() => handlePageChange('projects')} />
          </section>

          <section id="about" className="py-10">
            <AboutPage />
          </section>

          <section id="skills" className="py-0">
            <SkillsPage />
          </section>

          <section id="projects" className="py-0">
            <ProjectsPage />
          </section>

          <section id="contact" className="py-0">
            <ContactPage />
          </section>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
