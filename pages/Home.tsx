
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Plus, Minus, Star } from 'lucide-react';
import { PortfolioItem } from '../types.ts';
import { REVIEWS, FAQ_ITEMS } from '../constants.tsx';

interface HomeProps {
  portfolio: PortfolioItem[];
}

const FAQAccordion: React.FC<{ question: string, answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left group hover:text-[#8b5cf6] transition-colors"
      >
        <span className="text-lg md:text-xl font-bold">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={24} className="text-[#8b5cf6]" /> : <Plus size={24} />}
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-400 leading-relaxed text-base md:text-lg whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ portfolio = [] }) => {
  const safePortfolio = Array.isArray(portfolio) ? portfolio : [];
  const featuredWorks = safePortfolio.slice(0, 6);
  const displayReviews = Array.isArray(REVIEWS) ? [...REVIEWS, ...REVIEWS] : [];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-48 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#8b5cf6]/10 border border-[#8b5cf6]/20 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse" />
              <span className="text-[10px] font-bold text-[#8b5cf6] uppercase tracking-[0.2em]">Strategy First Design Studio</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[1.1]">
              매출을 만드는<br/>
              <span className="text-[#8b5cf6]">디자인의 힘</span>을<br className="hidden sm:block"/> 믿으세요.
            </h1>
            <p className="text-base md:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              단순히 '보기 좋은' 결과물을 넘어,<br className="hidden md:block"/>
              고객이 당신의 브랜드를 신뢰하고 선택하게 만드는<br className="hidden md:block"/>
              구조적 디자인을 제안합니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/contact" className="bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#7c3aed] transition-all shadow-xl shadow-purple-500/30 hover:scale-105 active:scale-95">
                무료 상담 시작하기
              </Link>
              <Link to="/portfolio" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/10 transition-all">
                포트폴리오 보기
              </Link>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-slate-800 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 font-bold">150+ 브랜드와 함께했습니다.</p>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Design 1" />
               </div>
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 mt-12 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Design 2" />
               </div>
             </div>
             <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#8b5cf6]/20 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 text-left">
              <span className="text-[#8b5cf6] font-black uppercase text-xs tracking-widest">Portfolio</span>
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">Featured Works</h2>
              <p className="text-slate-400 max-w-lg">딩스튜디오가 증명해온 브랜드의 성공 사례입니다.</p>
            </div>
            <Link to="/portfolio" className="flex items-center space-x-2 text-[#8b5cf6] font-black hover:translate-x-2 transition-transform">
              <span>전체보기</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredWorks.map((item) => (
              <Link to={`/portfolio/${item.id}`} key={item?.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] md:rounded-[40px] mb-6 border border-white/10 bg-[#111]">
                  {item?.thumbnail && (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">View Project</div>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#8b5cf6] mb-2 block">{item?.category}</span>
                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#8b5cf6] transition-colors">{item?.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{item?.industry}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section with Marquee */}
      <section className="py-24 md:py-32 bg-[#050505] overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center lg:text-left">
          <span className="text-[#8b5cf6] font-black uppercase text-xs tracking-widest">Reviews</span>
          <h2 className="text-3xl lg:text-5xl font-black mt-4">의뢰인이 신뢰하는 이유</h2>
        </div>
        <div className="animate-marquee whitespace-nowrap py-4">
          {displayReviews.map((rev, idx) => (
            <div key={idx} className="inline-block bg-[#111] border border-white/10 p-8 rounded-[32px] w-[320px] md:w-[450px] mx-4 whitespace-normal align-top hover:border-[#8b5cf6]/50 transition-colors">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#8b5cf6" className="text-[#8b5cf6]" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed text-sm md:text-base font-medium">"{rev?.content}"</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                <div>
                  <div className="text-white font-bold">{rev?.author}</div>
                  <div className="text-[#8b5cf6] text-xs font-medium">{rev?.industry}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <CheckCircle size={20} className="text-[#8b5cf6]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-[#050505] px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 space-y-4">
             <span className="text-[#8b5cf6] font-black uppercase text-xs tracking-widest">Question</span>
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">FAQ</h2>
            <p className="text-slate-400">의뢰 전 궁금해하시는 부분들을 모았습니다.</p>
          </div>
          <div className="space-y-2">
            {(FAQ_ITEMS || []).map((faq, index) => (
              <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 text-center">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#8b5cf6]/20 to-transparent p-12 lg:p-24 rounded-[60px] border border-[#8b5cf6]/30 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
          <h2 className="text-3xl lg:text-6xl font-black mb-8 leading-tight">당신의 비즈니스도<br/>특별해질 수 있습니다.</h2>
          <p className="text-slate-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed">
            고민은 상담만 늦출 뿐입니다. <br/>
            딩스튜디오와 함께 브랜드의 가치를 높여보세요.
          </p>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-[#7c3aed] transition-all hover:scale-105">
            <span>무료 견적 상담 신청하기</span>
            <ChevronRight size={24} />
          </Link>
          <p className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-widest">No Commitment Required</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
