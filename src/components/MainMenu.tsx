import { motion } from "framer-motion";
import { account } from "../lib/appwrite";
import { useState, useEffect, useRef } from "react";
import Sound from "./Sound";
import type { AudioHandle } from "./Sound";

const MainMenu = () => {
  const [userName, setUserName] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<AudioHandle>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get();
        setUserName(user.name || user.email);
      } catch (error) {
        console.error("Failed to get user:", error);
      }
    };
    getUser();
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      window.location.href = "/sign-in";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-yellow-500/90 font-sans flex items-center justify-center p-6 relative">
      {/* Sound Component */}
      <Sound ref={audioRef} src="background.m4a" autoPlay loop volume={0.3} />

      {/* Speaker Icon Button - Upper Left */}
      <button
        onClick={() => {
          if (isPlaying) {
            audioRef.current?.pause();
            setIsPlaying(false);
          } else {
            audioRef.current?.play();
            setIsPlaying(true);
          }
        }}
        className="absolute top-6 left-6 z-50 p-3 rounded-xl bg-yellow-500/20 hover:bg-yellow-500/30 border border-yellow-500/50 hover:border-yellow-500 transition-all hover:scale-110 active:scale-95"
        title={isPlaying ? "Pause" : "Play"}
      >
        <span className="text-2xl">{isPlaying ? "🔊" : "🔇"}</span>
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-2xl space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <img src="/favicon.svg" alt="Silver Tongue" className="w-20 h-20" />
          </div>
          <h1 className="text-5xl font-black italic tracking-tighter text-white uppercase leading-none">
            Welcome to <span className="text-yellow-500">Silver Tongue</span>
          </h1>
          {userName && (
            <p className="text-lg text-gray-400 font-medium">
              Greetings, <span className="text-yellow-600 font-bold">{userName}</span>
            </p>
          )}
        </div>

        {/* Menu Options */}
        <div className="grid gap-4 mt-12">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl bg-yellow-500 py-6 font-black uppercase tracking-widest text-black hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-600/20"
          >
            ⚔️ Start Quest
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-yellow-600/50 bg-gray-900/50 py-6 font-black uppercase tracking-widest text-yellow-500 hover:bg-gray-900 hover:border-yellow-500 transition-all"
          >
            💰 View Treasury
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-yellow-600/50 bg-gray-900/50 py-6 font-black uppercase tracking-widest text-yellow-500 hover:bg-gray-900 hover:border-yellow-500 transition-all"
          >
            📜 Quest Log
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full rounded-xl border border-yellow-600/50 bg-gray-900/50 py-6 font-black uppercase tracking-widest text-yellow-500 hover:bg-gray-900 hover:border-yellow-500 transition-all"
          >
            ⚙️ Settings
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="w-full mt-4 rounded-xl border border-red-900/50 bg-gray-900/30 py-4 font-bold uppercase tracking-widest text-red-500 hover:bg-red-900/20 hover:border-red-700 transition-all"
          >
            🚪 Leave Realm
          </motion.button>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <div className="flex gap-2 justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-yellow-500 text-xl">★</span>
            ))}
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-700 font-bold">
            © MMXXVI Silver Tongue
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MainMenu;
