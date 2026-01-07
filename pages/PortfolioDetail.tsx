
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from '../types';

interface PortfolioDetailProps {
  portfolio: PortfolioItem[];
}

const PortfolioDetail: React.FC<PortfolioDetailProps> = ({ portfolio }) => {
  const { id } = useParams<{ id: string }>();
  const item = portfolio.find(p => p.id === id);

  if (!item) return <Navigate to="/portfolio" />;

  return (
    <div className="pt-24 pb-48">
      {/* Back Header */}
      <div className="sticky top-20 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4 mb-12">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <Link to="/portfolio" className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-bold">포트폴리오 목록으로</span>
          </Link>
          <div className="hidden sm:block text-xs font-medium text-slate-500">
            Portfolio / {item.category} / <span className="text-white">{item.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Project Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#8b5cf6] font-bold text-sm tracking-widest uppercase">{item.category} Project</span>
              <h1 className="text-4xl lg:text-6xl font-black leading-tight">{item.title}</h1>
            </div>
            <div className="grid grid-cols-2 gap-8 border-y border-white/10 py-10">
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase mb-2">Industry</p>
                <p className="text-lg font-bold">{item.industry}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase mb-2">Service</p>
                <p className="text-lg font-bold">{item.category}</p>
              </div>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed">{item.description}</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-10 rounded-[40px] space-y-12 shadow-2xl">
            <div className="space-y-4">
              <h3 className="text-[#8b5cf6] font-black uppercase text-xs tracking-widest">The Problem</h3>
              <p className="text-white font-medium text-lg leading-relaxed">{item.problem}</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-[#8b5cf6] font-black uppercase text-xs tracking-widest">Our Strategy</h3>
              <p className="text-white font-medium text-lg leading-relaxed">{item.solution}</p>
            </div>
            {item.clientComment && (
              <div className="pt-8 border-t border-white/10">
                <p className="italic text-slate-400">"{item.clientComment}"</p>
                <p className="text-xs font-bold mt-4 text-[#8b5cf6]">- Client Review</p>
              </div>
            )}
          </div>
        </div>

        {/* Image Gallery - Optimized for high visibility */}
        <div className="space-y-24">
          {item.images.map((img, idx) => (
            <div key={idx} className="rounded-[40px] overflow-hidden bg-[#111] border border-white/10 shadow-2xl">
              <img 
                src={img} 
                alt={`${item.title} screen ${idx + 1}`} 
                className="w-full h-auto object-cover" 
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center p-20 bg-gradient-to-b from-white/5 to-transparent rounded-[60px] border border-white/5">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">"{item.industry}" 업종 상담이 필요하신가요?</h2>
          <p className="text-slate-400 mb-12">비슷한 프로젝트를 성공적으로 이끌어낸 노하우로 상담해 드립니다.</p>
          <Link to="/contact" className="inline-flex items-center space-x-3 bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-[#7c3aed] hover:scale-105 transition-all shadow-2xl shadow-purple-500/30">
            <span>무료 견적 상담받기</span>
            <ChevronRight size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
