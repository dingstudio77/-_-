
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Clock } from 'lucide-react';
import Home from './pages/Home.tsx';
import Portfolio from './pages/Portfolio.tsx';
import PortfolioDetail from './pages/PortfolioDetail.tsx';
import ServicePrice from './pages/ServicePrice.tsx';
import Process from './pages/Process.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Admin from './pages/Admin.tsx';
import { PortfolioItem } from './types.ts';
import { INITIAL_PORTFOLIO } from './constants.tsx';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Price', path: '/price' },
    { name: 'Process', path: '/process' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
            <span className="text-[#8b5cf6]">DING</span> STUDIO
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-sm font-bold transition-all ${location.pathname === item.path ? 'text-[#8b5cf6]' : 'text-slate-400 hover:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" className="bg-[#8b5cf6] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#7c3aed] transition-all shadow-lg shadow-purple-500/20">
              상담 신청
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300 overflow-hidden">
          <div className="px-4 pt-4 pb-8 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="block px-4 py-4 text-lg font-bold text-slate-300 hover:text-[#8b5cf6] border-b border-white/5"
              >
                {item.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full text-center bg-[#8b5cf6] text-white py-4 mt-6 rounded-2xl font-bold text-lg">
              무료 상담 신청
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0a0a] border-t border-white/10 pt-20 pb-24 text-slate-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="col-span-1 md:col-span-2 space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter text-white">
          <span className="text-[#8b5cf6]">DING</span> STUDIO
        </h2>
        <p className="max-w-sm leading-relaxed">
          예쁜 디자인을 넘어, 브랜드의 신뢰와 문의를 만드는 전략적 디자인 파트너입니다. 
          당신의 비즈니스를 더 가치 있게 만듭니다.
        </p>
        <div className="flex space-x-4">
          <div className="p-3 bg-white/5 rounded-xl"><Mail size={20} className="text-[#8b5cf6]" /></div>
          <div className="p-3 bg-white/5 rounded-xl"><Phone size={20} className="text-[#8b5cf6]" /></div>
        </div>
      </div>
      <div>
        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Quick Links</h3>
        <ul className="space-y-4 font-medium">
          <li><Link to="/portfolio" className="hover:text-[#8b5cf6] transition-colors">포트폴리오</Link></li>
          <li><Link to="/price" className="hover:text-[#8b5cf6] transition-colors">가격 및 서비스</Link></li>
          <li><Link to="/process" className="hover:text-[#8b5cf6] transition-colors">진행 프로세스</Link></li>
          <li><Link to="/admin" className="opacity-10 hover:opacity-100 transition-opacity">관리자</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Contact Info</h3>
        <div className="space-y-4 text-sm font-medium">
          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-[#8b5cf6]" />
            <span>design413_@naver.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Clock size={16} className="text-[#8b5cf6]" />
            <span>평일 10:00 - 18:00 (KST)</span>
          </div>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-xs opacity-40 font-bold uppercase tracking-widest">
      &copy; {new Date().getFullYear()} Ding Studio. All rights reserved.
    </div>
  </footer>
);

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem('ding_portfolio');
      if (!saved) return INITIAL_PORTFOLIO;
      const parsed = JSON.parse(saved);
      return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_PORTFOLIO;
    } catch (e) {
      console.warn("Storage data invalid, using defaults");
      return INITIAL_PORTFOLIO;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('ding_portfolio', JSON.stringify(portfolio));
    } catch (e) {
      console.error("Save error", e);
    }
  }, [portfolio]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#050505] text-white selection:bg-[#8b5cf6] selection:text-white">
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home portfolio={portfolio} />} />
            <Route path="/portfolio" element={<Portfolio portfolio={portfolio} />} />
            <Route path="/portfolio/:id" element={<PortfolioDetail portfolio={portfolio} />} />
            <Route path="/price" element={<ServicePrice />} />
            <Route path="/process" element={<Process />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin portfolio={portfolio} setPortfolio={setPortfolio} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
