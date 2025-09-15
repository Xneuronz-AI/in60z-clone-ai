import React, { useState, useRef } from 'react';
import { Play, Download, MoreHorizontal, User, Pause } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PodcastSection = () => {
  const [currentPlaying, setCurrentPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = (podcastId: number) => {
    if (currentPlaying === podcastId) {
      // Pause current podcast
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentPlaying(null);
    } else {
      // Play new podcast
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setCurrentPlaying(podcastId);
      
      // Create new audio element for the transformer.mp3
      const audio = new Audio('/transformer.mp3');
      audioRef.current = audio;
      audio.play();
      
      audio.onended = () => {
        setCurrentPlaying(null);
      };
    }
  };

  const podcasts = [
    {
      id: 1,
      title: "Why the Human Brain Perceives Small Numbers Better",
      description: "The discovery that the brain has different systems for representing small and large numbers provokes new questions about memory, attention and mathematics.",
      source: "Quanta Science Podcast",
      duration: "45M",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Will the Supreme Court Grant Immunity?",
      description: "Tommy, guest host Alyssa Mastromonaco, and Scott Scrutiny's Leah Litman break down the Trump team's immunity argument at the Supreme Court.",
      source: "Pod Save America",
      duration: "47M",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: "Memory and Forgetting",
      description: "Remembering is a tricky, unstable business. This hour: a look behind the curtain of how memories are made... and forgotten.",
      source: "Radiolab",
      duration: "45M",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "Campus Tensions Rise, Immunity, Weinstein's Conviction Tossed",
      description: "As protests and arrests continue on campuses across the U.S., Supreme Court to hear oral arguments in Israel divestment case.",
      source: "Up First",
      duration: "45M",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-30"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Featured{' '}
            <span className="text-gradient">Podcasts</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Listen to curated podcasts that break down complex research into engaging audio content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {podcasts.map((podcast, index) => (
            <Card key={podcast.id} className="glass overflow-hidden hover:glow-primary transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Podcast Cover with Gradient */}
              <div className={`h-48 bg-gradient-to-br ${podcast.gradient} flex items-center justify-center relative`}>
                <div className="absolute top-4 right-4">
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                <div className="text-center text-white">
                  <h3 className="font-bold text-lg mb-2">{podcast.source.split(' ')[0]}</h3>
                  <p className="text-sm opacity-90">{podcast.source}</p>
                </div>
              </div>
              
              {/* Podcast Content */}
              <div className="p-6">
                <h4 className="font-semibold text-lg mb-3 line-clamp-2">
                  {podcast.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {podcast.description}
                </p>
                
                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button 
                      size="icon" 
                      className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90"
                      onClick={() => handlePlayPause(podcast.id)}
                    >
                      {currentPlaying === podcast.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </Button>
                    <span className="text-sm font-medium">{podcast.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8">
                      <User className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PodcastSection;