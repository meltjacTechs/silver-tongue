import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";

interface SoundProps {
  src: string;
  autoPlay?: boolean;
  loop?: boolean;
  volume?: number;
}

export interface AudioHandle {
  play: () => void;
  pause: () => void;
  stop: () => void;
  setVolume: (vol: number) => void;
}

const Sound = forwardRef<AudioHandle, SoundProps>(
  ({ src, autoPlay = false, loop = false, volume = 1 }, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useImperativeHandle(ref, () => ({
      play: () => {
        audioRef.current?.play().catch((error) => {
          console.error("Audio playback failed:", error);
        });
      },
      pause: () => {
        audioRef.current?.pause();
      },
      stop: () => {
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      },
      setVolume: (vol: number) => {
        if (audioRef.current) {
          audioRef.current.volume = Math.min(Math.max(vol, 0), 1);
        }
      },
    }));

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = Math.min(Math.max(volume, 0), 1);
    }, [volume]);

    useEffect(() => {
      const audio = audioRef.current;
      if (!audio || !autoPlay) return;

      const playAudio = async () => {
        try {
          await audio.play();
        } catch (error) {
          console.error("Audio autoplay failed:", error);
        }
      };

      // Add a small delay to ensure audio element is ready
      const timer = setTimeout(playAudio, 100);
      return () => clearTimeout(timer);
    }, [autoPlay]);

    return <audio ref={audioRef} src={`/audio/${src}`} loop={loop} />;
  }
);

Sound.displayName = "Sound";

export default Sound;