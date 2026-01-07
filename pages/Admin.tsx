
import React, { useState, useRef } from 'react';
import { Plus, Trash2, Edit2, Lock, Save, X, PlusCircle, Upload, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem, ServiceType } from '../types';

interface AdminProps {
  portfolio: PortfolioItem[];
  setPortfolio: React.Dispatch<React.SetStateAction<PortfolioItem[]>>;
}

const Admin: React.FC<AdminProps> = ({ portfolio, setPortfolio }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [editingItem, setEditingItem] = useState<Partial<PortfolioItem> | null>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1111') {
      setIsLoggedIn(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, callback: (base64: string) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('이미지 용량이 너무 큽니다. (최대 2MB)');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        callback(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdd = () => {
    setEditingItem({
      id: Date.now().toString(),
      title: '',
      category: 'LOGO',
      industry: '',
      keywords: [],
      thumbnail: '',
      images: [],
      description: '',
      problem: '',
      solution: '',
    });
  };

  const handleDelete = (id: string) => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      setPortfolio(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleSave = () => {
    if (!editingItem || !editingItem.title) {
      alert('제목은 필수 입력 항목입니다.');
      return;
    }
    const newItem = editingItem as PortfolioItem;
    
    setPortfolio(prev => {
      const exists = prev.find(p => p.id === newItem.id);
      if (exists) {
        return prev.map(p => p.id === newItem.id ? newItem : p);
      }
      return [...prev, newItem];
    });
    setEditingItem(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-sm bg-[#111] border border-white/10 p-10 rounded-[30px] space-y-8">
          <div className="text-center space-y-2">
            <Lock className="mx-auto text-[#8b5cf6]" size={40} />
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-slate-500 text-sm">관리자 비밀번호를 입력하세요.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              autoFocus
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:outline-none focus:border-[#8b5cf6]" 
              placeholder="Password" 
            />
            <button className="w-full bg-[#8b5cf6] text-white py-4 rounded-xl font-bold hover:bg-[#7c3aed] transition-all">
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-48 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Portfolio Management</h1>
            <p className="text-slate-500 text-sm">현재 {portfolio.length}개의 프로젝트가 등록되어 있습니다.</p>
          </div>
          <button onClick={handleAdd} className="flex items-center space-x-2 bg-[#8b5cf6] text-white px-8 py-4 rounded-full font-bold hover:bg-[#7c3aed] transition-all shadow-lg shadow-purple-500/20">
            <Plus size={20} />
            <span>새 프로젝트 추가</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map((item) => (
            <div key={item.id} className="bg-[#111] border border-white/10 rounded-[30px] overflow-hidden group border-transparent hover:border-[#8b5cf6]/30 transition-all">
              <div className="aspect-video relative overflow-hidden bg-white/5">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-700">
                    <ImageIcon size={48} />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <button onClick={() => setEditingItem(item)} className="p-4 bg-white text-black rounded-full hover:bg-[#8b5cf6] hover:text-white transition-all transform hover:scale-110">
                    <Edit2 size={20} />
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all transform hover:scale-110">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
              <div className="p-8 space-y-3">
                <span className="text-[10px] text-[#8b5cf6] font-black tracking-widest uppercase">{item.category}</span>
                <h3 className="text-xl font-bold truncate">{item.title}</h3>
                <p className="text-slate-500 text-sm truncate">{item.industry}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Edit Modal */}
        {editingItem && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-5xl h-[90vh] rounded-[40px] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
              <div className="p-8 border-b border-white/10 flex justify-between items-center bg-[#111]">
                <div>
                  <h2 className="text-2xl font-black">{editingItem.id && portfolio.find(p => p.id === editingItem.id) ? '프로젝트 수정' : '새 프로젝트 추가'}</h2>
                  <p className="text-slate-500 text-xs mt-1 uppercase tracking-widest">Editor Mode</p>
                </div>
                <button onClick={() => setEditingItem(null)} className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <X size={32} />
                </button>
              </div>
              
              <div className="flex-grow overflow-y-auto p-10 space-y-12 custom-scrollbar">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">제목 <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      value={editingItem.title || ''} 
                      onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                      placeholder="예: 에버셀 브랜드 리뉴얼"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">카테고리</label>
                    <select 
                      value={editingItem.category || 'LOGO'}
                      onChange={(e) => setEditingItem({...editingItem, category: e.target.value as ServiceType})}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] text-white transition-all appearance-none"
                    >
                      <option value="LOGO">로고 디자인</option>
                      <option value="WEB">홈페이지 제작</option>
                    </select>
                  </div>
                </div>

                {/* Thumbnail Upload */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">썸네일 이미지</label>
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div 
                      onClick={() => thumbnailInputRef.current?.click()}
                      className="w-full sm:w-64 aspect-video rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center cursor-pointer hover:border-[#8b5cf6] transition-all bg-white/5 overflow-hidden relative group"
                    >
                      {editingItem.thumbnail ? (
                        <>
                          <img src={editingItem.thumbnail} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Upload className="text-white" size={32} />
                          </div>
                        </>
                      ) : (
                        <>
                          <Upload className="text-slate-600 mb-2" size={32} />
                          <span className="text-xs text-slate-500 font-bold">이미지 업로드</span>
                        </>
                      )}
                    </div>
                    <input 
                      ref={thumbnailInputRef}
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(e, (base64) => setEditingItem({...editingItem, thumbnail: base64}))}
                    />
                    <div className="flex-grow space-y-2">
                      <p className="text-xs text-slate-400">이미지 파일(JPG, PNG)을 직접 선택하거나 URL을 입력하세요.</p>
                      <input 
                        type="text" 
                        value={editingItem.thumbnail || ''} 
                        onChange={(e) => setEditingItem({...editingItem, thumbnail: e.target.value})}
                        placeholder="이미지 URL 직접 입력 (선택사항)"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-[#8b5cf6]" 
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">업종</label>
                    <input 
                      type="text" 
                      value={editingItem.industry || ''} 
                      onChange={(e) => setEditingItem({...editingItem, industry: e.target.value})}
                      placeholder="예: 바이오 테크놀로지"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">키워드 (쉼표로 구분)</label>
                    <input 
                      type="text" 
                      value={editingItem.keywords?.join(', ') || ''} 
                      onChange={(e) => setEditingItem({...editingItem, keywords: e.target.value.split(',').map(s => s.trim())})}
                      placeholder="예: 미니멀, 혁신, 전문성"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                    />
                  </div>
                </div>

                {/* Detailed Images Upload */}
                <div className="space-y-4">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">상세 이미지 리스트 (포트폴리오 하단 크게 보임)</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {editingItem.images?.map((img, idx) => (
                      <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col space-y-3">
                        <div className="aspect-video rounded-xl bg-black/50 overflow-hidden relative group">
                          {img ? (
                            <img src={img} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-800">
                              <ImageIcon size={32} />
                            </div>
                          )}
                          <label className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/0 group-hover:bg-black/40 opacity-0 group-hover:opacity-100 transition-all">
                            <Upload className="text-white" />
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleFileUpload(e, (base64) => {
                                const newImages = [...(editingItem.images || [])];
                                newImages[idx] = base64;
                                setEditingItem({...editingItem, images: newImages});
                              })}
                            />
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input 
                            type="text" 
                            value={img} 
                            onChange={(e) => {
                              const newImages = [...(editingItem.images || [])];
                              newImages[idx] = e.target.value;
                              setEditingItem({...editingItem, images: newImages});
                            }}
                            placeholder="URL 입력"
                            className="flex-grow bg-transparent border-b border-white/10 text-xs px-2 py-1 focus:outline-none focus:border-[#8b5cf6]"
                          />
                          <button onClick={() => {
                            const newImages = editingItem.images?.filter((_, i) => i !== idx);
                            setEditingItem({...editingItem, images: newImages});
                          }} className="text-red-500 hover:text-red-400 p-1">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button 
                      onClick={() => setEditingItem({...editingItem, images: [...(editingItem.images || []), '']})}
                      className="aspect-video rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center hover:border-[#8b5cf6] transition-all bg-white/5 group"
                    >
                      <PlusCircle className="text-slate-600 group-hover:text-[#8b5cf6] mb-2" size={32} />
                      <span className="text-xs text-slate-500 font-bold group-hover:text-[#8b5cf6]">상세 이미지 슬롯 추가</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-8 pt-6">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">프로젝트 설명</label>
                    <textarea 
                      value={editingItem.description || ''} 
                      onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                      placeholder="프로젝트의 전반적인 소개를 적어주세요."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                      rows={4}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">문제점 (Before)</label>
                      <textarea 
                        value={editingItem.problem || ''} 
                        onChange={(e) => setEditingItem({...editingItem, problem: e.target.value})}
                        placeholder="의뢰 전 어떤 어려움이 있었나요?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                        rows={4}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">해결책 (After/Strategy)</label>
                      <textarea 
                        value={editingItem.solution || ''} 
                        onChange={(e) => setEditingItem({...editingItem, solution: e.target.value})}
                        placeholder="딩스튜디오는 어떻게 해결했나요?"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                        rows={4}
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">고객 후기 (선택)</label>
                    <textarea 
                      value={editingItem.clientComment || ''} 
                      onChange={(e) => setEditingItem({...editingItem, clientComment: e.target.value})}
                      placeholder="고객님의 실제 코멘트를 입력하세요."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-[#8b5cf6] transition-all" 
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              <div className="p-8 border-t border-white/10 bg-[#050505] flex space-x-4">
                <button onClick={handleSave} className="flex-grow bg-[#8b5cf6] text-white py-5 rounded-2xl font-black text-xl flex items-center justify-center space-x-3 hover:bg-[#7c3aed] transition-all shadow-xl shadow-purple-500/20">
                  <Save size={24} />
                  <span>변경사항 저장하기</span>
                </button>
                <button onClick={() => setEditingItem(null)} className="px-10 bg-white/5 text-white py-5 rounded-2xl font-bold hover:bg-white/10 transition-all border border-white/10">
                  취소
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
