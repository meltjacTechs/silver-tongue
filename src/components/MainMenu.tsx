import React, { useState, useEffect } from 'react';
import { 
  Zap, Wallet, Scroll, Settings, LogOut, 
  TrendingUp, ShieldCheck, Crown,
  ArrowUpRight, Activity
} from 'lucide-react';
import Sound from './Sound';

const ZenithVault = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [balance, setBalance] = useState(125430.75);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => setBalance(b => b + Math.random() * 0.8), 1000);
    return () => clearInterval(tick);
  }, []);

  const menu = [
    { label: 'INITIATE', sub: 'QUEST LINE', icon: <Zap />, color: 'hover:shadow-[0_0_50px_rgba(251,191,36,0.3)]', emoticon: '/emoticons/initiate.webm' },
    { label: 'TREASURY', sub: 'ASSET MAP', icon: <Wallet />, color: 'hover:shadow-[0_0_50px_rgba(245,158,11,0.3)]', emoticon: '/emoticons/treasury.webm' },
    { label: 'ARCHIVES', sub: 'DATA LOGS', icon: <Scroll />, color: 'hover:shadow-[0_0_50px_rgba(217,119,6,0.3)]', emoticon: '/emoticons/archives.webm' },
    { label: 'SETTINGS', sub: 'TERMINAL', icon: <Settings />, color: 'hover:shadow-[0_0_50px_rgba(161,161,170,0.3)]', emoticon: '/emoticons/settings.webm' },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#050400] text-amber-50 font-sans select-none perspective-1000 cursor-default">
      
      {/* --- BACKGROUND ENGINE --- */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out scale-110"
        style={{ transform: `translate(${mouse.x * -0.6}px, ${mouse.y * -0.6}px)` }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12)_0%,transparent_60%)] animate-pulse" />
        
        {/* Obsidian Monoliths */}
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-gradient-to-b from-[#1a1500] to-black border-x border-amber-500/10 shadow-[0_0_100px_rgba(0,0,0,1)] animate-float-slow"
            style={{
              width: `${120 + i * 40}px`,
              height: `${250 + i * 80}px`,
              left: `${10 + i * 18}%`,
              top: `${15 + (i % 3) * 12}%`,
              animationDelay: `${i * -2.5}s`,
              opacity: 0.3
            }}
          />
        ))}

        {/* Floating Embers */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-amber-500 rounded-full blur-[1px] animate-rise"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 4}s`,
              opacity: Math.random() * 0.5
            }}
          />
        ))}
      </div>

      {/* --- HUD INTERFACE --- */}
      <div className="relative z-20 h-full flex flex-col p-12 pointer-events-none">
        
        {/* Header Section */}
        <div className="flex justify-between items-start animate-slide-down">
          <div className="flex gap-6">
             <div className="w-16 h-16 rounded-2xl border border-amber-500/40 bg-black/80 flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                <img src="/favicon.svg" alt="Silver Tongue" className="w-8 h-8 animate-pulse" />
             </div>
             <div>
                <h1 className="text-5xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-amber-100 via-amber-400 to-amber-100 animate-shimmer">
                  SILVER TONGUE
                </h1>
                <div className="flex gap-4 mt-2">
                   <span className="flex items-center gap-1 text-[9px] text-amber-500 font-black tracking-[0.3em] uppercase">
                      <ShieldCheck size={12}/> Wealth Protected
                   </span>
                   <span className="flex items-center gap-1 text-[9px] text-emerald-500 font-black tracking-[0.3em] uppercase">
                      <Activity size={12}/> Money talks
                   </span>
                </div>
             </div>
          </div>

          <button className="group relative flex items-center gap-4 p-4 px-8 bg-gradient-to-r from-[#2a0000] to-[#4a0000] hover:from-[#600] hover:to-[#800] border border-red-950 hover:border-red-500/50 rounded-2xl transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] cursor-pointer overflow-hidden pointer-events-auto">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity" />
             <span className="relative z-10 text-[10px] font-black tracking-[0.4em] text-red-200/60 group-hover:text-red-100 transition-colors">DISCONNECT</span>
             <LogOut size={18} className="relative z-10 text-red-700 group-hover:text-red-400 group-hover:translate-x-2 transition-all duration-500" />
          </button>
        </div>

        {/* Center: Command Node Grid */}
        <div className="flex-1 flex items-center justify-center pointer-events-auto">
          <div 
            className="relative w-full max-w-6xl grid grid-cols-4 gap-8 transition-transform duration-700 ease-out"
            style={{ transform: `rotateY(${mouse.x * 0.25}deg) rotateX(${mouse.y * -0.25}deg)` }}
          >
            {menu.map((item, i) => (
              <button
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative h-[480px] bg-black/60 backdrop-blur-xl border border-amber-500/10 rounded-[2.5rem] overflow-hidden transition-all duration-700 cursor-pointer ${item.color} hover:border-amber-400/60 hover:-translate-y-10`}
              >
                {/* Internal Glow Shaders */}
                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-amber-400/5 blur-[100px] group-hover:bg-amber-400/20 transition-all duration-1000" />

                {/* Emoticon Video */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                  <video 
                    src={item.emoticon} 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="w-32 h-32 object-contain"
                  />
                </div>

                <div className="absolute inset-0 p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="p-5 bg-amber-500/5 rounded-3xl text-amber-400 group-hover:bg-amber-500 group-hover:text-black group-hover:rotate-[360deg] transition-all duration-1000 ease-in-out">
                      {item.icon}
                    </div>
                    <div className="h-8 w-px bg-amber-500/20 group-hover:h-16 transition-all duration-700" />
                  </div>

                  <div>
                    <p className="text-[10px] font-black tracking-[0.5em] text-amber-700 mb-3 uppercase">{item.sub}</p>
                    <h3 className="text-4xl font-black italic tracking-tighter text-white group-hover:text-amber-400 transition-colors">
                      {item.label}
                    </h3>
                    <div className="w-4 group-hover:w-full h-[2px] bg-gradient-to-r from-amber-500 to-transparent mt-6 transition-all duration-1000" />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-30px) rotate(1.5deg); } }
        @keyframes rise { 0% { transform: translateY(100vh) scale(0); opacity: 0; } 50% { opacity: 0.6; } 100% { transform: translateY(-100px) scale(2); opacity: 0; } }
        .animate-shimmer { background-size: 200% auto; animation: shimmer 10s linear infinite; }
        .animate-float-slow { animation: float-slow 15s ease-in-out infinite; }
        .animate-rise { animation: rise infinite linear; }
        .animate-slide-down { animation: slide-down 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slide-up { animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1); }
        @keyframes slide-down { from { opacity: 0; transform: translateY(-60px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slide-up { from { opacity: 0; transform: translateY(60px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
};

export default ZenithVault;