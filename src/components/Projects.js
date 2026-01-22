import { Book, ChevronDown, ChevronUp, Edit3, ExternalLink, FileText, Github, HelpCircle, Layers, Mail, MessageCircle, Music, Star } from 'lucide-react';
import { forwardRef, useState } from 'react';

const ProjectsPage = forwardRef((props, ref) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const projects = [
    {
      icon: Layers,
      name: "MultiMind: An AI-Powered Research Assistant",
      tags: ["Django", "React", "AI Agents", "Semantic Search", "MongoDB"],
      shortDescription: "An AI-powered research assistant with multiple fine-tuned agents working together in a pipeline.",
      fullDescription: `Developed an AI-powered research assistant where all agents were manually fine-tuned by me (except the Research Agent, which leveraged a pretrained semantic search model). I manually created a dedicated MongoDB database for this project, initially populating it with ~12000 research documents and their vector embeddings. The database was specifically designed for semantic search and knowledge retrieval but can be extended to a much larger scale through API-based data ingestion. The system integrates multiple agents working together in a pipeline: the Research Agent retrieves relevant documents via semantic search; the Curation Agent assigns topic tags; the Summarization Agent condenses content; the RAG Q&A Agent generates fact-grounded answers; the Writing Agent polishes outputs; and the Question Generation Agent suggests follow-up queries for the 'People Also Searched For' section. The workflow begins with a user query → semantic search in the database → context retrieval → curation and summarization → fact-based answering → polished writing → follow-up question generation. Together, these agents form a full-stack platform built with a Django backend and a React frontend, enabling interactive and scalable research exploration.`,
      github: "https://github.com/your-repo/multimind",
      demo: "#",
      color: "from-blue-500 to-cyan-500",
      featured: true
    },
    {
      icon: MessageCircle,
      name: "DeepScript: Context-Aware Screenplay Dialogue Generator",
      tags: ["GPT-2", "Emotion Analysis", "React", "Django", "NLP"],
      shortDescription: "A full-stack dialogue generation and emotion analysis system combining multiple deep learning models.",
      fullDescription: `DeepScript is a full-stack dialogue generation and emotion analysis system that combines multiple deep learning models into a single platform. I fine-tuned GPT-2 on a hybrid dataset of screenplays and Cornell dialogues to generate context-aware conversations, and fine-tuned another GPT-2 variant on emotion-tagged dialogues to produce emotionally driven outputs. Additionally, I utilized an emotion detection model fine tuned by myself to annotate over 300,000 dialogues from the Cornell Movie-Dialogs Corpus. The pipeline spans data preparation, fine-tuning, and deployment into a React frontend with a Django backend. Through this project, I learned how to combine diverse datasets for richer model performance, train specialized models for complementary NLP tasks, and bridge the gap between raw model training and real-world full-stack deployment.`,
      github: "https://lnkd.in/d67tEhz8",
      demo: "#",
      color: "from-purple-500 to-pink-500",
      featured: false
    },
    {
      icon: Edit3,
      name: "Shakespearean Text Generator (Character-Level GRU)",
      tags: ["TensorFlow", "Keras", "GRU", "NLP"],
      shortDescription: "A deep learning project that generates Shakespeare-style text using a GRU architecture.",
      fullDescription: `A deep learning project that generates Shakespeare-style text at the character level using a GRU architecture. The model was trained on the Shakespeare corpus and built from scratch with TensorFlow/Keras. The pipeline included preprocessing, sequence batching, vectorization, and sampling. Temperature-controlled sampling was implemented to balance creativity and coherence in the generated outputs. This project reinforced my understanding of sequence modeling with GRUs, character-level text generation, and TensorFlow optimization techniques.`,
      github: "https://lnkd.in/dWh2Cj-n",
      demo: "#",
      color: "from-green-500 to-teal-500",
      featured: false
    },
    {
      icon: Music,
      name: "MoodMate",
      tags: ["NLP", "Emotion Detection", "Flask"],
      shortDescription: "A mood-aware music recommendation system powered by emotion detection from text input.",
      fullDescription: `MoodMate is a mood-aware music recommendation system powered by Flask, Tailwind CSS, and deep learning. It leverages NLP to analyze user input and detect emotion, then recommends songs using classification.`,
      github: "",
      demo: "https://mood.rajkumarchaulagain.com.np",
      color: "from-orange-500 to-red-500",
      featured: true
    },
    {
      icon: Mail,
      name: "ClearInbox",
      tags: ["Machine Learning", "Text Classification"],
      shortDescription: "A web-based application that helps users identify spam messages.",
      fullDescription: `ClearInbox is a web-based application that helps users identify whether a message is spam or not. The system uses a trained machine learning classifier to predict spam probability based on user input.`,
      github: "https://github.com/your-repo/clearinbox",
      demo: "#",
      color: "from-indigo-500 to-blue-500",
      featured: false
    },
    {
      icon: Book,
      name: "Book Recommender",
      tags: ["Django", "Hybrid ML"],
      shortDescription: "A hybrid book recommendation system combining multiple machine learning techniques.",
      fullDescription: `Developed a web-based hybrid book recommendation system that combines multiple machine learning techniques to provide personalized book suggestions. Built with Django and integrated into a live website.`,
      github: "https://github.com/your-repo/bookrec",
      demo: "#",
      color: "from-amber-500 to-yellow-500",
      featured: true
    },
    {
      icon: FileText,
      name: "SmartDoc Q&A",
      tags: ["RAG", "Vector DB", "Embeddings"],
      shortDescription: "A Retrieval-Augmented Generation system for intelligent question answering.",
      fullDescription: `Developed a Retrieval-Augmented Generation (RAG) system that intelligently answers user questions by retrieving relevant information from a custom knowledge base. This system employs advanced embedding techniques for efficient similarity search and a large language model for synthesizing coherent and contextually relevant answers.`,
      github: "https://github.com/your-repo/rag-system",
      demo: "#",
      color: "from-emerald-500 to-green-500",
      featured: false
    },
    {
      icon: HelpCircle,
      name: "QA System (SQuAD v2)",
      tags: ["Transformers", "HuggingFace", "Deep Learning"],
      shortDescription: "A deep learning-based Question Answering model fine-tuned on SQuAD v2.",
      fullDescription: `Developed a deep learning-based Question Answering (QA) model capable of extracting precise answers from provided textual contexts. This system utilizes a transformer-based model fine-tuned on the SQuAD v2 dataset. The implementation includes advanced data preprocessing for batched operations and robust handling of unanswerable questions.`,
      github: "https://github.com/your-repo/qa-squad",
      demo: "#",
      color: "from-violet-500 to-purple-500",
      featured: true
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen px-4 sm:px-8 py-16 mx-auto max-w-7xl font-inter bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Centered Animated Heading */}
      <div className="flex justify-center">
        <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          Featured Projects
          {/* Underline */}
          <span className="absolute left-0 bottom-[-4px] h-1 bg-gradient-to-r from-blue-600 to-purple-500 rounded-full origin-left scale-x-0 animate-scaleX w-full"></span>
        </h2>
      </div>


      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          return (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Star size={14} className="fill-current" />
                    Featured
                  </div>
                </div>
              )}

              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {project.name}
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {expandedProject === idx ? project.fullDescription : `${project.shortDescription}`}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleExpand(idx)}
                  className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                >
                  {expandedProject === idx ? 'Show less' : 'Read more'}
                  {expandedProject === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors group/btn"
                      aria-label="View code on GitHub"
                    >
                      <Github size={18} className="text-gray-700 dark:text-gray-300 group-hover/btn:text-gray-900 dark:group-hover/btn:text-white transition-colors" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-110 shadow-lg group/btn"
                      aria-label="View live demo"
                    >
                      <ExternalLink size={18} className="text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full border border-blue-200/50 dark:border-blue-700/50">
          <Github size={20} className="text-blue-600 dark:text-blue-400" />
          <span className="text-gray-700 dark:text-gray-300">More projects available on my GitHub</span>
        </div>
      </div>

      {/* Inline CSS for underline animation */}
      <style jsx>{`
        @keyframes scaleX {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        .animate-scaleX {
          animation: scaleX 0.8s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </section>
  );
});

ProjectsPage.displayName = 'ProjectsPage';

export default ProjectsPage;