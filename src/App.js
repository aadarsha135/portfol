import React, { useState, useEffect } from 'react';

// Navbar Component
const Navbar = ({ currentPage, onPageChange }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-700 to-purple-900 p-4 shadow-lg rounded-b-xl sticky top-0 z-50">




      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* ✅ Updated logo and title block */}
        <div className="flex items-center">
  <img
    src="finallogo.png"
    alt="Logo"
    className="w-50 h-24 object-contain rounded-xl"
    style={{ maxWidth: 'none', maxHeight: 'none' }}
  />
</div>


       

        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onPageChange(item.id)}
                className={`text-white text-lg font-medium px-4 py-2 rounded-lg transition-all duration-300 ease-in-out
                  ${currentPage === item.id ? 'bg-white bg-opacity-20 shadow-md transform scale-105' : 'hover:bg-white hover:bg-opacity-10 hover:shadow-md'}
                  focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50`}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// HomePage Component
const HomePage = () => (
  <section className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 p-8 rounded-xl shadow-inner my-8 mx-auto max-w-7xl">
    <div className="text-center">
      <h2 className="text-6xl font-extrabold text-gray-900 mb-6 animate-fade-in-up font-inter">
        Hello, I'm <span className="text-blue-600">Aadarsha Chaulagain</span>
      </h2>
      <p className="text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto animate-fade-in-up animation-delay-200 font-inter">
        A full-stack developer and AI enthusiast specializing in building modern web & mobile apps,
        and creating intelligent systems that solve real problems and deliver great user experiences.
      
      </p>
      <p className="text-xl text-gray-600 mt-4 animate-fade-in-up animation-delay-400 font-inter">
        I blend design, logic, and innovation to craft solutions that make an impact.
      </p>
      <button
        className="mt-10 px-8 py-4 bg-purple-600 text-white text-xl font-semibold rounded-full shadow-lg
        hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 ease-in-out animate-fade-in-up animation-delay-400 font-inter"
      >
        Explore My Work
      </button>
    </div>
  </section>
);

// ProjectsPage Component
const ProjectsPage = () => (
  <section className="min-h-[calc(100vh-80px)] bg-white p-8 rounded-xl shadow-lg my-8 mx-auto max-w-7xl">
    <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center font-inter">My Projects</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project Card 1 */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 font-inter">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">MoodMate</h3>
        <p className="text-gray-700 mb-4">
         MoodMate is a mood-aware music recommendation system powered by Flask, Tailwind CSS, and deep learning. 
         It leverages natural language processing (NLP) to analyze user inputs and detect emotional intent, then recommends personalized songs using emotion classification and intelligent filtering techniques.
        </p>

        <a href="#" className="text-purple-600 hover:underline font-medium">
          View Project &rarr;
        </a>
      </div>
      {/* Project Card 2 */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 font-inter">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">E-commerce Platform</h3>
        <p className="text-gray-700 mb-4">
          Developed a responsive e-commerce site with product listings, shopping cart, and secure payment
          integration. Utilized Next.js for server-side rendering and Stripe for payments.
        </p>
        <a href="#" className="text-purple-600 hover:underline font-medium">
          View Project &rarr;
        </a>
      </div>
      {/* Project Card 3 */}
      <div className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 font-inter">
        <h3 className="text-2xl font-semibold text-blue-700 mb-3">Mobile Game App</h3>
        <p className="text-gray-700 mb-4">
          Designed and implemented a casual mobile game for Android using Unity and C#. Focused on intuitive gameplay
          and engaging user experience.
        </p>
        <a href="#" className="text-purple-600 hover:underline font-medium">
          View Project &rarr;
        </a>
      </div>
    </div>
  </section>
);

// AboutPage Component
const AboutPage = () => (
  <section className="min-h-[calc(100vh-80px)] bg-white p-8 rounded-xl shadow-lg my-8 mx-auto max-w-7xl">
    <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center font-inter">About Me</h2>
    <div className="flex flex-col md:flex-row items-center md:space-x-10">
      <div className="md:w-1/3 mb-6 md:mb-0">
        <img
          src="pic4.jpg"
          alt="Your Photo"
          className="rounded-full shadow-lg w-64 h-64 object-cover mx-auto"
        />
      </div>
      <div className="md:w-2/3 text-gray-700 text-lg leading-relaxed font-inter">
        <p className="mb-4">
  I'm a passionate Computer Engineer with a strong foundation in building modern websites, mobile apps, and intelligent systems. My journey started with a fascination for how technology can solve real-world problems—and I've been building ever since.
</p>
<p className="mb-4">
  With hands-on experience across a variety of projects, I focus on creating scalable, user-friendly solutions. I'm always eager to learn new tools and take on complex challenges with clean, efficient code.
</p>
<p>
  Outside of coding, I enjoy hiking, exploring sci-fi stories, and singing in my free time.
</p>
      </div>
    </div>
  </section>
);

// SkillsPage Component - Updated with your skills
const SkillsPage = () => (
  <section className="min-h-[calc(100vh-80px)] bg-white p-8 rounded-xl shadow-lg my-8 mx-auto max-w-7xl">
    <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center font-inter">My Skills</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800 font-inter">
      {/* Frontend */}
      <div className="bg-blue-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-blue-700 mb-4">Frontend Development</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
      {/* Backend */}
      <div className="bg-purple-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-purple-700 mb-4">Backend Development</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Django (Python)</li>
          <li>Node.js</li>
          
          <li>Flask</li>
        </ul>
      </div>
      {/* Tools & Others */}
      <div className="bg-green-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Other Skills & Technologies</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Git & GitHub</li>
          <li>Machine Learning</li>
          <li>Deep Learning</li>
        </ul>
      </div>
    </div>
  </section>
);

// ContactPage Component
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic (e.g., API call)
    setSubmitStatus('Thank you for reaching out! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-white p-8 rounded-xl shadow-lg my-8 mx-auto max-w-4xl font-inter">
      <h2 className="text-5xl font-bold text-gray-900 mb-10 text-center">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto flex flex-col space-y-6"
        noValidate
      >
        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-gray-700">Name</span>
          <input
            type="text"
            name="name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1 font-semibold text-gray-700">Message</span>
          <textarea
            name="message"
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
          />
        </label>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300"
        >
          Send Message
        </button>
        {submitStatus && (
          <p className="mt-4 text-green-600 font-medium">{submitStatus}</p>
        )}
      </form>
    </section>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'about':
        return <AboutPage />;
      case 'skills':
        return <SkillsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <>
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="px-4 sm:px-10">{renderPage()}</main>
      <footer className="text-center text-gray-500 py-6 text-sm select-none font-inter">
        &copy; {new Date().getFullYear()} Aadarsha. All rights reserved.
      </footer>
    </>
  );
};

export default App;
