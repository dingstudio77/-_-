
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, CheckCircle, TrendingUp, Users, Shield, MessageSquare } from 'lucide-react';
import { PortfolioItem } from '../types';
import { REVIEWS, PACKAGES } from '../constants';

interface HomeProps {
  portfolio: PortfolioItem[];
}

const Home: React.FC<HomeProps> = ({ portfolio }) => {
  const featuredWorks = portfolio.slice(0, 3);
  // Duplicate reviews for infinite loop effect
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
              <Link to="/contact" className="w-full sm:w-auto bg-[#8b5cf6] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#7c3aed] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-purple-500/30">
                무료 상담 신청하기
              </Link>
              <Link to="/portfolio" className="w-full sm:w-auto bg-white/5 text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                포트폴리오 보기
              </Link>
            </div>
            <p className="text-sm text-slate-500 italic">
              * 상담 후 진행 여부 결정 가능 / 무리한 영업을 하지 않습니다.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 transform hover:-translate-y-2 transition-transform duration-500">
                <img src="https://picsum.photos/400/500?random=10" alt="Work" className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 transform hover:-translate-y-2 transition-transform duration-500">
                <img src="https://picsum.photos/400/300?random=11" alt="Work" className="w-full h-auto" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 transform hover:-translate-y-2 transition-transform duration-500">
                <img src="https://picsum.photos/400/300?random=12" alt="Work" className="w-full h-auto" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-900/20 transform hover:-translate-y-2 transition-transform duration-500">
                <img src="https://picsum.photos/400/500?random=13" alt="Work" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">비즈니스의 성장을 막는 디자인 문제들</h2>
            <p className="text-slate-400">딩스튜디오는 단순한 시각화를 넘어 비즈니스의 페인 포인트를 해결합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "촌스러운 브랜드 이미지", desc: "고객에게 신뢰를 주지 못해 이탈률이 높음", icon: <Shield className="text-[#8b5cf6]" /> },
              { title: "문의가 없는 홈페이지", desc: "디자인은 예쁘지만 설득력이 부족한 구조", icon: <TrendingUp className="text-[#8b5cf6]" /> },
              { title: "정리되지 않은 아이덴티티", desc: "매체마다 로고와 컬러가 달라 브랜드 가치 저하", icon: <Users className="text-[#8b5cf6]" /> },
              { title: "답답한 외주 소통", desc: "전문 지식 없이 말해도 척하면 척 알아듣는 소통", icon: <MessageSquare className="text-[#8b5cf6]" /> },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] transition-colors group">
                <div className="w-12 h-12 bg-[#8b5cf6]/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-lg text-slate-300 font-medium">
              “딩스튜디오는 디자인 + 구조 + 메시지까지 정리해 <span className="text-[#8b5cf6] underline underline-offset-4">문의로 이어지게</span> 만듭니다.”
            </p>
          </div>
        </div>
      </section>

      {/* Mini Portfolio */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-5xl font-bold">최근 작업물</h2>
              <p className="text-slate-400">데이터와 전략을 기반으로 한 딩스튜디오의 포트폴리오를 확인하세요.</p>
            </div>
            <Link to="/portfolio" className="group flex items-center space-x-2 text-white font-bold hover:text-[#8b5cf6] transition-colors">
              <span>전체 포트폴리오 보기</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((item) => (
              <Link to={`/portfolio/${item.id}`} key={item.id} className="group block">
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="bg-[#8b5cf6] text-white px-4 py-2 rounded-full text-xs font-bold">Click to View</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[#8b5cf6] text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  <h3 className="text-xl font-bold group-hover:text-[#8b5cf6] transition-colors">{item.title}</h3>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.keywords.map((kw, i) => (
                      <span key={i} className="text-[10px] text-slate-500 border border-slate-800 px-2 py-1 rounded">#{kw}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <div key={idx} className={`relative p-10 rounded-[40px] border bg-[#111] border-white/10 flex flex-col transition-all hover:scale-[1.02] hover:border-[#8b5cf6]/50`}>
                <div className="mb-8">
                  {pkg.recommendation && (
                    <span className="inline-block bg-[#8b5cf6]/10 text-[#8b5cf6] text-[10px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-[0.2em]">
                      {pkg.recommendation}
                    </span>
                  )}
                  <h3 className="text-4xl font-black mb-3 text-white">{pkg.name}</h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{pkg.description}</p>
                </div>
                
                <div className="mb-10">
                  <span className="text-4xl font-black text-white">{pkg.price}</span>
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

      {/* Reviews Section - Scrolling Marquee */}
      <section className="py-32 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-black">이미 많은 기업들이 딩스튜디오와 함께했습니다</h2>
        </div>
        
        <div className="relative">
          {/* Side Gradients for smooth fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 lg:w-40 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee whitespace-nowrap py-10">
            {displayReviews.map((rev, idx) => (
              <div key={idx} className="inline-block bg-[#111] border border-white/10 p-8 rounded-[32px] w-[350px] lg:w-[450px] mx-4 space-y-4 whitespace-normal align-top hover:border-[#8b5cf6]/40 transition-colors shadow-xl">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => <CheckCircle key={i} size={14} className="text-[#8b5cf6]" />)}
                </div>
                <p className="text-slate-300 leading-relaxed italic text-base lg:text-lg">"{rev.content}"</p>
                <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs">
                  <div className="flex flex-col">
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

      {/* Final CTA */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#111] to-[#050505] border border-white/10 rounded-[40px] p-12 lg:p-24 text-center space-y-10">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight">
            당신의 비즈니스를<br/>
            <span className="text-[#8b5cf6]">레벨업</span> 할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            고민은 상담 후에 하셔도 늦지 않습니다.<br/>
            현재 상황을 공유해주시면 최적의 솔루션을 제안해 드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Link to="/contact" className="w-full sm:w-auto bg-[#8b5cf6] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#7c3aed] transition-all shadow-2xl shadow-purple-500/20">
              무료 상담 시작하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
