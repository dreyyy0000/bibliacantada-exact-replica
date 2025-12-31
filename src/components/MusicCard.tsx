import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface MusicCardProps {
  image: string;
  title: string;
  duration: string;
  audioSrc?: string;
}

const MusicCard = ({ image, title, duration, audioSrc }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // For demo purposes, we simulate playback since we don't have actual audio files
      setIsPlaying(true);
      
      // Simulate progress
      const totalSeconds = parseDuration(duration);
      let elapsed = 0;
      
      const interval = setInterval(() => {
        elapsed += 1;
        if (elapsed >= totalSeconds) {
          setIsPlaying(false);
          setCurrentTime("0:00");
          setProgress(0);
          clearInterval(interval);
        } else {
          setCurrentTime(formatTime(elapsed));
          setProgress((elapsed / totalSeconds) * 100);
        }
      }, 1000);

      // Store interval for cleanup
      audioRef.current.dataset.intervalId = String(interval);
    }
  };

  const parseDuration = (dur: string) => {
    const [mins, secs] = dur.split(":").map(Number);
    return mins * 60 + secs;
  };

  // Stop simulation when pausing
  useEffect(() => {
    if (!isPlaying && audioRef.current?.dataset.intervalId) {
      clearInterval(Number(audioRef.current.dataset.intervalId));
    }
  }, [isPlaying]);

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
