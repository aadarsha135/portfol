import { Cpu, Lightbulb, Music, Rocket, User } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: User,
      color: 'from-blue-500 to-cyan-500',
      title: 'Computer Engineering Student',
      description: "I am a Computer Engineering student specializing in Natural Language Processing and LLM orchestration, dedicated to bridging the gap between research and production-ready software."
    },
    {
      icon: Cpu,
      color: 'from-purple-500 to-pink-500',
      title: 'AI & NLP Specialist',
      description: "My expertise lies in building intelligent systems—from RAG pipelines and multi-agent orchestration to fine-tuning transformers like BART and GPT-2 for specialized tasks."
    },
    {
      icon: Rocket,
      color: 'from-indigo-500 to-purple-500',
      title: 'Full-Stack Architect',
      description: "I design and deploy robust end-to-end applications using FastAPI, Django, and React, ensuring they are cloud-ready through Docker and AWS ECS integration."
    },
    {
      icon: Lightbulb,
      color: 'from-teal-500 to-green-500',
      title: 'Strategic Problem Solver',
      description: "I focus on purpose-driven design, transforming complex data challenges into simple, scalable solutions that prioritize both performance and user experience."
    },
    {
      icon: Music,
      color: 'from-green-500 to-emerald-500',
      title: 'Creative Explorer',
      description: "Beyond the terminal, I find inspiration in the complexity of science, the tranquility of nature, and the expressive rhythm of music."
    }
  ];

  return (
    <section className="min-h-[calc(100vh-80px)] px-6 sm:px-8 py-10 mx-auto max-w-7xl overflow-hidden font-inter">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Architecting intelligent digital experiences through the synergy of <strong>Artificial Intelligence</strong> and <strong>Modern Web Technologies</strong>.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Profile Image */}
        <div className="relative order-2 lg:order-1">
          <div className="relative w-80 h-80 mx-auto">
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl rotate-12 opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-25 animate-float animation-delay-2000"></div>

            {/* Main image container */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-gray-800/20 backdrop-blur-sm shadow-2xl">
                <img
                  src="dada5.jpeg"
                  alt="Aadarsha Chaulagain"
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Cards */}
        <div className="space-y-6 order-1 lg:order-2">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Statistics - Values updated based on your project history */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
        {[
          { number: '12+', label: 'Projects Completed' },
          { number: '8+', label: 'Tech Stack Mastery' },
          { number: '3+', label: 'Years of Engineering' },
          { number: '100%', label: 'Passion Driven' }
        ].map((stat, index) => (
          <div key={index} className="text-center group">
            <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.number}
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-xs font-bold uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;