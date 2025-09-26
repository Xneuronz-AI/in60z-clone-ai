import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';
import WaitlistForm from '@/components/WaitlistForm';

const CTASection = () => {
  return (
    <section className="py-16 md:py-32 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-30"></div>
      <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 md:mb-8">
            Ready to{' '}
            <span className="text-gradient">Transform</span>{' '}
            Your Learning?
          </h2>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12">
            Whether you're a Researcher, Student, Entrepreneur, or Medical Professional, join the waitlist to cut through the noise and stay informed in 60 words.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button className="app-store-btn p-0 h-auto bg-transparent hover:bg-transparent">
                <img src={appStore} alt="Download on App Store" className="h-12 md:h-16 w-auto" />
              </Button>
              <Button className="app-store-btn p-0 h-auto bg-transparent hover:bg-transparent">
                <img src={googlePlay} alt="Get it on Google Play" className="h-12 md:h-16 w-auto" />
              </Button>
            </div>
            
            <div className="flex items-center">
              <span className="text-muted-foreground mr-3 md:mr-4 text-sm md:text-base">or</span>
              <WaitlistForm 
                trigger={
                  <Button variant="outline" size="lg" className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 glow-primary">
                <Download className="w-6 md:w-8 h-6 md:h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Free to Download</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Get started with our free tier and upgrade as you grow</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 glow-primary">
                <span className="text-xl md:text-2xl font-bold text-primary">60</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">60-Word Summaries</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Perfect length for mobile consumption and quick learning</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4 glow-primary">
                <span className="text-xl md:text-2xl font-bold text-primary">24/7</span>
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Always Updated</h3>
              <p className="text-muted-foreground text-xs md:text-sm">Latest research and content delivered continuously</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;