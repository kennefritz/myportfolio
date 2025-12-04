import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Application full-stack avec React, Node.js et MongoDB",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      link: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif avec visualisation de données",
      tech: ["React", "D3.js", "TailwindCSS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      link: "#"
    },
    {
      title: "App Mobile Social",
      description: "Application mobile cross-platform avec React Native",
      tech: ["React Native", "Firebase", "Redux"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
      link: "#"
    }
  ];

  const skillsCategories = [
    {
      title: "Développement Mobile",
      icon: "📱",
      subsections: [
        {
          title: "Android",
          skills: [
            { name: "Kotlin", level: 90 },
            { name: "Jetpack Compose", level: 85 }
          ]
        },
        {
          title: "Cross Platform",
          skills: [
            { name: "React Native", level: 88 }
          ]
        }
      ]
    },
    {
      title: "Développement Full Stack Web",
      icon: "🌐",
      skills: [
        { name: "ReactJS", level: 92 },
        { name: "C#", level: 85 },
        { name: ".NET", level: 83 },
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "HTML/CSS", level: 88 }
      ]
    },
    {
      title: "Analyste Fonctionnel",
      icon: "📊",
      skills: [
        { name: "Analyse des besoins", level: 85 },
        { name: "Modélisation UML", level: 80 },
        { name: "Rédaction spécifications", level: 88 },
        { name: "Gestion de projet Agile", level: 82 }
      ]
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 transition-all duration-300" 
           style={{
             backgroundColor: scrollY > 50 ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
             backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
           }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            &lt;Dev/&gt;
          </div>
          <div className="flex gap-8">
            {['Accueil', 'Projets', 'Compétences', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                 className="hover:text-cyan-400 transition-colors duration-300 relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center z-10">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Bonjour, je suis Alex
            </h1>
            <p className="text-3xl text-slate-300 mb-2">Développeur Full Stack</p>
            <p className="text-xl text-slate-400">Je crée des expériences web modernes et performantes</p>
          </div>
          
          <div className="flex gap-4 justify-center mb-12">
            <a href="#projets" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1">
              Voir mes projets
            </a>
            <a href="#contact" className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300">
              Me contacter
            </a>
          </div>

          <div className="flex gap-6 justify-center">
            {[Github, Linkedin, Mail].map((Icon, i) => (
              <a key={i} href="#" className="p-3 border border-slate-700 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group relative bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-cyan-400">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-cyan-400 border border-slate-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.link} className="inline-flex items-center gap-2 text-cyan-400 hover:gap-4 transition-all duration-300">
                    Voir le projet <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-24 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Compétences
          </h2>
          
          <div className="space-y-12">
            {skillsCategories.map((category, i) => (
              <div key={i} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {category.title}
                  </span>
                </h3>
                
                {category.subsections ? (
                  <div className="space-y-8">
                    {category.subsections.map((subsection, j) => (
                      <div key={j}>
                        <h4 className="text-xl font-semibold mb-4 text-cyan-400">
                          {subsection.title}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {subsection.skills.map((skill, k) => (
                            <div key={k} className="bg-slate-800/50 p-4 rounded-lg">
                              <div className="flex justify-between mb-2">
                                <span className="font-semibold">{skill.name}</span>
                                <span className="text-cyan-400">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                                <div 
                                  className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                                  style={{ width: `${skill.level}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.skills.map((skill, j) => (
                      <div key={j} className="bg-slate-800/50 p-4 rounded-lg">
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Travaillons Ensemble
          </h2>
          <p className="text-xl text-slate-400 mb-12">
            Vous avez un projet en tête ? N'hésitez pas à me contacter !
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:contact@exemple.com" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Envoyer un email
            </a>
            <a href="#" className="px-8 py-4 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300 inline-flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2024 Alex Developer. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}