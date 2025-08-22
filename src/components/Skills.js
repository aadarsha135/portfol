import React from 'react';
import { Code, Server, Cpu, Wrench, TrendingUp, Award } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      gradient: "from-blue-500 to-cyan-500",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React"]
    },
    {
      title: "Backend Development",
      icon: Server,
      gradient: "from-purple-500 to-pink-500",
      skills: ["Django", "Flask", "Node.js", "REST APIs"]
    },
    {
      title: "AI & Machine Learning",
      icon: Cpu,
      gradient: "from-green-500 to-teal-500",
      skills: ["Python", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Data Analysis"]
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      gradient: "from-orange-500 to-red-500",
      skills: ["Git",  "Linux", "Render","Github Pages"]
    }
  ];

  return (
    <section className="min-h-screen px-6 sm:px-8 py-20 mx-auto max-w-7xl">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          A snapshot of my technical expertise across frontend, backend, AI/ML, and essential development tools.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-8 rounded-full"></div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { icon: Code, label: 'Languages', count: '7+' },
          { icon: Wrench, label: 'Frameworks', count: '6+' },
          { icon: TrendingUp, label: 'Years Learning', count: '3+' },
          { icon: Award, label: 'Projects', count: '12+' }
        ].map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="group text-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.count}
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>

      {/* Skills Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-xl bg-gradient-to-r ${category.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {category.skills.map((skill, i) => (
                  <li key={i} className="font-medium">{skill}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 dark:border-blue-700/20 rounded-2xl">
          <TrendingUp className="text-blue-600 dark:text-blue-400" size={24} />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Constantly learning and building real AI/ML and web projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
