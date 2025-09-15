import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import appStore from '@/assets/app-store.png';
import googlePlay from '@/assets/google-play.png';

const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-30"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8">
            Ready to{' '}
            <span className="text-gradient">Transform</span>{' '}
            Your Learning?
          </h2>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12">
            Join thousands of researchers and professionals who are staying ahead with In60z. 
            Get the knowledge you need, when you need it, in just 60 words.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="app-store-btn p-0 h-auto bg-transparent hover:bg-transparent">
                <img src={appStore} alt="Download on App Store" className="h-16 w-auto" />
              </Button>
              <Button className="app-store-btn p-0 h-auto bg-transparent hover:bg-transparent">
                <img src={googlePlay} alt="Get it on Google Play" className="h-16 w-auto" />
              </Button>
            </div>
            
            <div className="flex items-center">
              <span className="text-muted-foreground mr-4">or</span>
              <Button variant="outline" size="lg" className="group bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Try Web App
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-primary">
                <Download className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Free to Download</h3>
              <p className="text-muted-foreground text-sm">Get started with our free tier and upgrade as you grow</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-primary">
                <span className="text-2xl font-bold text-primary">60</span>
              </div>
              <h3 className="font-semibold mb-2">60-Word Summaries</h3>
              <p className="text-muted-foreground text-sm">Perfect length for mobile consumption and quick learning</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 glow-primary">
                <span className="text-2xl font-bold text-primary">24/7</span>
              </div>
              <h3 className="font-semibold mb-2">Always Updated</h3>
              <p className="text-muted-foreground text-sm">Latest research and content delivered continuously</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;