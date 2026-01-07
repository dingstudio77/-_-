
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle, TrendingUp, Users, Shield, MessageSquare } from 'lucide-react';
import { PortfolioItem } from '../types.ts';
import { REVIEWS, PACKAGES } from '../constants.tsx';

interface HomeProps {
  portfolio: PortfolioItem[];
}

const Home: React.FC<HomeProps> = ({ portfolio }) => {
  const featuredWorks = portfolio.slice(0, 3);
  const displayReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 px-4">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#8b5cf6] rounded-full animate-pulse" />
              <span className="text-xs font-medium text-slate-300 uppercase tracking-widest">Premium Brand Studio</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              로고와 홈페이지,<br/>
              <span className="text-[#8b5cf6]">브랜드의 첫인상</span>을<br/>
              바꿉니다.
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0">
              업종과 고객 심리를 분석해, 예쁜 디자인이 아니라<br/>
              <span className="text-white font-medium">문의와 매출로 이어지는 구조</span>로 제작합니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/contact" className="w-full sm:w-auto bg-[#8b5cf6] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7c3aed] transition-all shadow-xl shadow-purple-500/30">
                무료 상담 신청하기
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                포트폴리오 보기
              </Link>
            </div>
          </div>
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/400/500?random=10" alt="Work" className="w-full h-auto" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/400/300?random=12" alt="Work" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Section */}
      <section className="py-32 bg-[#0a0a0a] px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">Service & Price</h2>
            <p className="text-slate-400 text-lg">
              투명한 가격 체계와 명확한 작업 범위를 지향합니다.<br/>
              당신의 상황에 딱 맞는 서비스를 선택해 보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`relative p-10 rounded-[40px] border bg-[#111] border-white/10 flex flex-col transition-all hover:scale-[1.02] hover:border-[#8b5cf6]/50`}>
                <div className="mb-8">
                  {pkg.recommendation && (
                    <span className="inline-block bg-[#8b5cf6]/10 text-[#8b5cf6] text-[10px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
                      {pkg.recommendation}
                    </span>
                  )}
                  <h3 className="text-3xl font-black mb-3 text-white">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{pkg.description}</p>
                </div>
                <div className="mb-10">
                  <span className="text-3xl font-black text-white">{pkg.price}</span>
                </div>
                <div className="flex-grow space-y-6 mb-10">
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">What's included</p>
                  <ul className="space-y-4">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-slate-300 text-sm font-medium">
                        <Check size={18} className="text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="w-full text-center py-5 rounded-2xl font-black text-lg transition-all bg-[#1a1a1a] text-white hover:bg-[#252525] border border-white/5">
                  상담 예약하기
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-black">이미 많은 기업들이 딩스튜디오와 함께했습니다</h2>
        </div>
        <div className="relative">
          <div className="animate-marquee whitespace-nowrap py-10">
            {displayReviews.map((rev, idx) => (
              <div key={idx} className="inline-block bg-[#111] border border-white/10 p-8 rounded-[32px] w-[350px] lg:w-[450px] mx-4 space-y-4 whitespace-normal align-top hover:border-[#8b5cf6]/40 transition-colors shadow-xl">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => <CheckCircle key={i} size={14} className="text-[#8b5cf6]" />)}
                </div>
                <p className="text-slate-300 leading-relaxed italic text-base lg:text-lg">"{rev.content}"</p>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                  <div className="flex flex-col">
                    {/* rev.author가 이미 'K 대표' 형식이므로 뒤에 '대표님'을 붙이지 않음 */}
                    <span className="text-white font-bold text-sm">{rev.author}</span>
                    <span className="text-[#8b5cf6] font-medium">{rev.industry}</span>
                  </div>
                  <span className="text-slate-500 uppercase tracking-widest font-bold bg-white/5 px-2 py-1 rounded">{rev.service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
