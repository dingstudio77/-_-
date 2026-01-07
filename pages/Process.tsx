
import React from 'react';
import { Link } from 'react-router-dom';
import { PROCESS_STEPS } from '../constants.tsx';

const Process = () => {
  return (
    <div className="pt-32 pb-48 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-24 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight">Process</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            딩스튜디오의 체계적인 5단계 시스템을 통해 <br/>
            당신의 브랜딩 여정을 투명하고 신속하게 이끌어 드립니다.
          </p>
        </header>

        <div className="relative space-y-12">
          {/* Vertical Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          {PROCESS_STEPS.map((step, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className={`w-full max-w-md p-10 rounded-[40px] border border-white/10 bg-[#111] hover:border-[#8b5cf6]/50 transition-colors shadow-2xl ${idx % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <div className={`w-16 h-16 rounded-2xl bg-[#8b5cf6]/20 flex items-center justify-center text-[#8b5cf6] mb-8 ${idx % 2 === 1 ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4">
                    <span className="text-[#8b5cf6] mr-2">0{idx + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>

              {/* Central Circle */}
              <div className="hidden lg:flex w-12 h-12 rounded-full bg-[#050505] border-4 border-[#8b5cf6] z-10 items-center justify-center text-xs font-black">
                {idx + 1}
              </div>

              <div className="flex-1 hidden lg:block" />
            </div>
          ))}
        </div>

        <div className="mt-48 bg-gradient-to-r from-[#8b5cf6]/20 to-transparent p-12 lg:p-24 rounded-[60px] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight">Real-time Feedback</h2>
            <p className="text-lg text-slate-300 leading-relaxed">
              작업 과정 중 발생하는 모든 소통을 투명하게 공유하며,<br/>
              고객님의 피드백을 실시간으로 반영하여 최상의 만족도를 끌어냅니다.
            </p>
          </div>
          <Link to="/contact" className="bg-[#8b5cf6] text-white px-10 py-5 rounded-full font-black text-xl hover:bg-[#7c3aed] transition-all">
            지금 시작하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Process;
