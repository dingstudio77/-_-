
import React, { useState, useRef } from 'react';
import { Plus, Trash2, Edit2, Lock, Save, X, PlusCircle, Upload, Image as ImageIcon } from 'lucide-react';
import { PortfolioItem, ServiceType } from '../types.ts';

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
                      <option value="PACKAGE">브랜드 패키지</option>
                    </select>
                  </div>
                </div>
                {/* ... rest of the form ... */}
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
