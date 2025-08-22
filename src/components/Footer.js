import React from 'react';
import { Heart, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://www.instagram.com/aadarsha135/',
      color: 'hover:text-pink-500 hover:bg-pink-100 dark:hover:bg-pink-900/30',
      label: 'Instagram'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/adarsha.chaulagain.9',
      color: 'hover:text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900/30',
      label: 'Facebook'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aadarsha-chaulagain-648a002b9',
      color: 'hover:text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900/30',
      label: 'LinkedIn'
    },
    {
      icon: Github,
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700',
      label: 'GitHub'
    }
  ];

  return (
    <footer className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200/20 dark:border-gray-700/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full filter blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-12">
        {/* Main Footer Content */}
        <div className="text-center">
          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 rounded-xl bg-gray-100 dark:bg-gray-800 ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <IconComponent size={24} className="transition-colors duration-300" />
                </a>
              );
            })}
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-lg italic text-gray-600 dark:text-gray-400 mb-4">
              "The best way to predict the future is to create it."
            </blockquote>
            <cite className="text-sm text-gray-500 dark:text-gray-500">- Peter Drucker</cite>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <span>Designed and developed with</span>
                <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                <span>by <span className="font-semibold text-gray-900 dark:text-white">Aadarsha</span></span>
              </div>
              <div className="flex items-center gap-4">
                <span>&copy; {new Date().getFullYear()} Aadarsha. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;