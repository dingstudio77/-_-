
import React from 'react';
import { Award, Heart, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-32 pb-48 px-4">
      <div className="max-w-7xl mx-auto">
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <span className="text-[#8b5cf6] font-black uppercase text-xs tracking-widest">About Studio</span>
              <h1 className="text-4xl lg:text-7xl font-black tracking-tight leading-[1.1]">
                예쁜 디자인을 넘어,<br/>
                <span className="text-[#8b5cf6]">돈이 되는 디자인</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                딩스튜디오는 단순한 프리랜서 팀이 아닌, 비즈니스 성장의 파트너입니다. <br/>
                우리는 고객이 왜 당신의 브랜드를 선택해야 하는지, 그 '이유'를 시각적으로 설계합니다.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-8">
                <div>
                  <div className="text-4xl font-black text-white mb-2">150+</div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Projects Done</p>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">98%</div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Satisfaction Rate</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden bg-[#111] border border-white/10">
                <img src="https://picsum.photos/800/800?random=100" alt="Studio Representative" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-[#8b5cf6] p-12 rounded-[40px] hidden md:block">
                <p className="text-white font-black text-2xl italic leading-tight">
                  "디자인은<br/>비즈니스의<br/>언어입니다."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-white/5 rounded-[60px] border border-white/10 px-8 lg:px-20">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl lg:text-5xl font-black">딩스튜디오의 3대 철학</h2>
            <p className="text-slate-400">우리가 작업을 대하는 태도는 변하지 않습니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={40} />, title: "명확한 근거", desc: "단순히 예뻐서가 아닌, 시장과 타겟을 분석한 데이터를 기반으로 디자인합니다." },
              { icon: <Zap size={40} />, title: "확실한 속도", desc: "약속된 마감 기한은 반드시 지킵니다. 빠른 피드백으로 프로젝트의 효율을 높입니다." },
              { icon: <Heart size={40} />, title: "지속가능한 가치", desc: "유행을 타지 않는 본질적인 디자인으로 브랜드의 오랜 생명력을 부여합니다." },
            ].map((p, idx) => (
              <div key={idx} className="space-y-6 text-center">
                <div className="w-20 h-20 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-3xl flex items-center justify-center mx-auto mb-8">
                  {p.icon}
                </div>
                <h3 className="text-2xl font-black">{p.title}</h3>
                <p className="text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-48 text-center space-y-12">
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight">우리가 사용하는 도구들</h2>
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {["Figma", "Adobe Illustrator", "Adobe Photoshop", "Webflow", "React", "Notion"].map((tool) => (
              <span key={tool} className="text-2xl lg:text-4xl font-black text-white/20 hover:text-white transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
