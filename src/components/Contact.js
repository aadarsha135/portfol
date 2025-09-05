import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Linkedin, Github, Send, MessageCircle, User, AtSign } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCaptcha, setShowCaptcha] = useState(false);
  const recaptchaRef = useRef();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "achaulagain444@gmail.com",
      href: "mailto:achaulagain444@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/aadarsha-chaulagain",
      href: "https://www.linkedin.com/in/aadarsha-chaulagain-648a002b9",
      color: "from-blue-600 to-blue-500",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/aadarsha875",
      href: "https://github.com/aadarsha875",
      color: "from-gray-700 to-gray-600",
    },
  ];

  // First click shows captcha
  const handleFakeSubmit = (e) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  // After captcha is solved, submit form silently
  const handleCaptchaSuccess = async (value) => {
    if (value) {
      setIsSubmitting(true);
      const form = document.getElementById("realForm");
      const formData = new FormData(form);

      try {
        await fetch("https://formsubmit.co/ajax/9daadf95f19d74836f94790f3b1e3d75", {
          method: "POST",
          body: formData,
        });
        form.reset();
      } catch (error) {
        console.error(error);
      }

      setIsSubmitting(false);
      setShowCaptcha(false);
      recaptchaRef.current.reset();
    }
  };

  return (
    <section id="contact" className="min-h-screen px-6 sm:px-8 py-20 mx-auto max-w-6xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
              <MessageCircle className="text-blue-500" size={28} />
              Let's Connect
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {item.label}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <Send className="text-purple-500" size={28} />
            Send Message
          </h3>

          <form
            id="realForm"
            className="space-y-6"
            onSubmit={handleFakeSubmit}
          >
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="New Portfolio Message" />
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            {/* Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600"
                placeholder="you@example.com"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageCircle className="absolute left-3 top-4 text-gray-400" size={20} />
              <textarea
                name="message"
                rows="5"
                required
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 resize-none"
                placeholder="Write your message here..."
              />
            </div>

            {/* Captcha */}
            {showCaptcha && (
              <div className="flex justify-center">
                <ReCAPTCHA
                  sitekey="6Lce3b4rAAAAAJxoY5BWZ89QNAvjs8YWS4jirVEs"
                  onChange={handleCaptchaSuccess}
                  ref={recaptchaRef}
                />
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : showCaptcha ? (
                "Verify Captcha"
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
