import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AboutPage from './components/About';
import ContactPage from './components/Contact';
import Footer from './components/Footer';
import HomePage from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsPage from './components/Projects';
import SkillsPage from './components/Skills';

// Custom hook for dark mode
const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return [theme, toggleTheme];
};

const App = () => {
  const [theme, toggleTheme] = useDarkMode();
  const [currentPage, setCurrentPage] = useState('home');

  // Smooth scroll + update current page
  const handlePageChange = (id) => {
    setCurrentPage(id);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Analytics />
      <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navbar with correct prop */}
        <Navbar
          currentPage={currentPage}
          onPageChange={handlePageChange}
          toggleTheme={toggleTheme}
          theme={theme}
        />

        <main className="px-4 sm:px-8">
          {/* Hero */}
          <section id="home" className="min-h-screen flex items-center justify-center">
            <HomePage onExploreClick={() => handlePageChange('projects')} />
          </section>

          {/* About */}
          <section id="about" className="py-20">
            <AboutPage />
          </section>

          {/* Skills */}
          <section id="skills" className="py-20">
            <SkillsPage />
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <ProjectsPage />
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <ContactPage />
          </section>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
