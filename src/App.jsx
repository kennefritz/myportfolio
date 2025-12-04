import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, ChevronDown, Smartphone, Globe, BarChart3 } from 'lucide-react';

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const linkedInUrl = "https://www.linkedin.com/in/fritz-kenne-sankwe-a80619122/";
    const githubUrl = "https://github.com/kennefritz";
    const mailTo = "mailto:fritzkenne@gmail.com";

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
            title: "Analyse Fonctionnelle",
            icon: BarChart3,
            color: "from-green-400 to-emerald-500",
            skills: [
                { name: "Analyse des besoins", level: 85, icon: "🔍" },
                { name: "Modélisation UML", level: 80, icon: "📐" },
                { name: "Rédaction spécifications", level: 88, icon: "📝" },
                { name: "Gestion de projet Agile (Scrum / Kanban)", level: 82, icon: "🚀" }
            ]
        },
        {
            title: "Développement Mobile",
            icon: Smartphone,
            color: "from-purple-400 to-pink-500",
            subsections: [
                {
                    title: "Android Native",
                    skills: [
                        { name: "Kotlin", level: 75, icon: "🔷" },
                        { name: "Jetpack Compose", level: 80, icon: "🎨" },
                        { name: "Ecosystème Android", level: 98, icon: "🤖" },
                        { name: "Android Studio et ses outils", level: 90, icon: "🛠️" },
                        { name: "Maîtrise de Material Design & UX", level: 80, icon: "🎨" },
                        { name: "Android architecture components", level: 70, icon: "🏗️" },
                        { name: "Architectures Android : MVP, MVVM, MVC", level: 80, icon: "📊" },
                        { name: "Retrofit, Firebase, Moshi, Glide", level: 80, icon: "🔌" },
                        { name: "Programmation réactive : RxJava/RxKotlin", level: 60, icon: "⚡" },
                        { name: "Injection de dépendances Koin", level: 70, icon: "💉" },
                        { name: "Intégration continue (GitLab CI)", level: 60, icon: "🔄" },
                        { name: "Expertise async et multithread", level: 55, icon: "⚙️" },
                    ]
                },
                {
                    title: "Cross Platform",
                    skills: [
                        { name: "React Native", level: 88, icon: "⚛️" },
                        { name: "Connaissance de Xcode et ses outils", level: 60, icon: "🍎" },
                        { name: "Ecosystème IOS", level: 95, icon: "📱" },
                    ]
                }
            ]
        },
        {
            title: "Développement Full Stack Web",
            icon: Globe,
            color: "from-cyan-400 to-blue-500",
            skills: [
                { name: "ReactJS", level: 92, icon: "⚛️" },
                { name: "C#", level: 85, icon: "🔵" },
                { name: ".NET", level: 83, icon: "🟣" },
                { name: "JavaScript/TypeScript", level: 90, icon: "💛" },
                { name: "HTML/CSS", level: 88, icon: "🎨" }
            ]
        }
    ];

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white min-h-screen">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 transition-all duration-300"
                style={{
                    backgroundColor: scrollY > 50 ? 'rgba(30, 30, 70, 0.95)' : 'transparent',
                    backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none'
                }}>
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        &lt;Dev/&gt;
                    </div>
                    <div className="flex gap-8">
                        {['Accueil', 'À propos', 'Projets', 'Compétences', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="hover:text-emerald-400 transition-colors duration-300 relative group">
                                {item}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="accueil" className="min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" style={{ animationDelay: '3s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto px-6 text-center z-10">
                    <div className="mb-8 animate-fade-in">
                        <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                            Bonjour, je suis FRITZ
                        </h1>
                        <p className="text-3xl text-slate-200 mb-2 font-semibold">Développeur Web & Mobile / Analyste Fonctionnel</p>
                        <p className="text-xl text-slate-300">Je crée des expériences web et mobiles modernes et performantes</p>
                    </div>

                    <div className="flex gap-4 justify-center mb-12">
                        <a href="#projets" className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                            Voir mes projets
                        </a>
                        <a href="#contact" className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/20 hover:border-emerald-500 transition-all duration-300">
                            Me contacter
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center">
                        {[Github, Linkedin, Mail].map((Icon, i) => (
                            <a
                                key={i}
                                href={`${i === 0 ? githubUrl : i === 1 ? linkedInUrl : mailTo}`}
                                className="p-3 border-2 border-blue-500 rounded-lg hover:border-emerald-500 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                                target="_blank" rel="noopener noreferrer">
                                <Icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-emerald-400" />
                </div>
            </section>

            {/* About Section */}
            <section id="à-propos" className="py-24 px-6 bg-gradient-to-br from-blue-900/30 to-teal-900/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        À Propos de Moi
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                Passionné par le développement logiciel depuis plus de 5 ans, je combine expertise technique et vision fonctionnelle pour créer des solutions innovantes et performantes.
                            </p>

                            <p className="text-lg text-slate-300 leading-relaxed">
                                Mon parcours m'a permis de maîtriser aussi bien le développement mobile natif (Android/Kotlin) que cross-platform (React Native), ainsi que le développement web full-stack avec React et .NET.
                            </p>

                            <p className="text-lg text-slate-300 leading-relaxed">
                                En tant qu'analyste fonctionnel, je sais traduire les besoins métier en spécifications techniques claires, assurant ainsi la réussite des projets du concept à la mise en production.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border-2 border-blue-500 hover:border-emerald-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
                                    <div className="text-slate-300">Années d'expérience</div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border-2 border-blue-500 hover:border-emerald-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                                    <div className="text-3xl font-bold text-emerald-400 mb-2">20+</div>
                                    <div className="text-slate-300">Projets réalisés</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative z-10 bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl border-2 border-blue-500">
                                <h3 className="text-2xl font-bold mb-6 text-emerald-400">Ce que j'apporte</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Architecture et développement d'applications mobile performantes",
                                        "Conception d'interfaces utilisateur modernes et intuitives",
                                        "Développement d'API REST et intégration backend",
                                        "Analyse fonctionnelle et rédaction de spécifications",
                                        "Méthodologie Agile et gestion de projet",
                                        "Veille technologique et adoption de nouvelles technologies"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-200">
                                            <span className="text-emerald-400 text-xl mt-1">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-blue-500/30 to-emerald-500/30 rounded-2xl blur-xl"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projets" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-blue-900/50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Mes Projets
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, i) => (
                            <div key={i} className="group relative bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-2 border-2 border-blue-700 hover:border-emerald-500">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 text-emerald-400">{project.title}</h3>
                                    <p className="text-slate-300 mb-4">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, j) => (
                                            <span key={j} className="px-3 py-1 bg-blue-700 rounded-full text-sm text-emerald-300 border border-blue-500">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a href={project.link} className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 hover:gap-4 transition-all duration-300">
                                        Voir le projet <ExternalLink className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="compétences" className="py-24 px-6 bg-gradient-to-br from-blue-900/30 to-teal-900/20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Compétences
                    </h2>

                    <div className="space-y-12">
                        {skillsCategories.map((category, i) => {
                            const IconComponent = category.icon;
                            return (
                                <div key={i} className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl border-2 border-blue-600 hover:border-emerald-500 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300">
                                    <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                        <IconComponent className="w-10 h-10 text-emerald-400" />
                                        <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                                            {category.title}
                                        </span>
                                    </h3>

                                    {category.subsections ? (
                                        <div className="space-y-8">
                                            {category.subsections.map((subsection, j) => (
                                                <div key={j}>
                                                    <h4 className="text-xl font-semibold mb-4 text-emerald-400">
                                                        {subsection.title}
                                                    </h4>
                                                    <div className="grid md:grid-cols-2 gap-4">
                                                        {subsection.skills.map((skill, k) => (
                                                            <div key={k} className="bg-blue-800/50 p-4 rounded-lg hover:bg-blue-700/70 border border-blue-600 hover:border-emerald-500 transition-all duration-300">
                                                                <div className="flex justify-between items-center mb-2">
                                                                    <div className="flex items-center gap-2">
                                                                        <span className="text-xl">{skill.icon}</span>
                                                                        <span className="font-semibold text-slate-100">{skill.name}</span>
                                                                    </div>
                                                                    <span className="text-emerald-400 font-bold">{skill.level}%</span>
                                                                </div>
                                                                <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                                                                    <div
                                                                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
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
                                                <div key={j} className="bg-blue-800/50 p-4 rounded-lg hover:bg-blue-700/70 border border-blue-600 hover:border-emerald-500 transition-all duration-300">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xl">{skill.icon}</span>
                                                            <span className="font-semibold text-slate-100">{skill.name}</span>
                                                        </div>
                                                        <span className="text-emerald-400 font-bold">{skill.level}%</span>
                                                    </div>
                                                    <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                                                            style={{ width: `${skill.level}%` }}
                                                        ></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 px-6 bg-gradient-to-br from-slate-900 to-blue-900/50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Travaillons Ensemble
                    </h2>
                    <p className="text-xl text-slate-300 mb-12">
                        Vous avez un projet en tête ? N'hésitez pas à me contacter !
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="mailto:kennefritzon@gmail.com" className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 inline-flex items-center justify-center gap-2">
                            <Mail className="w-5 h-5" />
                            Envoyer un email
                        </a>
                        <a href="https://www.linkedin.com/in/fritz-kenne-sankwe-a80619122/" target='_blank' className="px-8 py-4 border-2 border-blue-500 rounded-lg font-semibold hover:bg-blue-500/20 hover:border-emerald-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 inline-flex items-center justify-center gap-2">
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-8 px-6 border-t-2 border-blue-800 bg-gradient-to-br from-blue-900 to-slate-900">
                <div className="max-w-6xl mx-auto text-center text-slate-300">
                    <p>&copy; 2025 Fritz Kenne Developer. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    );
}