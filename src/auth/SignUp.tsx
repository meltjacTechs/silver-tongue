import { useState } from "react";
import { account } from "../lib/appwrite";
import { motion } from "framer-motion";
import GoogleAuth from "./GoogleAuth";

const SignUp = () => {
  const [heroName, setHeroName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const createHero = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.create("unique()", email, password, heroName);
      await account.createEmailPasswordSession(email, password);
      alert("🗡️ Hero Created! Welcome to the Realm");
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-yellow-500/90 font-sans overflow-hidden">
      
      <div className="hidden lg:flex w-1/2 relative bg-gradient-to-tr from-gray-900 via-black to-yellow-900/10 items-center justify-center p-12 border-r border-yellow-900/20">
        <div className="absolute w-[500px] h-[500px] bg-yellow-600/5 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 space-y-6 max-w-md text-center lg:text-left">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <div className="flex gap-1 mb-6 justify-center lg:justify-start">
               {[1, 2, 3, 4, 5].map((star) => (
                 <span key={star} className="text-yellow-500 text-2xl">★</span>
               ))}
             </div>

             <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-[0.9]">
                Forge Thy <span className="text-yellow-500 text-glow">Financial Destiny.</span>
             </h1>
             <p className="mt-6 text-lg text-gray-400 font-medium leading-relaxed">
                Every legend begins with a single coin. Master the arts of saving, investing, and wealth to conquer the <span className="text-yellow-600">Silver Tongue Realm.</span>
             </p>

             <div className="mt-10 text-6xl drop-shadow-2xl">⚔️</div>
           </motion.div>
        </div>

        <div className="absolute bottom-10 left-10 text-[10px] uppercase tracking-[0.4em] text-gray-800 font-bold">
           Est. MMXXVI • SILVER TONGUE
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-black relative">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-[400px] space-y-6"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black tracking-widest text-white uppercase italic">
               Forge Your Legend
            </h2>
            <p className="text-[10px] text-yellow-600/70 mt-2 font-bold uppercase tracking-[0.3em]">
               Begin your financial odyssey
            </p>
          </div>

          <form onSubmit={createHero} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-800 ml-1">Character Alias</label>
              <input
                className="w-full rounded-xl border border-gray-800 bg-gray-900/30 p-4 text-white placeholder-gray-700 outline-none transition-all focus:border-yellow-600 focus:bg-gray-900/60"
                placeholder="e.g. Silver Knight"
                value={heroName}
                onChange={(e) => setHeroName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-800 ml-1">Messenger Scroll</label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-800 bg-gray-900/30 p-4 text-white placeholder-gray-700 outline-none transition-all focus:border-yellow-600 focus:bg-gray-900/60"
                placeholder="your@realm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-800 ml-1">Vault Cipher</label>
              <input
                type="password"
                className="w-full rounded-xl border border-gray-800 bg-gray-900/30 p-4 text-white placeholder-gray-700 outline-none transition-all focus:border-yellow-600 focus:bg-gray-900/60"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button className="w-full mt-2 rounded-xl bg-gradient-to-r from-yellow-700 via-yellow-400 to-yellow-700 py-4 font-black uppercase tracking-widest text-black hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-yellow-600/10">
              Manifest Hero
            </button>
          </form>

          <div className="relative flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-gray-900"></div>
            <span className="text-[9px] font-bold text-gray-700 uppercase tracking-[0.2em]">Or Divine Magic</span>
            <div className="h-[1px] flex-1 bg-gray-900"></div>
          </div>

          <div className="flex justify-center">
            <GoogleAuth />
          </div>

          <p className="text-center text-[10px] text-gray-600 font-bold uppercase tracking-widest">
            Already a legend? <a href="/signin" className="text-yellow-600 hover:text-yellow-400 transition-colors underline underline-offset-4 decoration-yellow-900/40">Enter the Gate</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp;