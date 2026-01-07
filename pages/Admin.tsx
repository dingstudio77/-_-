
import React, { useState } from 'react';
import { Lock, Save, Plus, Trash2, X, Edit2 } from 'lucide-react';
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
    else alert('비밀번호 오류');
  };

  const handleSave = () => {
    if (!editingItem?.title) return alert('제목 필수');
    const newItem = editingItem as PortfolioItem;
    setPortfolio(prev => {
      const exists = prev.find(p => p.id === newItem.id);
      return exists ? prev.map(p => p.id === newItem.id ? newItem : p) : [...prev, newItem];
    });
    setEditingItem(null);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-[#111] p-10 rounded-3xl border border-white/10 space-y-6 w-80">
          <h2 className="text-xl font-bold text-center">Admin Access</h2>
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)}
            className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:outline-none"
            placeholder="Password"
          />
          <button className="w-full bg-[#8b5cf6] py-3 rounded-lg font-bold">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="pt-32 px-4 max-w-7xl mx-auto pb-48">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-black">Portfolio Admin</h1>
        <button 
          onClick={() => setEditingItem({ id: Date.now().toString(), title: '', category: 'LOGO', keywords: [], images: [], industry: '', description: '', problem: '', solution: '' })}
          className="bg-[#8b5cf6] px-6 py-2 rounded-full font-bold flex items-center space-x-2"
        >
          <Plus size={18} /> <span>추가</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolio.map(item => (
          <div key={item.id} className="bg-[#111] p-6 rounded-2xl border border-white/10 group">
            <h3 className="font-bold text-lg mb-4">{item.title}</h3>
            <div className="flex space-x-2">
              <button onClick={() => setEditingItem(item)} className="p-2 bg-white/5 rounded-lg hover:text-[#8b5cf6]"><Edit2 size={16} /></button>
              <button onClick={() => setPortfolio(prev => prev.filter(p => p.id !== item.id))} className="p-2 bg-white/5 rounded-lg hover:text-red-500"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>

      {editingItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#111] w-full max-w-2xl p-8 rounded-3xl border border-white/10 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between mb-8">
              <h2 className="text-xl font-bold">Edit Project</h2>
              <button onClick={() => setEditingItem(null)}><X /></button>
            </div>
            <div className="space-y-4">
              <input value={editingItem.title} onChange={e => setEditingItem({...editingItem, title: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="제목" />
              <select value={editingItem.category} onChange={e => setEditingItem({...editingItem, category: e.target.value as ServiceType})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl text-white">
                <option value="LOGO">LOGO</option>
                <option value="WEB">WEB</option>
                <option value="PACKAGE">PACKAGE</option>
              </select>
              <input value={editingItem.industry} onChange={e => setEditingItem({...editingItem, industry: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="업종" />
              <input value={editingItem.thumbnail} onChange={e => setEditingItem({...editingItem, thumbnail: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="썸네일 URL" />
              <textarea value={editingItem.description} onChange={e => setEditingItem({...editingItem, description: e.target.value})} className="w-full bg-white/5 border border-white/10 p-4 rounded-xl" placeholder="설명" rows={3} />
              <button onClick={handleSave} className="w-full bg-[#8b5cf6] py-4 rounded-xl font-bold text-lg">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
