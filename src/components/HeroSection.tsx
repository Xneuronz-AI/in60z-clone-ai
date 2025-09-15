import React from 'react';
import { Button } from '@/components/ui/button';
import heroPhone from '@/assets/hero-phone.png';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-geometric overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Get informed,{' '}
              <span className="text-gradient block">In 60 words</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
              We cut the clutter and deliver the essence in 60-word summaries, perfect for the mobile generation.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10">
              Research Papers, Podcasts, Events and News — All in One Place
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button className="app-store-btn p-0 h-auto bg-transparent hover:bg-transparent">
                <img src={appStore} alt="Download on App Store" className="h-14 w-auto" />
              </Button>
              <Button className="app-store-btn p-0 h-auto bg-transparent hover:bg-transparent">
                <img src={googlePlay} alt="Get it on Google Play" className="h-14 w-auto" />
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="phone-mockup w-80 h-[650px] p-2">
                <img 
                  src={heroPhone} 
                  alt="In60z App Interface" 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
              
              {/* Floating elements around phone */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full glow-primary animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent rounded-full glow-accent animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;