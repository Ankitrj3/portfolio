import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Github, 
  Linkedin,
  Download,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Calendar,
  GraduationCap,
  Briefcase,
  User,
  ChevronDown,
  Star,
  BookOpen,
  Zap
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = {
    "Programming Languages": ["Java", "Python", "JavaScript", "TypeScript", "C++"],
    "Web Technologies": ["React.js", "Node.js", "Express.js", "HTML5", "CSS3", "Bootstrap"],
    "Databases": ["MySQL", "MongoDB", "PostgreSQL"],
    "Cloud & DevOps": ["AWS", "Docker", "Git", "GitHub"],
    "Tools & Frameworks": ["Spring Boot", "RESTful APIs", "Microservices", "Agile/Scrum"]
  };

  const projects = [
    {
      title: "NebulaPDF",
      description: "A comprehensive PDF management system with advanced features for document processing, annotation, and collaboration.",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      github: "https://github.com/Ankitrj3/nebulapdf",
      features: ["PDF Processing", "Real-time Collaboration", "Document Annotation", "Cloud Storage"]
    },
    {
      title: "Web-a-thon Project",
      description: "An innovative web application developed during a hackathon, showcasing modern web development practices and creative problem-solving.",
      tech: ["JavaScript", "HTML5", "CSS3", "Bootstrap"],
      github: "https://github.com/Ankitrj3/web-a-thon",
      features: ["Responsive Design", "Interactive UI", "Performance Optimized", "Cross-browser Compatible"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-900">Ankit Ranjan</div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'skills', 'education', 'certifications', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-200 hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-teal-900/10"></div>
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center text-white text-4xl font-bold shadow-xl">
              AR
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 animate-fade-in">
              Ankit Ranjan
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
              Software Developer & Full Stack Engineer
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12 animate-fade-in-delay-2">
              Passionate about creating innovative software solutions with expertise in Java, Python, 
              and modern web technologies. Experienced in building scalable applications and working with cloud platforms.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <a 
              href="https://github.com/ankitrj3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
            >
              <Github size={20} />
              View GitHub
            </a>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Dedicated Software Developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a passionate software developer with strong expertise in Java, Python, and modern web technologies. 
                Currently pursuing my Bachelor's degree in Computer Science and Engineering, I have hands-on experience 
                in building full-stack applications and working with cloud platforms.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                My technical journey includes developing innovative projects like NebulaPDF and participating in hackathons. 
                I'm committed to writing clean, efficient code and staying updated with the latest industry trends and best practices.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
                  <div className="text-3xl font-bold text-teal-600 mb-2">3+</div>
                  <div className="text-gray-600">Years Learning</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Code className="text-blue-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Development</h4>
                <p className="text-gray-600">Java, Python, React.js, Node.js, Express.js</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Database className="text-teal-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Database Management</h4>
                <p className="text-gray-600">MySQL, MongoDB, PostgreSQL</p>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <Server className="text-orange-600 mb-4" size={32} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Cloud & DevOps</h4>
                <p className="text-gray-600">AWS, Docker, Git, Microservices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Software Development Projects</h3>
                    <div className="flex items-center text-blue-600 mb-2">
                      <Code size={18} className="mr-2" />
                      <span className="font-semibold">Personal & Academic Projects</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2" />
                    <span>2024 - Present</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Developed multiple full-stack applications using modern technologies including React.js, Node.js, 
                  and various databases. Focused on creating user-friendly interfaces and robust backend systems.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center text-green-600">
                    <Award size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Award size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Cloud Integration</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Award size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Database Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Academic Excellence</h3>
                    <div className="flex items-center text-blue-600 mb-2">
                      <BookOpen size={18} className="mr-2" />
                      <span className="font-semibold">Computer Science & Engineering</span>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Calendar size={18} className="mr-2" />
                    <span>2023 - Present</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Pursuing Bachelor's degree with focus on software engineering, data structures, algorithms, 
                  and modern development practices. Active participation in coding competitions and hackathons.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-center text-green-600">
                    <Award size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Strong Academic Performance</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Award size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Hackathon Participation</span>
                  </div>
                  <div className="flex items-center text-green-600">
                    <Award size={16} className="mr-2 flex-shrink-0" />
                    <span className="text-sm">Continuous Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2 border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-teal-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
                    >
                      <Github size={24} />
                    </a>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <Zap size={12} className="mr-2 text-blue-500" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                  >
                    <Github size={16} className="mr-2" />
                    View on GitHub
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => {
              const colors = [
                "from-blue-50 to-blue-100",
                "from-teal-50 to-teal-100", 
                "from-orange-50 to-orange-100",
                "from-purple-50 to-purple-100",
                "from-green-50 to-green-100"
              ];
              const iconColors = [
                "text-blue-600",
                "text-teal-600",
                "text-orange-600", 
                "text-purple-600",
                "text-green-600"
              ];
              
              return (
                <div key={index} className={`p-6 bg-gradient-to-br ${colors[index % colors.length]} rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex items-center mb-4">
                    <Code className={`${iconColors[index % iconColors.length]} mr-3`} size={32} />
                    <h3 className="text-xl font-bold text-gray-900">{category}</h3>
                  </div>
                  <div className="space-y-2">
                    {skillList.map((skill, i) => (
                      <div key={i} className="flex items-center">
                        <Star size={12} className={`${iconColors[index % iconColors.length]} mr-2`} />
                        <span className="text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start">
                <div className="bg-blue-600 rounded-full p-3 mr-6">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Bachelor of Technology</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-2">Computer Science and Engineering</p>
                  <p className="text-gray-600 mb-4">2021 - 2026 (Expected)</p>
                  <p className="text-gray-700 leading-relaxed">
                    Pursuing comprehensive education in computer science fundamentals including data structures, 
                    algorithms, software engineering, database systems, and modern programming paradigms. 
                    Active participation in coding competitions and technical projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <Award className="text-blue-600 mr-3" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Microsoft Azure Developer Associate</h3>
                  <p className="text-blue-600 font-semibold">Microsoft</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Certified in developing and maintaining cloud applications on Microsoft Azure platform, 
                including compute solutions, storage, and security implementation.
              </p>
              <a 
                href="https://learn.microsoft.com/en-us/users/ankitranjan-4974/credentials/497681d1f1e38ba0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                View Certificate
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>

            <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="flex items-center mb-4">
                <Award className="text-orange-600 mr-3" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Oracle Cloud Infrastructure 2024 Generative AI Certified Professional </h3>
                  <p className="text-orange-600 font-semibold">Oracle</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                The Oracle Cloud Infrastructure 2024 Generative AI Professional certification is designed for Software Developers, Machine Learning/AI Engineers, and Gen AI Professionals. The prerequisite for this course includes a basic understanding of Machine Learning and Deep Learning concepts and experience with Python language. Individuals who earn this credential have a strong understanding of the Large Language Models (LLMs) and are skilled at using OCI Generative AI Service. They are also familiar with techniques such as Retrieval-Augmented Generation, Semantic Search, Vector database, and LangChain, to build, trace, evaluate, and deploy LLM applications.
              </p>
              <a 
                href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=31D0ED18A02BD77CBBCB0DA872BE2E9E32E6F3405FA04BFDAB212EF1B0928916"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-orange-600 hover:text-orange-700 font-semibold transition-colors duration-200"
              >
                View Certificate
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-teal-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Let's discuss how we can work together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">ankitrobinranjan@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-blue-100">India</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4 mt-8">
                <a 
                  href="https://github.com/ankitrj3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="http://www.linkedin.com/in/ankitrj3" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors duration-200"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-200 placeholder-blue-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-200 placeholder-blue-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full p-4 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-200 placeholder-blue-200 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 py-4 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Ankit Ranjan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;