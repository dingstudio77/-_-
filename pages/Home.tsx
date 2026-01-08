
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ChevronRight, Plus, Minus } from 'lucide-react';
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
        <span className="text-xl font-bold">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={24} className="text-[#8b5cf6]" /> : <Plus size={24} />}
        </div>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-400 leading-relaxed text-lg whitespace-pre-line">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ portfolio = [] }) => {
  // 포트폴리오 데이터가 비어있을 경우 대비
  const safePortfolio = Array.isArray(portfolio) ? portfolio : [];
  const featuredWorks = safePortfolio.slice(0, 6);
  const displayReviews = Array.isArray(REVIEWS) ? [...REVIEWS, ...REVIEWS] : [];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 px-4 text-center lg:text-left">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">Premium Brand Studio</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              로고와 홈페이지,<br/>
              <span className="text-[#8b5cf6]">브랜드의 첫인상</span>을<br/>
              바꿉니다.
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              단순히 예쁜 디자인을 넘어 업종과 고객 심리를 분석해<br className="hidden md:block"/>
              문의와 매출로 이어지는 전략적 결과물을 만듭니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Link to="/contact" className="bg-[#8b5cf6] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7c3aed] transition-all shadow-xl shadow-purple-500/20">
                무료 상담 신청하기
              </Link>
              <Link to="/portfolio" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                포트폴리오 보기
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
             <div className="grid grid-cols-2 gap-4">
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10">
                 <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Design 1" />
               </div>
               <div className="aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10 mt-12">
                 <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="Design 2" />
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-32 bg-[#0a0a0a] px-4 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">Featured Works</h2>
              <p className="text-slate-400 max-w-lg">딩스튜디오가 만들어낸 브랜드의 가치 있는 변화입니다.</p>
            </div>
            <Link to="/portfolio" className="flex items-center space-x-2 text-[#8b5cf6] font-bold hover:underline">
              <span>전체 포트폴리오 보기</span>
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featuredWorks.map((item) => (
              <Link to={`/portfolio/${item.id}`} key={item?.id} className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] mb-6 border border-white/10 bg-[#111]">
                  {item?.thumbnail && (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm">Detail View</div>
                  </div>
                </div>
                <div className="px-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#8b5cf6] mb-2 block">{item?.category}</span>
                  <h3 className="text-2xl font-bold group-hover:text-[#8b5cf6] transition-colors">{item?.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{item?.industry}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#050505] px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">FAQ</h2>
            <p className="text-slate-400">자주 묻는 질문들에 대해 명확히 답변해 드립니다.</p>
          </div>
          <div className="space-y-2">
            {(FAQ_ITEMS || []).map((faq, index) => (
              <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-32 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
        <div className="animate-marquee whitespace-nowrap py-10">
          {displayReviews.map((rev, idx) => (
            <div key={idx} className="inline-block bg-[#111] border border-white/10 p-8 rounded-[32px] w-[350px] lg:w-[450px] mx-4 whitespace-normal align-top">
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => <CheckCircle key={i} size={14} className="text-[#8b5cf6]" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed text-sm">"{rev?.content}"</p>
              <div className="pt-6 border-t border-white/5">
                <div className="text-white font-bold">{rev?.author}</div>
                <div className="text-[#8b5cf6] text-xs font-medium">{rev?.industry}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 bg-[#050505] px-4 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#8b5cf6]/10 to-transparent p-12 lg:p-20 rounded-[60px] border border-[#8b5cf6]/20">
          <h2 className="text-3xl lg:text-5xl font-black mb-8 leading-tight">당신의 비즈니스도<br/>특별해질 수 있습니다.</h2>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-[#7c3aed] transition-all">
            <span>무료 견적 상담받기</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
