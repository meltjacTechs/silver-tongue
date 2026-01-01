import { useState } from "react";
import { account } from "../lib/appwrite";
import { motion } from "framer-motion";
import GoogleAuth from "./GoogleAuth";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const enterRealm = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      alert("⚔️ Welcome back, Champion");
    } catch {
      alert("❌ Wrong scroll or rune");
    }
  };

  return (
    <div className="flex min-h-screen bg-black text-yellow-500/90 font-sans">
      
      {/* LEFT SIDE: World Building / Art */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black items-center justify-center p-12 border-r border-yellow-900/30">
        <div className="absolute w-[400px] h-[400px] bg-yellow-600/5 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 space-y-6 max-w-md">
           <motion.div
             initial={{ opacity: 0, x: -20 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
           >
             <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none">
                Master Thy <span className="text-yellow-500">Treasury.</span>
             </h1>
             <p className="mt-4 text-lg text-gray-400 font-medium leading-relaxed">
                Log thy daily expenses, complete financial quests, and grow thy gold reserves in the realm of <span className="text-yellow-600 font-bold">Silver Tongue.</span>
             </p>
           </motion.div>

           <div className="pt-4 flex gap-2">
             {[1, 2, 3, 4, 5].map((star) => (
               <span key={star} className="text-yellow-500 text-xl">★</span>
             ))}
           </div>
        </div>

        <div className="absolute bottom-10 left-10 text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
           © Silver Tongue
        </div>
      </div>

      {/* RIGHT SIDE: The Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-black">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-[400px] space-y-8"
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-black tracking-tight text-white uppercase italic">
               Enter The Realm!
            </h2>
            <p className="text-sm text-gray-500 mt-2 font-medium uppercase tracking-widest">
               Identify Thyself to Enter the Realm
            </p>
          </div>

          <form onSubmit={enterRealm} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-700 ml-1">Messenger Scroll</label>
              <input
                className="w-full rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-yellow-600 focus:bg-gray-900"
                placeholder="name@realm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-widest text-yellow-700 ml-1">Secret Rune</label>
              <input
                type="password"
                className="w-full rounded-xl border border-gray-800 bg-gray-900/50 p-4 text-white placeholder-gray-600 outline-none transition-all focus:border-yellow-600 focus:bg-gray-900"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="w-full rounded-xl bg-yellow-500 py-4 font-black uppercase tracking-widest text-black hover:bg-yellow-400 hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-yellow-600/10">
              Respawn Player
            </button>
          </form>

          <div className="relative flex items-center gap-4 py-2">
            <div className="h-[1px] flex-1 bg-gray-800"></div>
            <span className="text-[9px] font-bold text-gray-600 uppercase tracking-widest">Or Divine Magic</span>
            <div className="h-[1px] flex-1 bg-gray-800"></div>
          </div>

          <div className="flex justify-center">
            <GoogleAuth />
          </div>

          <p className="text-center text-xs text-gray-500 font-medium tracking-wide">
            New traveler? <a href="/signup" className="text-yellow-600 hover:text-yellow-400 font-bold underline underline-offset-4 decoration-yellow-900">Create an account</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default SignIn;