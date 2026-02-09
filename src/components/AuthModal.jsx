import { useState } from 'react';
import { X, Eye, EyeOff, Lock, Mail, User, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// MABORESHO: Tunapokea 'redirectPath' kutoka LandingPage ili kujua safari ya mteja
export default function AuthModal({ showLogin, onClose, onSuccess, redirectPath }) {
  const [showPassword, setShowPassword] = useState(false);
  const [authView, setAuthView] = useState('login'); 
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate(); 

  // Ukaguzi wa kuonyesha modal
  if (!showLogin) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (authView === 'login') {
      // 1. Inabadilisha hali ya login kuwa true
      onSuccess(); 
      
      // 2. MABORESHO: Inampeleka mteja kulingana na kadi aliyobonyeza (Smart Redirect)
      navigate(redirectPath); 
      
      // 3. Inafunga modal
      onClose(); 
    } else if (authView === 'register') {
      alert("Akaunti imetengenezwa! Sasa ingia.");
      setAuthView('login');
    } else {
      alert("Link ya kurejesha nenosiri imetumwa kwenye email yako.");
      setAuthView('login');
    }
  };

  const getStrength = (pw) => {
    let strength = 0;
    if (pw.length > 5) strength++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) strength++;
    if (/[0-9]/.test(pw) && /[^A-Za-z0-9]/.test(pw)) strength++;
    return strength;
  };

  const strength = getStrength(password);
  const labels = ["Weak", "Medium", "Strong", "Very Strong"];
  const colors = ["bg-red-400", "bg-orange-400", "bg-yellow-400", "bg-neo-mint"];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-deep-blue/40 backdrop-blur-sm" onClick={onClose}></div>
      
      <div className="relative bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden animate-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-deep-blue z-50">
          <X size={24} />
        </button>

        <div className="p-10">
          <div className="mb-8">
            {authView === 'forgot' && (
              <button onClick={() => setAuthView('login')} className="flex items-center gap-1 text-neo-mint font-bold text-xs mb-2 hover:gap-2 transition-all">
                <ArrowLeft size={14} /> RUDI KUINGIA
              </button>
            )}
            <h2 className="text-3xl font-extrabold text-deep-blue">
              {authView === 'login' ? 'Karibu Tena!' : authView === 'register' ? 'Jisajili Leo' : 'Sahau Nenosiri?'}
            </h2>
            <p className="text-slate-500 mt-2 text-sm leading-relaxed">
              {authView === 'login' ? 'Ingia kuendelea na safari yako.' : authView === 'register' ? 'Anza safari yako ya kitalamu.' : 'Ingiza email yako ili uweze kuweka nenosiri jipya.'}
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {authView === 'register' && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-deep-blue ml-1 uppercase tracking-wider">Jina Kamili</label>
                <div className="relative flex items-center">
                  <User className="absolute left-4 text-slate-400" size={18} />
                  <input type="text" placeholder="First + Last Name" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint focus:ring-4 focus:ring-neo-mint/10 transition-all text-sm" required />
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-deep-blue ml-1 uppercase tracking-wider">Barua Pepe</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-slate-400" size={18} />
                <input type="email" placeholder="mfano@gmail.com" className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint focus:ring-4 focus:ring-neo-mint/10 transition-all text-sm" required />
              </div>
            </div>

            {authView !== 'forgot' && (
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-deep-blue uppercase tracking-wider">Nenosiri</label>
                  {authView === 'login' && <button type="button" onClick={() => setAuthView('forgot')} className="text-[11px] font-bold text-neo-mint hover:underline">Umesahau?</button>}
                </div>
                <div className="relative flex items-center">
                  <Lock className="absolute left-4 text-slate-400" size={18} />
                  <input 
                    type={showPassword ? "text" : "password"} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mfano#2123" 
                    className="w-full pl-12 pr-12 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-neo-mint focus:ring-4 focus:ring-neo-mint/10 transition-all text-sm"
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-slate-400 hover:text-deep-blue">
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                
                {authView === 'register' && password.length > 0 && (
                  <div className="mt-2 px-1 animate-in fade-in slide-in-from-top-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Strength:</span>
                      <span className={`text-[10px] font-black uppercase ${strength === 3 ? 'text-neo-mint' : 'text-slate-500'}`}>{labels[strength]}</span>
                    </div>
                    <div className="flex gap-1 h-1.5">
                      {[0, 1, 2, 3].map((step) => (
                        <div key={step} className={`flex-1 rounded-full transition-all duration-500 ${step <= strength ? colors[strength] : 'bg-slate-100'}`}></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            <button type="submit" className="w-full bg-deep-blue text-white py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-deep-blue/20 transition-all active:scale-95 mt-4">
              {authView === 'login' ? 'Ingia Sasa' : authView === 'register' ? 'Tengeneza Akaunti' : 'Tuma Link ya Kurejesha'}
            </button>
          </form>

          {authView !== 'forgot' && (
            <div className="mt-8 text-center">
              <button 
                type="button"
                onClick={() => setAuthView(authView === 'login' ? 'register' : 'login')}
                className="text-sm text-slate-500 font-medium"
              >
                {authView === 'login' ? "Huna akaunti? " : "Tayari una akaunti? "}
                <span className="text-deep-blue font-bold hover:text-neo-mint cursor-pointer">
                  {authView === 'login' ? 'Jisajili Bure' : 'Ingia Hapa'}
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}