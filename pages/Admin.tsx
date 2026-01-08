
import React, { useState } from 'react';
import { Lock, Save, Plus, Trash2, X, Edit2, Image as ImageIcon, Layout, Type, FileText, MessageSquare } from 'lucide-react';
import { PortfolioItem, ServiceType } from '../types.ts';

interface AdminProps {
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
}

const Admin: React.FC<AdminProps> = ({ portfolio, setPortfolio }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [editingItem, setEditingItem] = useState<Partial<PortfolioItem> | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') setIsLoggedIn(true);
    else alert('비밀번호가 틀렸습니다. (기본: 1111)');
  };

  const handleSave = () => {
    if (!editingItem?.title || !editingItem?.id) return alert('최소한 제목은 입력해야 합니다.');
    
    const newItem = {
      ...editingItem,
      keywords: typeof editingItem.keywords === 'string' 
        ? (editingItem.keywords as string).split(',').map(k => k.trim()).filter(k => k)
        : editingItem.keywords || [],
      images: typeof editingItem.images === 'string'
        ? (editingItem.images as string).split('\n').map(i => i.trim()).filter(i => i)
        : editingItem.images || []
    } as PortfolioItem;

    setPortfolio(prev => {
      const exists = prev.find(p => p.id === newItem.id);
      if (exists) {
        return prev.map(p => p.id === newItem.id ? newItem : p);
      }
      return [newItem, ...prev];
    });
    
    setEditingItem(null);
    alert('저장되었습니다.');
  };

  const createNew = () => {
    setEditingItem({
      id: `project-${Date.now()}`,
      title: '',
      category: 'LOGO',
      industry: '',
      keywords: [],
      thumbnail: '',
      images: [],
      description: '',
      problem: '',
      solution: '',
      clientComment: ''
    });
  };

  const deleteItem = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setPortfolio(prev => prev.filter(p => p.id !== id));
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <form onSubmit={handleLogin} className="bg-[#111] p-10 rounded-[40px] border border-white/10 space-y-8 w-full max-w-sm shadow-2xl">
          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Lock size={32} />
            </div>
            <h2 className="text-2xl font-black">Admin Login</h2>
            <p className="text-slate-500 text-sm font-medium">관리자 비밀번호를 입력하세요.</p>
          </div>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6] transition-all text-center text-xl tracking-widest"
            placeholder="••••"
            autoFocus
          />
          <button className="w-full bg-[#8b5cf6] py-4 rounded-xl font-black text-lg hover:bg-[#7c3aed] transition-all shadow-xl shadow-purple-500/20">
            접속하기
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-32 px-4 max-w-7xl mx-auto pb-48">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black mb-2">Portfolio Manager</h1>
          <p className="text-slate-400">등록된 프로젝트를 수정하거나 새로운 작업을 추가하세요.</p>
        </div>
        <button 
          onClick={createNew}
          className="bg-[#8b5cf6] px-8 py-3 rounded-full font-black flex items-center space-x-2 hover:bg-[#7c3aed] transition-all shadow-lg shadow-purple-500/20"
        >
          <Plus size={20} /> <span>새 프로젝트 추가</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolio.map(item => (
          <div key={item.id} className="bg-[#111] border border-white/10 rounded-[32px] overflow-hidden group hover:border-[#8b5cf6]/50 transition-all">
            <div className="aspect-video relative overflow-hidden bg-white/5">
              {item.thumbnail ? (
                <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-700"><ImageIcon size={48} /></div>
              )}
              <div className="absolute top-4 left-4 bg-[#8b5cf6] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                {item.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2 truncate">{item.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{item.industry}</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setEditingItem(item)} 
                  className="flex-1 flex items-center justify-center space-x-2 py-3 bg-white/5 rounded-xl hover:bg-white/10 hover:text-[#8b5cf6] transition-all font-bold text-sm"
                >
                  <Edit2 size={16} /> <span>수정</span>
                </button>
                <button 
                  onClick={() => deleteItem(item.id)} 
                  className="p-3 bg-white/5 rounded-xl hover:bg-red-500/20 hover:text-red-500 transition-all"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Editor Modal */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-[#0f0f0f] w-full max-w-4xl p-8 lg:p-12 rounded-[40px] border border-white/10 shadow-2xl my-8">
            <div className="flex justify-between items-center mb-10 pb-6 border-b border-white/5">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#8b5cf6]/20 text-[#8b5cf6] rounded-xl">
                  <Layout size={24} />
                </div>
                <h2 className="text-2xl font-black">프로젝트 정보 편집</h2>
              </div>
              <button onClick={() => setEditingItem(null)} className="p-2 hover:bg-white/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              {/* 기본 정보 */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><Type size={12}/> 프로젝트 제목</label>
                  <input 
                    value={editingItem.title || ''} 
                    onChange={e => setEditingItem({...editingItem, title: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    placeholder="예: 에버셀 브랜드 리뉴얼" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">카테고리</label>
                    <select 
                      value={editingItem.category || 'LOGO'} 
                      onChange={e => setEditingItem({...editingItem, category: e.target.value as ServiceType})} 
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-[#8b5cf6]"
                    >
                      <option value="LOGO">LOGO (로고)</option>
                      <option value="WEB">WEB (홈페이지)</option>
                      <option value="PACKAGE">PACKAGE (패키지)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">업종</label>
                    <input 
                      value={editingItem.industry || ''} 
                      onChange={e => setEditingItem({...editingItem, industry: e.target.value})} 
                      className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                      placeholder="예: 코스메틱" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">키워드 (쉼표로 구분)</label>
                  <input 
                    value={Array.isArray(editingItem.keywords) ? editingItem.keywords.join(', ') : editingItem.keywords || ''} 
                    onChange={e => setEditingItem({...editingItem, keywords: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    placeholder="신뢰감, 혁신, 고급" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">썸네일 이미지 URL</label>
                  <input 
                    value={editingItem.thumbnail || ''} 
                    onChange={e => setEditingItem({...editingItem, thumbnail: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    placeholder="https://images.unsplash.com/..." 
                  />
                </div>
              </div>

              {/* 상세 내용 */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><FileText size={12}/> 프로젝트 요약</label>
                  <textarea 
                    value={editingItem.description || ''} 
                    onChange={e => setEditingItem({...editingItem, description: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    rows={2}
                    placeholder="프로젝트에 대한 전체적인 설명"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">The Problem (고객의 고민)</label>
                  <textarea 
                    value={editingItem.problem || ''} 
                    onChange={e => setEditingItem({...editingItem, problem: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    rows={2}
                    placeholder="기존 디자인의 문제점 등"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Our Strategy (딩스튜디오의 솔루션)</label>
                  <textarea 
                    value={editingItem.solution || ''} 
                    onChange={e => setEditingItem({...editingItem, solution: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    rows={2}
                    placeholder="우리가 제안한 디자인 전략"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2"><MessageSquare size={12}/> 클라이언트 한마디 (선택)</label>
                  <input 
                    value={editingItem.clientComment || ''} 
                    onChange={e => setEditingItem({...editingItem, clientComment: e.target.value})} 
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6]" 
                    placeholder="클라이언트의 긍정적인 피드백" 
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">상세 이미지 리스트 (한 줄에 하나씩 URL 입력)</label>
              <textarea 
                value={Array.isArray(editingItem.images) ? editingItem.images.join('\n') : editingItem.images || ''} 
                onChange={e => setEditingItem({...editingItem, images: e.target.value})} 
                className="w-full bg-white/5 border border-white/10 p-4 rounded-xl focus:outline-none focus:border-[#8b5cf6] font-mono text-xs" 
                rows={5}
                placeholder="https://image1.jpg&#10;https://image2.jpg"
              />
            </div>

            <button 
              onClick={handleSave} 
              className="w-full bg-[#8b5cf6] py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-[#7c3aed] transition-all shadow-2xl shadow-purple-500/20"
            >
              <Save size={24} />
              <span>변경 사항 저장하기</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
