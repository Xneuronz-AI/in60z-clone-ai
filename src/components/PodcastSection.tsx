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
      description: "Ever wonder how ChatGPT and other AI models actually work? It all traces back to one foundational paper. Join us as we break down \"Attention Is All You Need,\" the 2017 research that introduced the Transformer architecture. We'll explain how its \"self-attention\" mechanism replaced older models, enabling the large language models that are changing our world today. No PhD required!",
      source: "IN60Z Research Podcast",
      duration: "45M",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: 2,
      title: "Scissors for Genes: The Paper That Democratized DNA Editing with CRISPR",
      description: "The ability to precisely edit genes moved from science fiction to reality thanks to a key 2012 paper. We dive into the study that explained how the CRISPR-Cas9 system could be programmed as a genetic \"scissors.\" Discover how this breakthrough launched a new era in medicine, agriculture, and biology, and sparked an ongoing ethical conversation about the power to rewrite life's code.",
      source: "IN60Z Research Podcast",
      duration: "42M",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: "The Spark That Ignited AI: Revisiting the AlexNet Breakthrough",
      description: "Before 2012, AI was struggling to see. After, it began to eclipse human ability. This is the story of AlexNet, the deep learning model that stunned the tech world by crushing an image recognition competition in 2012. We'll discuss the paper that proved the power of GPU-based neural networks, triggering the multi-billion dollar deep learning boom and setting the stage for the AI age.",
      source: "IN60Z Research Podcast",
      duration: "38M",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 4,
      title: "The Wonder Material: Isolating the First 2D Layer of Carbon",
      description: "What can you do with a material one atom thick that's stronger than steel and conducts electricity better than copper? This week, we're revisiting the landmark 2004 paper that first isolated and tested graphene. Discover how researchers used simple Scotch tape to reveal the astonishing properties of this \"wonder material,\" kicking off a revolution in nanotechnology, electronics, and material science that is still unfolding today.",
      source: "IN60Z Research Podcast",
      duration: "43M",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
            Featured{' '}
            <span className="text-gradient">Podcasts</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Listen to curated podcasts that break down complex research into engaging audio content
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {podcasts.map((podcast, index) => (
            <Card key={podcast.id} className="glass overflow-hidden hover:glow-primary transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Podcast Cover with Gradient */}
              <div className={`h-32 md:h-48 bg-gradient-to-br ${podcast.gradient} flex items-center justify-center relative`}>
                <div className="absolute top-2 md:top-4 right-2 md:right-4">
                  <Button variant="ghost" size="icon" className="w-6 h-6 md:w-8 md:h-8 text-white hover:bg-white/20">
                    <MoreHorizontal className="w-3 h-3 md:w-4 md:h-4" />
                  </Button>
                </div>
                <div className="text-center text-white px-2">
                  <h3 className="font-bold text-sm md:text-lg mb-1 md:mb-2">Science & Tech</h3>
                  <p className="text-xs md:text-sm opacity-90 line-clamp-1">Science and Technology based on paper and podcasts</p>
                </div>
              </div>
              
              {/* Podcast Content */}
              <div className="p-3 md:p-6">
                <h4 className="font-semibold text-sm md:text-lg mb-2 md:mb-3 line-clamp-2">
                  {podcast.title}
                </h4>
                
                <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 line-clamp-2 md:line-clamp-3">
                  {podcast.description}
                </p>
                
                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 md:gap-3">
                    <Button 
                      size="icon" 
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary hover:bg-primary/90"
                      onClick={() => handlePlayPause(podcast.id)}
                    >
                      {currentPlaying === podcast.id ? (
                        <Pause className="w-3 h-3 md:w-4 md:h-4" />
                      ) : (
                        <Play className="w-3 h-3 md:w-4 md:h-4 ml-0.5" />
                      )}
                    </Button>
                    <span className="text-xs md:text-sm font-medium">{podcast.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 md:gap-2">
                    <Button variant="ghost" size="icon" className="w-6 h-6 md:w-8 md:h-8">
                      <Download className="w-3 h-3 md:w-4 md:h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="w-6 h-6 md:w-8 md:h-8">
                      <User className="w-3 h-3 md:w-4 md:h-4" />
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