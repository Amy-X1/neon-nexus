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
  Mail,
  Sun,
  Moon
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
  const [theme, setTheme] = useState('dark');

  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

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
    <div className={`w-screen font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden transition-colors duration-500 ${isDark ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-teal-600/20 rounded-full blur-[120px] animate-pulse transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-40'}`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse delay-1000 transition-opacity duration-500 ${isDark ? 'opacity-100' : 'opacity-40'}`} />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled 
            ? (isDark ? 'bg-black/80 border-white/5' : 'bg-white/80 border-black/5') + ' backdrop-blur-md py-4' 
            : 'bg-transparent border-transparent py-6'
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
                className={`text-sm font-medium hover:text-cyan-400 transition-colors tracking-wide ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10 text-yellow-400' : 'hover:bg-black/5 text-gray-600'}`}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="px-6 py-2 bg-transparent border border-cyan-500/50 text-cyan-400 rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] text-sm font-bold tracking-wide">
              GET STARTED
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'text-yellow-400' : 'text-gray-600'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className={isDark ? 'text-white' : 'text-black'}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`absolute top-full left-0 w-full border-b p-6 flex flex-col gap-4 md:hidden backdrop-blur-xl ${isDark ? 'bg-black/95 border-white/10' : 'bg-white/95 border-gray-100'}`}>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-lg font-medium hover:text-cyan-400 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="mt-4 w-full py-3 bg-cyan-500 text-black font-bold rounded-lg">
             GET STARTED
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="container mx-auto flex flex-col items-center text-center relative z-10">
          <div className={`inline-block mb-6 px-4 py-1.5 rounded-full border backdrop-blur-sm ${isDark ? 'border-teal-500/30 bg-teal-500/10' : 'border-teal-500/20 bg-teal-50'}`}>
            <span className="text-teal-500 text-xs font-bold tracking-[0.2em] uppercase">The Future of Design</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-8 group">
            <span className={`block text-transparent bg-clip-text bg-gradient-to-b transition-all duration-500 ${isDark ? 'from-white to-gray-400 group-hover:to-gray-200' : 'from-gray-900 to-gray-500'}`}>
              WE ARE
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-[length:200%_auto] animate-gradient">
              CREATIVE
            </span>
            <span className={`block drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-colors duration-500 ${isDark ? 'text-white' : 'text-gray-900 drop-shadow-none'}`}>
              DESIGNERS
            </span>
          </h1>

          <p className={`max-w-2xl text-lg md:text-xl mb-12 leading-relaxed transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
            <button className={`px-8 py-4 bg-transparent border font-bold rounded-full transition-all flex items-center gap-2 ${isDark ? 'border-white/20 text-white hover:bg-white/5' : 'border-black/10 text-black hover:bg-black/5'}`}>
              VIEW WORK
            </button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className={`absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform -translate-y-1/2 transition-opacity ${isDark ? 'opacity-30' : 'opacity-10'}`}></div>
      </section>

      {/* Services Section */}
      <section id="services" className={`py-20 relative transition-colors duration-500 ${isDark ? 'bg-black/50' : 'bg-gray-100'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-teal-400">Expertise</span></h2>
              <div className="h-1 w-24 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
            </div>
            <p className={`max-w-sm mt-6 md:mt-0 text-right md:text-left transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Cutting-edge solutions for the digital age. We define the standard.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className={`group relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 
                  ${isDark 
                    ? 'bg-white/5 border-white/10 hover:border-cyan-500/50' 
                    : 'bg-white border-gray-200 shadow-sm hover:shadow-xl hover:border-cyan-200'
                  }`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 text-cyan-400 transition-all shadow-[0_0_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:bg-cyan-500 group-hover:text-white ${isDark ? 'bg-white/5' : 'bg-cyan-50'}`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 transition-colors ${isDark ? 'text-white group-hover:text-cyan-300' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed transition-colors ${isDark ? 'text-gray-400 group-hover:text-gray-300' : 'text-gray-600'}`}>
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
                <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent transition-colors duration-500 ${isDark ? 'from-black opacity-80' : 'from-white/50 opacity-40'}`}></div>
                
                {/* Floating Elements on Image */}
                <div className={`absolute bottom-8 left-8 p-4 backdrop-blur-md border rounded-xl ${isDark ? 'bg-black/40 border-white/10' : 'bg-white/40 border-white/40'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-sm font-mono ${isDark ? 'text-cyan-300' : 'text-cyan-900'}`}>SYSTEM STATUS: ONLINE</span>
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
              <div className={`space-y-6 text-lg transition-colors ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                  <h4 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>150+</h4>
                  <p className="text-sm text-cyan-400 uppercase tracking-widest">Projects Shipped</p>
                </div>
                <div>
                  <h4 className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>15+</h4>
                  <p className="text-sm text-cyan-400 uppercase tracking-widest">Global Awards</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="portfolio" className={`py-20 transition-colors duration-500 ${isDark ? 'bg-zinc-950' : 'bg-white'}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Selected <span className={isDark ? 'text-white/50' : 'text-gray-400'}>Works</span>
            </h2>
            <button className={`hidden md:flex items-center gap-2 hover:opacity-80 transition-opacity ${isDark ? 'text-cyan-400' : 'text-cyan-600'}`}>
              View All <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 shadow-lg">
                  <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className={`text-xl font-bold mb-1 transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-gray-900 group-hover:text-cyan-600'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{item.category}</p>
                  </div>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all ${isDark ? 'border-white/20' : 'border-black/20 text-black'}`}>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Footer CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-b pointer-events-none ${isDark ? 'from-transparent to-teal-900/10' : 'from-transparent to-teal-100/30'}`}></div>
        <div className="container mx-auto px-6 text-center">
          <h2 className={`text-5xl md:text-8xl font-black mb-8 select-none transition-colors ${isDark ? 'text-white/5' : 'text-gray-100'}`}>
            START NOW
          </h2>
          <div className="relative -mt-16 md:-mt-24 z-10">
            <h3 className={`text-3xl md:text-5xl font-bold mb-8 transition-colors ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to define the future?
            </h3>
            <button className="px-10 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-black font-bold rounded-full text-lg shadow-[0_0_50px_rgba(20,184,166,0.3)] hover:shadow-[0_0_80px_rgba(20,184,166,0.5)] hover:scale-105 transition-all">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t py-12 transition-colors duration-500 ${isDark ? 'bg-black border-white/10' : 'bg-gray-50 border-gray-200'}`}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold tracking-tighter flex items-center gap-2">
              <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
              NEON<span className="text-cyan-400">NEXUS</span>
            </div>

            <div className={`flex gap-8 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Careers</a>
            </div>

            <div className="flex gap-4">
              {[<Instagram />, <Twitter />, <Linkedin />, <Mail />].map((icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all 
                    ${isDark 
                      ? 'bg-white/5 text-gray-400 hover:bg-cyan-500 hover:text-black' 
                      : 'bg-white shadow-sm text-gray-500 hover:bg-cyan-500 hover:text-white'}`}
                >
                  {React.cloneElement(icon, { size: 18 })}
                </a>
              ))}
            </div>
          </div>
          <div className={`mt-8 text-center text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
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