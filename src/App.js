import React, { useState, useEffect, useRef, forwardRef } from 'react';
import useDarkMode from './hooks/useDarkMode'; // Assuming this hook exists

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const projectsRef = useRef(null);
  const [scrollToProjects, setScrollToProjects] = useState(false);
  const [theme, toggleTheme] = useDarkMode();

  const handleExploreClick = () => {
    setCurrentPage('projects');
    setScrollToProjects(true);
  };

  useEffect(() => {
    if (currentPage === 'projects' && scrollToProjects && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        setScrollToProjects(false);
      }, 100);
    }
  }, [currentPage, scrollToProjects]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onExploreClick={handleExploreClick} />;
      case 'projects':
        return <ProjectsPage ref={projectsRef} />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onExploreClick={handleExploreClick} />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} toggleTheme={toggleTheme} theme={theme} />
      {/* This main ensures the content area adapts */}
      <main className="px-3 sm:px-8 min-h-[calc(100vh-140px)] bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        {renderPage()}
      </main>
      <footer className="text-center text-gray-500 dark:text-gray-400 py-6 text-sm font-inter bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="flex justify-center gap-6 mb-2">
          <a href="https://www.instagram.com/aadarsha135/" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
            <ion-icon name="logo-instagram" class="text-3xl hover:text-pink-500 transition"></ion-icon>
          </a>
          <a href="https://www.facebook.com/adarsha.chaulagain.9" target="_blank" rel="noopener noreferrer" aria-label="Facebook profile">
            <ion-icon name="logo-facebook" class="text-3xl hover:text-blue-600 transition"></ion-icon>
          </a>
          <a href="https://www.linkedin.com/in/aadarsha-chaulagain-648a002b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            <ion-icon name="logo-linkedin" class="text-3xl hover:text-blue-400 transition"></ion-icon>
          </a>
        </div>
        &copy; {new Date().getFullYear()} Aadarsha. All rights reserved.
      </footer>
    </>
  );
};

const Navbar = ({ currentPage, onPageChange, toggleTheme, theme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const navbarBgClass = 'bg-white dark:bg-gray-900';
  const shadowClass = 'shadow-lg';
  const textColorClass = 'text-gray-800 dark:text-white';
  const activeLinkClass = 'bg-gray-200 dark:bg-gray-700';
  const hoverLinkClass = 'hover:bg-gray-100 dark:hover:bg-gray-800';
  const buttonTextColor = 'text-gray-800 dark:text-white';

  return (
    <nav className={`${navbarBgClass} ${shadowClass} p-3 rounded-b-xl sticky top-0 z-50 transition-colors duration-300`}> {/* Adjusted padding */}
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src="finallogo.png" alt="Portfolio Logo" className="w-32 h-16 object-contain rounded-xl" /> {/* Adjusted logo size */}
        </div>

        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleTheme} className={`${buttonTextColor} text-2xl`} aria-label="Toggle dark mode">
            <ion-icon name={theme === 'dark' ? 'sunny' : 'moon'}></ion-icon>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`${buttonTextColor} focus:outline-none`}
            aria-label="Toggle menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  onPageChange(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`${textColorClass} text-base font-medium px-3 py-1.5 rounded-lg transition-all duration-300 ease-in-out
                  ${currentPage === item.id
                    ? `${activeLinkClass} shadow-md transform scale-105`
                    : `${hoverLinkClass}`}`}
              > {/* Adjusted font size and padding */}
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button onClick={toggleTheme} className={`${buttonTextColor} text-2xl px-4 py-2`} aria-label="Toggle dark mode">
              <ion-icon name={theme === 'dark' ? 'sunny' : 'moon'}></ion-icon>
            </button>
          </li>
        </ul>

        {mobileMenuOpen && (
          <ul className="w-full mt-4 space-y-4 flex flex-col md:hidden bg-gray-100 rounded-lg p-4 dark:bg-gray-800 transition-colors duration-300">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onPageChange(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block ${textColorClass} text-base font-medium px-4 py-2 rounded-lg transition-all duration-300 ease-in-out w-full text-left
                    ${currentPage === item.id
                      ? `${activeLinkClass} shadow-md transform scale-105`
                      : `${hoverLinkClass}`}`}
                > {/* Adjusted font size */}
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};


