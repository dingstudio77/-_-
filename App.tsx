
import React, { useState, useEffect, Component, ErrorInfo, ReactNode } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Clock, AlertTriangle, RefreshCw } from 'lucide-react';
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

// --- Error Boundary Component ---
interface Props { children: ReactNode; }
interface State { hasError: boolean; }

// Fix: Explicitly extend React.Component with defined Props and State interfaces
// to ensure TypeScript correctly identifies the 'props' property.
class ErrorBoundary extends React.Component<Props, State> {
  public state: State = { hasError: false };
  public static getDerivedStateFromError(_: Error): State { return { hasError: true }; }
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }
  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 text-center">
          <div className="max-w-md space-y-6">
            <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle size={40} />
            </div>
            <h1 className="text-2xl font-black">화면을 불러오지 못했습니다.</h1>
            <p className="text-slate-400">데이터를 불러오는 중 오류가 발생했습니다. 브라우저 저장소를 초기화하거나 새로고침 해주세요.</p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => window.location.reload()} 
                className="bg-[#8b5cf6] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                <RefreshCw size={18} /> 페이지 새로고침
              </button>
              <button 
                onClick={() => { localStorage.removeItem('ding_portfolio'); window.location.reload(); }} 
                className="bg-white/5 text-slate-400 py-3 rounded-xl font-bold text-sm"
              >
                데이터 초기화 후 복구
              </button>
            </div>
          </div>
        </div>
      );
    }
    // Return children via this.props as expected in a React class component
    return this.props.children;
  }
}

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
            
            <div className="flex items-center space-x-6 border-l border-white/10 pl-6 ml-2">
              <Link 
                to="/admin" 
                className="text-[10px] font-bold text-slate-600 hover:text-slate-400 transition-colors uppercase tracking-widest"
              >
                Admin
              </Link>
              <Link to="/contact" className="bg-[#8b5cf6] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#7c3aed] transition-all shadow-lg shadow-purple-500/20">
                상담 신청
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden">
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
            <div className="text-center pt-6">
              <Link to="/admin" onClick={() => setIsOpen(false)} className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.3em]">
                Admin Access
              </Link>
            </div>
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
        <p className="max-w-sm leading-relaxed text-sm">
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
        <ul className="space-y-4 font-medium text-sm">
          <li><Link to="/portfolio" className="hover:text-[#8b5cf6]">포트폴리오</Link></li>
          <li><Link to="/price" className="hover:text-[#8b5cf6]">가격 및 서비스</Link></li>
          <li><Link to="/process" className="hover:text-[#8b5cf6]">진행 프로세스</Link></li>
          <li><Link to="/admin" className="text-slate-600 text-xs hover:text-[#8b5cf6]">관리자 모드</Link></li>
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
      &copy; {new Date().getFullYear()} Ding Studio.
    </div>
  </footer>
);

const App: React.FC = () => {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(() => {
    try {
      const saved = localStorage.getItem('ding_portfolio');
      if (!saved) return INITIAL_PORTFOLIO;
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // 필수 필드(id, title)가 있는지 검증
        return parsed.filter(item => item && item.id && item.title);
      }
      return INITIAL_PORTFOLIO;
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
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
};

export default App;
