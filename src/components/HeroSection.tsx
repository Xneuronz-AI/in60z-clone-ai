import React from 'react';
import { Button } from '@/components/ui/button';
import heroPhone from '@/assets/podcasts-phone.png';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';
import WaitlistForm from '@/components/WaitlistForm';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-geometric overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-8 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              Get informed,{' '}
              <span className="text-gradient block">In 60 words</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-4 md:mb-8 max-w-2xl mx-auto lg:mx-0">
              We cut the clutter and deliver the essence in 60-word summaries, perfect for the mobile generation.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-10">
              Research Papers, Podcasts, Events and News — All in One Place
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start mb-8 md:mb-12 items-center">
              <div className="cursor-pointer">
                <img src={appStore} alt="Download on App Store" className="h-12 md:h-14 w-auto" />
              </div>
              <div className="cursor-pointer">
                <img src={googlePlay} alt="Get it on Google Play" className="h-12 md:h-14 w-auto" />
              </div>
              <Button 
                onClick={() => {
                  document.querySelector('[data-waitlist-trigger]')?.dispatchEvent(new Event('click', { bubbles: true }));
                }}
                className="h-12 md:h-14 px-6 text-sm font-medium border border-primary text-primary bg-transparent hover:bg-primary/10 transition-smooth"
              >
                Join Our Waitlist
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center animate-slide-in-right order-1 lg:order-2">
            <div className="relative">
              <div className="phone-mockup w-64 md:w-80 h-[520px] md:h-[650px] p-2">
                <img 
                  src={heroPhone} 
                  alt="In60z App Interface" 
                  className="w-full h-full object-cover rounded-[2.5rem]"
                />
              </div>
              
              {/* Floating elements around phone */}
              <div className="absolute -top-2 md:-top-4 -left-2 md:-left-4 w-6 md:w-8 h-6 md:h-8 bg-primary rounded-full glow-primary animate-glow-pulse"></div>
              <div className="absolute -bottom-2 md:-bottom-4 -right-2 md:-right-4 w-4 md:w-6 h-4 md:h-6 bg-accent rounded-full glow-accent animate-glow-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;