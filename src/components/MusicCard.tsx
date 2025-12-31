import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface MusicCardProps {
  image: string;
  title: string;
  duration: string;
  audioSrc: string;
}

// Global audio manager to ensure only one audio plays at a time
let currentlyPlaying: HTMLAudioElement | null = null;

const MusicCard = ({ image, title, duration, audioSrc }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(audioSrc);
    audioRef.current = audio;

    const handleTimeUpdate = () => {
      if (audio.duration) {
        setCurrentTime(formatTime(audio.currentTime));
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime("0:00");
      setProgress(0);
      currentlyPlaying = null;
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.pause();
      audioRef.current = null;
    };
  }, [audioSrc]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      currentlyPlaying = null;
    } else {
      // Pause any currently playing audio
      if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
        currentlyPlaying.pause();
      }
      audioRef.current.play();
      currentlyPlaying = audioRef.current;
    }
  };

  return (
    <div className="music-card">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 md:w-20 md:h-20 rounded-md object-cover flex-shrink-0"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm md:text-base font-medium text-foreground mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-secondary/80 text-foreground rounded-full transition-colors"
            aria-label={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" fill="currentColor" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
            )}
          </button>
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs text-muted-foreground w-8">{currentTime}</span>
            <div className="flex-1 h-1 bg-muted rounded-full relative overflow-hidden">
              <div 
                className="absolute left-0 top-0 h-full bg-gold rounded-full transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
              <div 
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full transition-all duration-200"
                style={{ left: `calc(${progress}% - 4px)` }}
              />
            </div>
            <span className="text-xs text-muted-foreground w-8 text-right">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
