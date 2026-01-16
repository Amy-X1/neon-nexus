import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Code, 
  Smartphone, 
  Palette, 
  Camera, 
  ArrowRight, 
  ChevronRight,
  Instagram,
  Twitter,
  Linkedin,
  Mail
} from 'lucide-react';

/* OFFLINE IMAGE SETUP INSTRUCTIONS:
  1. Download the images from the URLs below.
  2. Save them to your project's 'public' folder (e.g., create a folder named 'assets').
  3. Update the paths in the IMAGES object below to match your local files.
     Example: portrait: '/assets/portrait.jpg'
*/
const IMAGES = {
  portrait: 'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80&w=1000',
  portfolio1: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
  portfolio2: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800',
  portfolio3: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
  ];

  const services = [
    {
      title: 'Website Design',
      desc: 'Immersive web experiences built with modern technologies and stunning aesthetics.',
      icon: <Code size={32} />,
    },
    {
      title: 'Mobile App',
      desc: 'Native and cross-platform mobile applications designed for performance and usability.',
      icon: <Smartphone size={32} />,
    },
    {
      title: 'UI/UX Design',
      desc: 'User-centric interfaces that blend functionality with breathtaking visual design.',
      icon: <Palette size={32} />,
    },
    {
      title: 'Photo Editing',
      desc: 'High-end retouching and creative manipulation to bring your visuals to life.',
      icon: <Camera size={32} />,
    },
  ];

  const portfolioItems = [
    { id: 1, title: 'Neon Dreams', category: 'Web Design', img: IMAGES.portfolio1 },
    { id: 2, title: 'Cyber Interface', category: 'UI/UX', img: IMAGES.portfolio2 },
    { id: 3, title: 'Future Tech', category: 'Branding', img: IMAGES.portfolio3 },
  ];

  return (
    <div className="w-screen text-white font-sans selection:bg-cyan-500 selection:text-black relative">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
            <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
            NEON<span className="text-cyan-400">NEXUS</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button className="px-6 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] text-sm font-bold tracking-wide">
              LET'S TALK
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 p-6 flex flex-col gap-4 md:hidden backdrop-blur-xl">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-gray-300 hover:text-cyan-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 w-full py-3 bg-cyan-500 text-black font-bold rounded-lg">
              LET'S TALK
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto flex flex-col items-center text-center relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-sm">
            <span className="text-teal-300 text-xs font-bold tracking-[0.2em] uppercase">The Future of Design</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 group">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 group-hover:to-gray-200 transition-all duration-500">
              WE ARE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%_auto] animate-gradient">
              CREATIVE
            </span>
            <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              DESIGNERS
            </span>
          </h1>

          <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
            We craft digital experiences that merge art with technology. 
            Elevating brands through futuristic interfaces and immersive interactions.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <button className="group relative px-8 py-4 bg-cyan-500 text-black font-bold rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                START PROJECT <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/40 transition-all flex items-center gap-2">
              VIEW WORK
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-1/2 opacity-30"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-teal-400">Expertise</span></h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-sm mt-6 md:mt-0 text-right md:text-left">
              Cutting-edge solutions for the digital age. We define the standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Digital Portrait Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image Side */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-[2rem] blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] md:aspect-square">
                <img 
                  src={IMAGES.portrait} 
                  alt="Digital Creative" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Elements on Image */}
                <div className="absolute bottom-8 left-8 p-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-cyan-300">SYSTEM STATUS: ONLINE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Architecting the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Digital Reality</span>
              </h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  We are a collective of visionaries, coders, and artists obsessed with the future. 
                  In a world of noise, we create the signal.
                </p>
                <p>
                  Our design philosophy is rooted in minimalism, elevated by technology. 
                  Every pixel serves a purpose; every interaction tells a story.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">150+</h4>
                  <p className="text-sm text-cyan-400 uppercase tracking-widest">Projects Shipped</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white mb-1">15+</h4>
                  <p className="text-sm text-cyan-400 uppercase tracking-widest">Global Awards</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="portfolio" className="py-20 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold">Selected <span className="text-white/50">Works</span></h2>
            <button className="hidden md:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors">
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4">
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer CTA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-900/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black text-white/5 mb-8 select-none">
            START NOW
          </h2>
          <div className="relative -mt-16 md:-mt-24 z-10">
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Ready to define the future?</h3>
            <button className="px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold rounded-full text-lg shadow-[0_0_50px_rgba(20,184,166,0.3)] hover:shadow-[0_0_80px_rgba(20,184,166,0.5)] hover:scale-105 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              NEON<span className="text-cyan-400">NEXUS</span>
            </div>

            <div className="flex gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Careers</a>
            </div>

            <div className="flex gap-4">
              {[<Instagram />, <Twitter />, <Linkedin />, <Mail />].map((icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-cyan-500 hover:text-black transition-all">
                  {React.cloneElement(icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-xs text-gray-600">
            © 2024 NeonNexus Agency. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Custom Styles for Animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 6s ease infinite;
        }
      `}} />
    </div>
  );
};

export default App;