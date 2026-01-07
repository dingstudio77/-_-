
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PortfolioItem, ServiceType } from '../types.ts';

interface PortfolioProps {
  portfolio: PortfolioItem[];
}

const Portfolio: React.FC<PortfolioProps> = ({ portfolio }) => {
  const [filter, setFilter] = useState<ServiceType | 'ALL'>('ALL');

  const filteredItems = filter === 'ALL' 
    ? portfolio 
    : portfolio.filter(item => item.category === filter);

  const categories: { name: string; value: ServiceType | 'ALL' }[] = [
    { name: '전체', value: 'ALL' },
    { name: '로고 디자인', value: 'LOGO' },
    { name: '홈페이지 제작', value: 'WEB' },
    { name: '브랜드 패키지', value: 'PACKAGE' },
  ];

  return (
    <div className="pt-32 pb-48 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-20 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black">Portfolio</h1>
          <p className="text-slate-400 text-lg">결과물로 증명합니다. 딩스튜디오의 다양한 프로젝트를 만나보세요.</p>
        </header>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat.value 
                ? 'bg-[#8b5cf6] text-white shadow-lg shadow-purple-500/30' 
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <Link to={`/portfolio/${item.id}`} key={item.id} className="group">
              <div className="relative overflow-hidden rounded-[40px] aspect-square mb-6 bg-white/5">
                <img 
                  src={item.thumbnail} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white text-black px-6 py-2.5 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    프로젝트 상세보기
                  </div>
                </div>
              </div>
              <div className="px-2 space-y-3">
                <div className="flex items-center space-x-3 text-[10px] font-black uppercase tracking-widest text-[#8b5cf6]">
                  <span>{item.category === 'WEB' ? '홈페이지' : item.category === 'LOGO' ? '로고' : '패키지'}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-slate-500">{item.industry}</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-[#8b5cf6] transition-colors">{item.title}</h3>
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.keywords.map((kw, i) => (
                    <span key={i} className="text-[10px] bg-white/5 text-slate-400 border border-white/10 px-3 py-1.5 rounded-full">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-40">
            <p className="text-slate-500">해당 카테고리의 프로젝트가 아직 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
