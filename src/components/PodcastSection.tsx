import React, { useState, useRef } from 'react';
import { Play, Download, MoreHorizontal, User, Pause, Clock, Headphones } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import scienceImage from '@/assets/podcast-science.jpg';
import techImage from '@/assets/podcast-tech.jpg';

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
      
      // Map podcast ID to audio file
      const audioFiles = {
        1: '/transformer.mp3',
        2: '/crispr.mp3',
        3: '/alexnet.mp3',
        4: '/graphene.mp3'
      };
      
      const audio = new Audio(audioFiles[podcastId as keyof typeof audioFiles]);
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
      title: "The Architecture Behind the AI Revolution: Unpacking the Transformer Paper",
      description: "Ever wonder how ChatGPT and other AI models actually work? It all traces back to one foundational paper. Join us as we break down \"Attention Is All You Need,\" the 2017 research that introduced the Transformer architecture.",
      source: "IN60Z Research Podcast",
      duration: "45M",
      category: "Tech",
      image: techImage,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 2,
      title: "Scissors for Genes: The Paper That Democratized DNA Editing with CRISPR",
      description: "The ability to precisely edit genes moved from science fiction to reality thanks to a key 2012 paper. We dive into the study that explained how the CRISPR-Cas9 system could be programmed as a genetic \"scissors.\"",
      source: "IN60Z Research Podcast",
      duration: "42M",
      category: "Science",
      image: scienceImage,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: "The Spark That Ignited AI: Revisiting the AlexNet Breakthrough",
      description: "Before 2012, AI was struggling to see. After, it began to eclipse human ability. This is the story of AlexNet, the deep learning model that stunned the tech world by crushing an image recognition competition in 2012.",
      source: "IN60Z Research Podcast",
      duration: "38M",
      category: "Tech",
      image: techImage,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "The Wonder Material: Isolating the First 2D Layer of Carbon",
      description: "What can you do with a material one atom thick that's stronger than steel and conducts electricity better than copper? This week, we're revisiting the landmark 2004 paper that first isolated and tested graphene.",
      source: "IN60Z Research Podcast",
      duration: "43M",
      category: "Science",
      image: scienceImage,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Featured{' '}
            <span className="text-gradient">Podcasts</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-full mx-auto text-center px-4 md:whitespace-nowrap">
            Listen to curated podcasts that break down complex research into engaging audio content
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {podcasts.map((podcast, index) => (
            <Card key={podcast.id} className="group bg-card/50 backdrop-blur-sm border-0 shadow-elegant overflow-hidden hover:shadow-glow hover:scale-105 transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Podcast Cover */}
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={podcast.image} 
                    alt={`${podcast.category} podcast cover`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <div className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium border">
                    {podcast.category}
                  </div>
                </div>
                
                {/* More Options */}
                <div className="absolute top-3 right-3">
                  <Button variant="ghost" size="icon" className="w-8 h-8 bg-background/20 backdrop-blur-sm text-white hover:bg-background/40 border-0">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button 
                    size="icon" 
                    className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm hover:bg-primary shadow-glow"
                    onClick={() => handlePlayPause(podcast.id)}
                  >
                    {currentPlaying === podcast.id ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6 ml-1" />
                    )}
                  </Button>
                </div>
              </div>
              
              {/* Podcast Content */}
              <div className="p-6">
                <h4 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-smooth">
                  {podcast.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {podcast.description}
                </p>
                
                {/* Source and Duration */}
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Headphones className="w-3 h-3" />
                    <span>{podcast.source}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{podcast.duration}</span>
                  </div>
                </div>
                
                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Button 
                      size="icon" 
                      className="w-10 h-10 rounded-full bg-primary hover:bg-primary/90 shadow-sm"
                      onClick={() => handlePlayPause(podcast.id)}
                    >
                      {currentPlaying === podcast.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-accent">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-8 h-8 hover:bg-accent">
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