import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoEnded = () => setIsPlaying(false);

  return (
    <section className="py-16 md:py-32 bg-geometric">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 glow-primary">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              How Our{' '}
              <span className="text-gradient block">Swipe Intelligence Works</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Swipe Intelligence is your quick access to highly curated, 60-word summaries of the world's most critical research, events, and news, delivered instantly by simply swiping your screen.
            </p>
          </div>

          {/* Video Mockup */}
          <div className="flex flex-col items-center animate-slide-in-right">
            <div className="phone-mockup w-64 md:w-72 h-[520px] md:h-[580px] p-2 relative">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover rounded-[2.5rem]"
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                onEnded={handleVideoEnded}
                preload="metadata"
              >
                <source src="/product-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause overlay */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[2.5rem] transition-opacity duration-300">
                  <Button 
                    size="icon" 
                    className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-black backdrop-blur-sm shadow-lg"
                    onClick={handlePlayPause}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              )}
              
              {/* Pause overlay when playing */}
              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-[2.5rem] opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    size="icon" 
                    className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-black backdrop-blur-sm"
                    onClick={handlePlayPause}
                  >
                    <Pause className="w-5 h-5" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;