import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";

interface MusicCardProps {
  image: string;
  title: string;
  duration: string;
}

const MusicCard = ({ image, title, duration }: MusicCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const progressRef = useRef<HTMLDivElement>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
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
            className="bg-secondary hover:bg-secondary/80 text-foreground text-xs px-3 py-1.5 rounded-md font-medium transition-colors"
          >
            PLAY
          </button>
          <div className="flex items-center gap-2 flex-1">
            <span className="text-xs text-muted-foreground">{currentTime}</span>
            <div
              ref={progressRef}
              className="flex-1 h-1 bg-muted rounded-full relative"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-gold rounded-full" />
            </div>
            <span className="text-xs text-muted-foreground">{duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
