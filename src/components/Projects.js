import { Book, ChevronDown, ChevronUp, Edit3, ExternalLink, FileText, Github, HelpCircle, Layers, Mail, MessageCircle, Music, Star } from 'lucide-react';
import { forwardRef, useState } from 'react';

const ProjectsPage = forwardRef((props, ref) => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const projects = [
    {
      icon: Layers, name: "MultiMind: An AI-Powered Research Assistant", tags: ["Django", "React", "AI Agents", "Semantic Search", "MongoDB"], shortDescription: "An AI-powered research assistant with multiple fine-tuned agents working together in a pipeline.", fullDescription: " MultiMind is a full-stack AI research assistant built around a modular multi-agent architecture. The Research Agent leverages a pretrained semantic search model to retrieve relevant documents from a dedicated MongoDB knowledge base containing around 7,000 research documents. Four other key agents—Curation, Summarization, RAG Q&A, and Writing—were all fine-tuned by me to work seamlessly together.The Curation Agent analyzes retrieved content and assigns structured topic tags to organize research outputs, making them easier to navigate.The Summarization Agent condenses lengthy content into clear and concise summaries, preserving key information.The RAG Q& A Agent produces fact - based answers strictly grounded in the retrieved documents, ensuring accuracy and reliability.The Writing Agent refines the output into polished, coherent text suitable for reading or presentation.The Question Generation Agent suggests relevant follow - up questions to help users explore related topics, similar to a 'People Also Searched For' feature.The workflow begins when a user submits a query.The Research Agent retrieves relevant documents using semantic search.The Curation Agent organizes the content with topic tags, the Summarization Agent condenses it, the RAG Q & A Agent generates factual answers, and the Writing Agent produces polished outputs.Finally, the Question Generation Agent proposes follow - up questions to guide deeper exploration.Together, these agents form an interactive, scalable, and fully integrated research platform built with a Django backend and a React frontend.",
      github: "https://github.com/your-repo/multimind", demo: "#", color: "from-blue-500 to-cyan-500", featured: true
    },



    {
      icon: FileText,
      name: "EchoSum: AI-Powered Audio Transcription & Summarization",
      tags: ["Django", "Celery", "Whisper AI", "MongoDB", "Redis"],
      shortDescription: "An AI-powered system that transcribes, summarizes, and organizes uploaded audio content with intelligent processing.",
      fullDescription: "EchoSum is an AI- powered system that transcribes, summarizes, and organizes audio recordings through an intuitive upload - and - process workflow.Users manually upload audio files(lectures, podcasts, interviews, meetings), then trigger processing to generate speaker - aware transcripts and concise executive summaries with key points.The system leverages OpenAI's Whisper for accurate speech-to-text conversion with timestamps, and all-mpnet-base-v2 for text embeddings. Built with Django REST framework and Celery for asynchronous task processing, it efficiently handles long audio files in the background. Transcripts and summaries are stored in MongoDB for later retrieval, with Redis serving as the message broker. The pipeline—from upload to transcription to summarization—delivers structured, searchable insights on demand.",
      github: "https://github.com/AADARSHA875/EchoSum.git",
      demo: "",
      color: "from-rose-500 to-pink-500",
      featured: true
    },
    {
      icon: Music,
      name: "MoodMate",
      tags: ["NLP", "Emotion Detection", "Flask", "Spotify API", "Transformers"],
      shortDescription: "A mood-aware music recommendation system that detects emotions from text and suggests personalized Spotify playlists.",
      fullDescription: `MoodMate is an intelligent music recommendation system that analyzes user text input to detect emotions and suggests songs accordingly. I fine-tuned a BERT-base-uncased model on the GoEmotions dataset (28 emotion labels) using Hugging Face Transformers, achieving accurate multi-label emotion classification. The system processes user text through the fine-tuned model, identifies top emotions with confidence scores, and maps them to emojis for visual feedback. Users then select their preferred music "intent" (uplifting, chill, energetic, soothing, emotional), and the application queries the Spotify API to fetch relevant tracks based on emotion-intent mappings. Each recommendation includes both Spotify and YouTube links for accessibility. Built with Flask backend and custom frontend templates, the application handles the complete pipeline: text input → emotion detection → intent selection → song recommendations → dual-platform music links. `,
      github: "https://github.com/your-repo/moodmate", // Add your GitHub repo link here
      demo: "https://mood.aadarshachaulagain.com.np",
      color: "from-orange-500 to-red-500",
      featured: true
    },
    {
      icon: MessageCircle,
      name: "DeepScript: Context-Aware Screenplay Dialogue Generator",
      tags: ["GPT-2", "Emotion Analysis", "React", "Django", "NLP"],
      shortDescription: "A full-stack dialogue generation and emotion analysis system combining multiple deep learning models.",
      fullDescription: `DeepScript is a full-stack dialogue generation and emotion analysis system that combines multiple deep learning models into a single platform. I fine-tuned GPT-2 on a hybrid dataset of screenplays and Cornell dialogues to generate context-aware conversations, and fine-tuned another GPT-2 variant on emotion-tagged dialogues to produce emotionally driven outputs. Additionally, I utilized an emotion detection model fine tuned by myself to annotate over 300,000 dialogues from the Cornell Movie-Dialogs Corpus. The pipeline spans data preparation, fine-tuning, and deployment into a React frontend with a Django backend. Through this project, I learned how to combine diverse datasets for richer model performance, train specialized models for complementary NLP tasks, and bridge the gap between raw model training and real-world full-stack deployment.`,
      github: "https://github.com/AADARSHA875/DEEPSCRIPT_WITH_DIALOGUE_GENERATION.git",

      color: "from-purple-500 to-pink-500",
      featured: true
    },
    {
      icon: Book,
      name: "Book Recommender",
      tags: ["Django", "Hybrid ML", "Collaborative Filtering", "Content-Based", "TF-IDF"],
      shortDescription: "A sophisticated hybrid book recommendation engine combining four different ML approaches for personalized suggestions.",
      fullDescription: `Developed a comprehensive hybrid book recommendation system that combines four distinct recommendation strategies: ratings-based collaborative filtering, category-based similarity, audience-age matching, and content-based TF-IDF analysis on book summaries. Built with Django, the system features user authentication, personalized genre selection during onboarding, and fuzzy string matching for typo-tolerant searches. The recommendation pipeline processes user queries through parallel algorithms, weights the results, and returns deduplicated suggestions with book cover images. Key technical implementations include TF-IDF vectorization for text features, cosine similarity calculations and session-based recommendation storage. The platform offers multiple browsing modes (ratings, category, age, content) and maintains search history for authenticated users, delivering a robust, production-ready book discovery experience.`,
      github: "https://github.com/AADARSHA875/clear-inbox.git",
      demo: "book.aadarshachaulagain.com.np",
      color: "from-amber-500 to-yellow-500",
      featured: true
    },
    {
      icon: FileText,
      name: "SmartDoc Q&A",
      tags: ["RAG", "Vector DB", "Embeddings"],
      shortDescription: "A Retrieval-Augmented Generation system for intelligent question answering.",
      fullDescription: `Developed a Retrieval-Augmented Generation (RAG) system that intelligently answers user questions by retrieving relevant information from a custom knowledge base. This system employs advanced embedding techniques for efficient similarity search and a large language model for synthesizing coherent and contextually relevant answers.`,
      github: "https://github.com/AADARSHA875/RAG-project.git",

      color: "from-emerald-500 to-green-500",
      featured: true
    },
    {
      icon: Edit3,
      name: "Shakespearean Text Generator (Character-Level GRU)",
      tags: ["TensorFlow", "Keras", "GRU", "NLP"],
      shortDescription: "A deep learning project that generates Shakespeare-style text using a GRU architecture.",
      fullDescription: `A deep learning project that generates Shakespeare-style text at the character level using a GRU architecture. The model was trained on the Shakespeare corpus and built from scratch with TensorFlow/Keras. The pipeline included preprocessing, sequence batching, vectorization, and sampling. Temperature-controlled sampling was implemented to balance creativity and coherence in the generated outputs. This project reinforced my understanding of sequence modeling with GRUs, character-level text generation, and TensorFlow optimization techniques.`,
      github: "https://github.com/AADARSHA875/character_level_text_generation.git",

      color: "from-green-500 to-teal-500",
      featured: true,
    },

    {
      icon: Mail,
      name: "ClearInbox",
      tags: ["Machine Learning", "Text Classification"],
      shortDescription: "A web-based application that helps users identify spam messages.",
      fullDescription: `ClearInbox is a web-based application that helps users identify whether a message is spam or not. The system uses a trained machine learning classifier to predict spam probability based on user input.`,
      github: "https://github.com/AADARSHA875/clear-inbox.git",

      color: "from-indigo-500 to-blue-500",
      featured: false
    },


    {
      icon: HelpCircle,
      name: "QA System (SQuAD v2)",
      tags: ["Transformers", "HuggingFace", "Deep Learning"],
      shortDescription: "A deep learning-based Question Answering model fine-tuned on SQuAD v2.",
      fullDescription: `Developed a deep learning-based Question Answering (QA) model capable of extracting precise answers from provided textual contexts. This system utilizes a transformer-based model fine-tuned on the SQuAD v2 dataset. The implementation includes advanced data preprocessing for batched operations and robust handling of unanswerable questions.`,
      github: "https://github.com/AADARSHA875/Extractive-question-answering.git",

      color: "from-violet-500 to-purple-500",
      featured: false
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen px-4 sm:px-8 py-16 mx-auto max-w-7xl font-inter bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300"
    >



      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => {
          const IconComponent = project.icon;
          return (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >

              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>

                {/* Title and Tags Container - Modified for better badge handling */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 flex-1">
                      {project.name}
                    </h3>

                    {/* Featured Badge - Now positioned with flexbox instead of absolute */}
                    {project.featured && (
                      <div className="flex-shrink-0">
                        <div className="flex items-center gap-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap">
                          <Star size={14} className="fill-current" />
                          Featured
                        </div>
                      </div>
                    )}
                  </div>

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