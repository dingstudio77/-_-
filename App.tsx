
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import PortfolioDetail from './pages/PortfolioDetail';
import ServicePrice from './pages/ServicePrice';
import Process from './pages/Process';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import { PortfolioItem } from './types';
import { INITIAL_PORTFOLIO } from './constants';

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
    <nav className="sticky top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/10">
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
                className={`text-sm font-medium transition-colors ${location.pathname === item.path ? 'text-[#8b5cf6]' : 'text-slate-400 hover:text-white'}`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link 
              to="/admin" 
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors border border-white/10 px-2 py-1 rounded hover:border-[#8b5cf6] ${location.pathname === '/admin' ? 'text-[#8b5cf6]' : 'text-slate-600 hover:text-slate-400'}`}
            >
              Admin
            </Link>

            <Link to="/contact" className="bg-[#8b5cf6] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#7c3aed] transition-all shadow-lg shadow-purple-500/20">
              무료 상담 신청
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-[#8b5cf6] hover:bg-white/5 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
            
            <Link 
              to="/admin" 
              onClick={() => setIsOpen(false)}
              className="block px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600 hover:text-[#8b5cf6]"
            >
              Admin Access
            </Link>

            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#8b5cf6] text-white px-4 py-3 rounded-lg text-base font-semibold"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold tracking-tighter text-white mb-6">
            <span className="text-[#8b5cf6]">DING</span> STUDIO
          </h2>
          <p className="text-slate-400 max-w-sm mb-8">
            예쁜 디자인을 넘어, 브랜드의 신뢰와 문의를 만드는 디자인 파트너입니다.<br/>
            로고부터 홈페이지까지 전략적으로 기획합니다.
          </p>
          <div className="flex space-x-4">
            <a href="mailto:design413_@naver.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8b5cf6] transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/portfolio" className="hover:text-white transition-colors">포트폴리오</Link></li>
            <li><Link to="/price" className="hover:text-white transition-colors">가격 및 서비스</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">진행 프로세스</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">스튜디오 소개</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li>서울특별시 강남구 테헤란로 123</li>
            <li>010-1234-5678</li>
            <li>평일 10:00 - 18:00 (점심 12:00 - 13:00)</li>
          </ul>
          <Link to="/admin" className="text-xs text-white/10 hover:text-[#8b5cf6] mt-8 block transition-colors">Admin Access</Link>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        &copy; {new Date().getFullYear()} Ding Studio. All rights reserved.
      </div>
    </div>
  </footer>
);

const MobileCTA = () => (
  <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
    <Link to="/contact" className="flex items-center justify-center space-x-2 bg-[#8b5cf6] text-white px-8 py-4 rounded-full font-bold shadow-2xl shadow-purple-500/40 hover:scale-105 active:scale-95 transition-all">
      <span>무료 상담 신청하기</span>
      <ArrowRight size={20} />
    </Link>
  </div>
);

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('ding_portfolio');
    return saved ? JSON.parse(saved) : INITIAL_PORTFOLIO;
  });

  useEffect(() => {
    localStorage.setItem('ding_portfolio', JSON.stringify(portfolio));
  }, [portfolio]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#050505] text-white">
        <Header />
        <main className="flex-grow">
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
        <MobileCTA />
      </div>
    </Router>
  );
};

export default App;
