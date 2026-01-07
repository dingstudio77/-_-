
import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formspree.io/f/mpqwgepo", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const data = await response.json();
        if (data && Object.prototype.hasOwnProperty.call(data, 'errors')) {
          alert(data["errors"].map((error: any) => error["message"]).join(", "));
        } else {
          alert("상담 신청 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
        }
      }
    } catch (error) {
      alert("네트워크 오류가 발생했습니다. 인터넷 연결을 확인하고 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 animate-in fade-in zoom-in duration-500">
        <div className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-green-500/20">
          <CheckCircle2 size={48} />
        </div>
        <h1 className="text-4xl font-black mb-4 text-center">문의가 성공적으로 접수되었습니다!</h1>
        <p className="text-slate-400 text-lg mb-12 text-center max-w-lg">
          영업일 기준 24시간 내에 기재해주신 연락처로 답변 드리겠습니다. <br/>
          딩스튜디오를 믿고 문의해 주셔서 감사합니다.
        </p>
        <button 
          onClick={() => setSubmitted(false)} 
          className="bg-white/5 border border-white/10 px-8 py-3 rounded-full text-slate-300 font-bold hover:text-white hover:bg-white/10 transition-all"
        >
          추가 문의하기
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-48 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-7xl font-black tracking-tight uppercase">Get in<br/>Touch</h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-md">
              딩스튜디오는 당신의 비즈니스가 세상에 더 매력적으로 보일 수 있도록 돕습니다. <br/>
              현재 고민하고 계신 내용을 편하게 들려주세요.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <p className="text-[#8b5cf6] font-bold uppercase tracking-widest text-xs">Email</p>
              <p className="text-2xl font-bold">design413_@naver.com</p>
            </div>
          </div>

          <div className="bg-[#111] p-8 rounded-[30px] border border-white/5 space-y-4">
            <p className="font-bold text-sm text-[#8b5cf6]">Checklist Before Inquiry</p>
            <ul className="space-y-3">
              {[
                "상담 후 진행 여부를 결정하셔도 괜찮습니다.", 
                "평일 기준 24시간 이내에 빠른 답변을 드립니다.", 
                "프로젝트의 목적과 예산을 말씀해주시면 더 정확한 제안이 가능합니다."
              ].map((q, i) => (
                <li key={i} className="flex items-start space-x-3 text-slate-400 text-sm">
                  <span className="w-1.5 h-1.5 bg-[#8b5cf6] rounded-full mt-1.5 flex-shrink-0" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#111] border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">이름 / 기업명 <span className="text-red-500">*</span></label>
                <input 
                  required 
                  name="name" 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all" 
                  placeholder="홍길동 / (주)딩스튜디오" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">연락처 <span className="text-red-500">*</span></label>
                <input 
                  required 
                  name="contact" 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#8b5cf6] focus:ring-1 focus:ring-[#8b5cf6] transition-all" 
                  placeholder="010-0000-0000" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">원하는 서비스</label>
              <select 
                name="service" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all text-white"
              >
                <option value="PACKAGE" className="bg-[#111]">올인원 브랜드 패키지</option>
                <option value="LOGO" className="bg-[#111]">로고 디자인</option>
                <option value="WEB" className="bg-[#111]">홈페이지 제작</option>
                <option value="OTHER" className="bg-[#111]">기타 문의</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">예상 예산</label>
              <input 
                name="budget" 
                type="text" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                placeholder="예: 300만원 대" 
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">문의 내용 <span className="text-red-500">*</span></label>
              <textarea 
                required 
                name="message" 
                rows={5} 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                placeholder="의뢰하시려는 프로젝트의 목표와 내용을 자유롭게 적어주세요."
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#8b5cf6] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center space-x-3 hover:bg-[#7c3aed] transition-all group shadow-xl shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : (
                <>
                  <span>상담 신청서 보내기</span>
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
