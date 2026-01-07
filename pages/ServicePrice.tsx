
import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Info } from 'lucide-react';
import { PACKAGES } from '../constants.tsx';

const ServicePrice = () => {
  return (
    <div className="pt-32 pb-48 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">Service & Price</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            투명한 가격 체계와 명확한 작업 범위를 제안합니다. <br className="hidden md:block"/>
            당신의 비즈니스 단계에 맞는 패키지를 선택해 보세요.
          </p>
        </header>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="bg-[#111] border border-white/10 rounded-[40px] p-10 flex flex-col h-full hover:border-[#8b5cf6]/50 transition-all hover:scale-[1.02]">
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

              <div className="flex-grow space-y-6 mb-12">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">What's included</p>
                <ul className="space-y-4">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 text-slate-200 text-sm font-medium">
                      <Check size={18} className="text-[#8b5cf6] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="w-full text-center bg-white/5 text-white py-5 rounded-2xl font-black text-lg hover:bg-[#8b5cf6] border border-white/5 transition-all">
                상담 예약하기
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="bg-white/5 border border-white/10 rounded-[40px] p-12 lg:p-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 text-[#8b5cf6]">
              <Info size={20} />
              <span className="font-black uppercase tracking-widest text-xs">Essential Checklist</span>
            </div>
            <h2 className="text-3xl font-black">의뢰 전 준비해 주세요</h2>
            <p className="text-slate-400">최상의 결과물을 위해 아래 내용을 미리 고민해 주시면 큰 도움이 됩니다.</p>
            <ul className="space-y-4">
              {[
                "브랜드가 지향하는 핵심 가치 (3가지 키워드)",
                "참고하고 싶은 레퍼런스 이미지 또는 링크",
                "주요 타겟 고객층에 대한 정의",
                "홈페이지에 반드시 노출되어야 할 핵심 내용(카피)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-4">
                  <span className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] text-slate-500 font-bold">{idx + 1}</span>
                  <span className="text-slate-300 text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-black">진행 전 안내사항</h2>
            <div className="space-y-6">
              {[
                { q: "수정 범위는 어떻게 되나요?", a: "기본 시안 확정 후 디테일 수정이 포함됩니다. 패키지별로 수정 횟수가 다르니 확인 부탁드립니다." },
                { q: "납품 후 저작권은 누구에게 있나요?", a: "최종 확정된 작업물에 대한 모든 소유권은 고객사에게 귀속됩니다. (포트폴리오로 활용될 수 있습니다)" },
                { q: "A/S 서비스도 제공되나요?", a: "홈페이지 납품 후 오타 수정이나 간단한 버그는 1개월간 무상으로 지원해 드립니다." },
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="font-bold text-[#8b5cf6]">{item.q}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePrice;