const HomePage = ({ onExploreClick }) => (
  <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 p-6 sm:p-8 rounded-xl shadow-inner my-6 sm:my-8 mx-auto max-w-7xl dark:bg-gray-800 dark:shadow-lg transition-colors duration-300">
    <div className="text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 animate-fade-in-up font-inter dark:text-white"> {/* Adjusted font size */}
        Hello, I'm <span className="text-blue-600 dark:text-blue-400">Aadarsha Chaulagain</span>
      </h2>
      <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-inter dark:text-gray-300"> {/* Adjusted font size */}
         I create digital solutions with focus on clean design, solid logic, and seamless user experience.
      Building useful applications that solve problems is my passion.
      </p>
      <p className="text-base sm:text-lg text-gray-600 mt-4 animate-fade-in-up animation-delay-400 font-inter dark:text-gray-400"> {/* Adjusted font size */}
        I blend design, logic, and creative innovation to craft solutions that make an impact.
      </p>
      <button
        onClick={onExploreClick}
        className="mt-6 px-5 py-2.5 bg-purple-600 text-white text-base font-semibold rounded-full shadow-lg
        hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-400 font-inter"
      > {/* Adjusted margin, padding, and font size */}
        Explore My Work
      </button>
    </div>
  </section>
);


const ProjectsPage = forwardRef((props, ref) => (
  <section
    id="projects"
    ref={ref}
    className="min-h-screen px-3 sm:px-8 py-8 mx-auto max-w-7xl font-inter bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300"
  > {/* Adjusted padding */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500"> {/* Adjusted font size */}
      Featured Projects
    </h2>

    <div className="space-y-6"> {/* Adjusted gap */}
      {[
        {
          icon: "musical-notes-outline",
          name: "MoodMate",
          tags: ["NLP", "Emotion Detection", "Flask"],
          description: `MoodMate is a mood-aware music recommendation system powered by Flask, Tailwind CSS, and deep learning.
          It leverages NLP to analyze user input and detect emotion, then recommends songs using classification.`,
          github: "https://github.com/your-repo/moodmate",
        },
        {
          icon: "mail-unread-outline",
          name: "ClearInbox",
          tags: ["Machine Learning", "Text Classification"],
          description: `ClearInbox is a web-based application that helps users identify whether a message is spam or not.
          The system uses a trained machine learning classifier to predict spam probability based on user input.`,
          github: "https://github.com/your-repo/clearinbox",
        },
        {
          icon: "book-outline",
          name: "Book Recommender",
          tags: ["Django", "Hybrid ML"],
          description: `Developed a web-based hybrid book recommendation system that combines multiple machine learning techniques
          to provide personalized book suggestions. Built with Django and integrated into a live website.`,
          github: "https://github.com/your-repo/bookrec",
        },
        {
          icon: "document-text-outline",
          name: "SmartDoc Q&A",
          tags: ["RAG", "Vector DB", "Embeddings"],
          description: `Developed a Retrieval-Augmented Generation (RAG) system that intelligently answers user questions
          by retrieving relevant information from a custom knowledge base. This system employs advanced embedding techniques
          for efficient similarity search and a large language model for synthesizing coherent and contextually relevant answers.`,
          github: "https://github.com/your-repo/rag-system",
        },
        {
          icon: "help-circle-outline",
          name: "QA System (SQuAD v2)",
          tags: ["Transformers", "HuggingFace", "Deep Learning"],
          description: `Developed a deep learning-based Question Answering (QA) model capable of extracting precise answers from
          provided textual contexts. This system utilizes a transformer-based model fine-tuned on the SQuAD v2 dataset.
          The implementation includes advanced data preprocessing for batched operations and robust handling of unanswerable questions.`,
          github: "https://github.com/your-repo/qa-squad",
        },
      ].map((proj, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row bg-gray-100 dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-lg" /* Adjusted padding */
        >
          {/* LEFT: ICON + NAME + TAGS + GITHUB */}
          <div className="w-full md:w-1/3 mb-4 md:mb-0 md:pr-6 space-y-2 flex flex-col items-center md:items-start text-center md:text-left"> {/* Adjusted margin, padding, spacing */}
            <div className="text-3xl sm:text-4xl text-purple-500"> {/* Adjusted icon size */}
              <ion-icon name={proj.icon}></ion-icon>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-400">{proj.name}</h3> {/* Adjusted font size */}
            <div className="flex flex-wrap justify-center md:justify-start gap-1"> {/* Adjusted gap */}
              {proj.tags.map((tag, i) => (
                <span key={i} className="bg-gray-200 dark:bg-gray-700 text-xs px-2.5 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mt-2 text-sm" /* Adjusted font size */
            >
              View Project <ion-icon name="open-outline"></ion-icon>
            </a>
          </div>

          {/* RIGHT: DESCRIPTION */}
          <div className="w-full md:w-2/3 text-gray-800 dark:text-gray-300 text-xs sm:text-sm leading-relaxed"> {/* Adjusted font size */}
            {proj.description}
          </div>
        </div>
      ))}
    </div>
  </section>
));



const AboutPage = () => (
  <section className="min-h-[calc(100vh-80px)] bg-white px-3 sm:px-6 py-8 rounded-xl shadow-lg my-6 sm:my-8 mx-auto max-w-6xl font-inter dark:bg-gray-800 dark:text-white transition-colors duration-300"> {/* Adjusted padding and margin */}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center dark:text-white">About Me</h2> {/* Adjusted font size and margin */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6"> {/* Adjusted gap */}

      <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm mx-auto lg:mx-0"> {/* Adjusted max-width */}
        <img
          src="pic99.jpg"
          alt="Aadarsha Chaulagain"
          className="rounded-xl shadow-xl w-full h-auto object-contain"
        />
      </div>

      <div className="flex-1 text-gray-800 space-y-3 text-sm sm:text-base leading-relaxed font-inter dark:text-gray-300"> {/* Adjusted font size and spacing */}
        <p>
          I'm a Computer Engineering student with a deep interest in artificial intelligence, full-stack development, and building impactful software solutions.
        </p>
        <p>
          My work focuses on developing smart, data-driven solutions—ranging from dynamic recommendation engines to advanced web platforms. I enjoy bringing ideas to life through well-designed systems that are both functional and user-centered.
        </p>
        <p>
          I’ve built and deployed end-to-end applications that reflect both technical depth and design sensibility, applying modern development practices to ensure performance, scalability, and maintainability.
        </p>
        <p>
          With a strong eye for detail and a problem-solving mindset, I constantly explore new concepts and techniques to enhance my skills. I value simplicity, purpose-driven design and building solutions that have real-world impact.
        </p>
        <p>
          Outside of coding, I enjoy exploring ideas in science, spending time in nature, and expressing myself through music and creativity.
        </p>
      </div>
    </div>
  </section>
);


const SkillsPage = () => (
  <section className="min-h-[calc(100vh-80px)] bg-white p-5 sm:p-6 rounded-xl shadow-lg my-6 sm:my-8 mx-auto max-w-7xl dark:bg-gray-800 dark:text-white transition-colors duration-300">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center font-inter dark:text-white">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 font-inter">
      <div className="bg-blue-50 p-4 sm:p-5 rounded-xl shadow-md dark:bg-blue-900 dark:shadow-none dark:border dark:border-blue-700"> {/* Adjusted padding */}
        <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-4 dark:text-blue-300">Frontend Development</h3> {/* Adjusted font size */}
        <ul className="list-disc list-inside space-y-2 dark:text-gray-200 text-sm sm:text-base"> {/* Adjusted font size */}
          <li>HTML</li><li>CSS</li><li>Tailwind CSS</li><li>JavaScript</li><li>React</li>
        </ul>
      </div>
      <div className="bg-purple-50 p-4 sm:p-5 rounded-xl shadow-md dark:bg-purple-900 dark:shadow-none dark:border dark:border-purple-700"> {/* Adjusted padding */}
        <h3 className="text-lg sm:text-xl font-semibold text-purple-700 mb-4 dark:text-purple-300">Backend Development</h3> {/* Adjusted font size */}
        <ul className="list-disc list-inside space-y-2 dark:text-gray-200 text-sm sm:text-base"> {/* Adjusted font size */}
          <li>Django</li><li>Node.js</li><li>Flask</li>
        </ul>
      </div>
      <div className="bg-green-50 p-4 sm:p-5 rounded-xl shadow-md dark:bg-green-900 dark:shadow-none dark:border dark:border-green-700"> {/* Adjusted padding */}
        <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4 dark:text-green-300">Other Skills</h3> {/* Adjusted font size */}
        <ul className="list-disc list-inside space-y-2 dark:text-gray-200 text-sm sm:text-base"> {/* Adjusted font size */}
          <li>Git & GitHub</li><li>Machine Learning</li><li>Deep Learning</li>
        </ul>
      </div>
    </div>
  </section>
);

const ContactPage = () => {
  return (
    <section
      id="contact"
      // Reduced max-w from max-w-4xl to max-w-3xl for a slightly narrower overall container
      // Adjusted vertical padding (py-6 instead of py-8)
      className="min-h-screen px-3 sm:px-6 py-6 mx-auto max-w-3xl font-inter transition-colors duration-300 bg-white dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Get In Touch</h2>

      {/* Adjusted gap between columns (gap-4 instead of gap-5) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* LEFT BOX: Contact Info */}
        {/* Reduced padding (p-3 sm:p-4 instead of p-4 sm:p-5) */}
        <div className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow-lg border dark:border-gray-700">
          {/* Reduced heading margin-bottom (mb-3 instead of mb-4) */}
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Contact Information</h3>
          {/* Reduced space-y (space-y-2 instead of space-y-3) and text size (text-xs sm:text-sm) */}
          <ul className="space-y-2 text-xs sm:text-sm">
            <li className="flex items-center gap-2">
              <ion-icon name="mail-outline" className="text-base sm:text-lg text-blue-500"></ion-icon>
              <span>aadarsha871@gmail.com</span>
            </li>

            <li className="flex items-center gap-2">
              <ion-icon name="logo-linkedin" className="text-base sm:text-lg text-blue-500"></ion-icon>
              <a
                href="https://www.linkedin.com/in/aadarsha-chaulagain-648a002b9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/aadarsha-chaulagain
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT BOX: Message Form */}
        {/* Reduced padding (p-3 sm:p-4 instead of p-4 sm:p-5) and space-y (space-y-3 instead of space-y-4) */}
        <form
          action="https://formsubmit.co/achaulagain444@gmail.com"
          method="POST"
          className="bg-gray-100 dark:bg-gray-800 p-3 sm:p-4 rounded-2xl shadow-lg border dark:border-gray-700 space-y-3"
          noValidate
        >
          {/* Reduced heading margin-bottom (mb-3 instead of mb-4) */}
          <h3 className="text-lg sm:text-xl font-semibold mb-3">Send Me a Message</h3>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://www.rajkumarchaulagain.com.np/thank-you.html"
          />
                     
          <input type="hidden" name="_honey" style={{ display: 'none' }} />

          <div>
            {/* Reduced label font size (text-xs sm:text-sm) */}
            <label className="block mb-1 font-medium text-xs sm:text-sm">Your Name</label>
            {/* Reduced input padding (p-1.5 sm:p-2) and font size (text-xs sm:text-sm) */}
            <input
              type="text"
              name="name"
              required
              className="w-full p-1.5 sm:p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            {/* Reduced label font size (text-xs sm:text-sm) */}
            <label className="block mb-1 font-medium text-xs sm:text-sm">Your Email</label>
            {/* Reduced input padding (p-1.5 sm:p-2) and font size (text-xs sm:text-sm) */}
            <input
              type="email"
              name="email"
              required
              className="w-full p-1.5 sm:p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              placeholder="you@example.com"
            />
          </div>

          <div>
            {/* Reduced label font size (text-xs sm:text-sm) */}
            <label className="block mb-1 font-medium text-xs sm:text-sm">Message</label>
            {/* Reduced textarea padding (p-1.5 sm:p-2) and font size (text-xs sm:text-sm) */}
            <textarea
              name="message"
              rows="4"
              required
              className="w-full p-1.5 sm:p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs sm:text-sm"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          {/* Reduced button vertical padding (py-1.5 sm:py-2) and font size (text-sm) */}
          <button
            type="submit"
            className="w-full py-1.5 sm:py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold text-white text-sm flex items-center justify-center gap-2"
          >
            Send Message
            <ion-icon name="send-outline" className="text-base sm:text-lg"></ion-icon>
          </button>
        </form>
      </div>
    </section>
  );
};

export default App;
