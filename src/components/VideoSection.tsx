import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VideoSection = () => {
  return (
    <section className="py-32 bg-geometric">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 glow-primary">
                <Play className="w-8 h-8 text-primary" />
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              See In60z in{' '}
              <span className="text-gradient block">Action</span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Watch our comprehensive product demo to see how In60z transforms the way you consume research content. Discover all features and capabilities in action.
            </p>
          </div>

          {/* Video Mockup */}
          <div className="flex flex-col items-center animate-slide-in-right lg:col-start-1">
            <div className="phone-mockup w-72 h-[580px] p-2 relative">
              <video 
                className="w-full h-full object-cover rounded-[2.5rem]"
                controls
                poster="/placeholder.svg"
              >
                <source src="/product-demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button 
                  size="icon" 
                  className="w-16 h-16 rounded-full bg-primary/90 hover:bg-primary backdrop-blur-sm"
                  onClick={() => {
                    const video = document.querySelector('video');
                    if (video) {
                      if (video.paused) {
                        video.play();
                      } else {
                        video.pause();
                      }
                    }
                  }}
                >
                  <Play className="w-6 h-6 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;