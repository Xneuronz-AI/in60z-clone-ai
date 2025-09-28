import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import atalLogo from '@/assets/atal-incubation-new.png';
import ipvLogo from '@/assets/ipv-logo.webp';
import wadhwaniLogo from '@/assets/wadhwani-foundation-new.webp';

const IncubationSection = () => {
  return (
    <section className="py-16 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Incubators</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Backed by the expertise of Atal Incubation JKLU, Inflection Point Ventures, and the Wadhwani Foundation, we have been able to accelerate our mission. Their strategic guidance and resources have been instrumental in building a world-class platform for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Atal Incubation JKLU */}
          <Card className="glass border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-6">
                <img 
                  src={atalLogo} 
                  alt="AIC-JKLU Logo" 
                  className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Atal Incubation Center, JKLU
              </h3>
              
              <div className="flex flex-col gap-3 justify-center mt-6">
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  asChild
                >
                  <a href="https://drive.google.com/file/d/1RIoEycWsgpOE0J5qBGG7qgjFIUYHrNaC/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    Recommendation
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://jklu.edu.in/centres/atal-incubation-centre" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Inflection Point Ventures */}
          <Card className="glass border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-6">
                <img 
                  src={ipvLogo} 
                  alt="Inflection Point Ventures Logo" 
                  className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Inflection Point Ventures
              </h3>
              
              <div className="flex justify-center mt-6">
                <Button 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://ipventures.in/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Wadhwani Foundation */}
          <Card className="glass border-border/50 hover:border-primary/30 transition-all duration-300 group">
            <CardContent className="p-6 md:p-8 text-center">
              <div className="mb-6">
                <img 
                  src={wadhwaniLogo} 
                  alt="Wadhwani Foundation Logo" 
                  className="w-32 h-32 md:w-36 md:h-36 mx-auto object-contain"
                />
              </div>
              
              <h3 className="text-lg md:text-xl font-bold mb-2">
                Wadhwani Foundation
              </h3>
              
              <div className="flex justify-center mt-6">
                <Button 
                  variant="outline" 
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a href="https://wadhwanifoundation.org/" target="_blank" rel="noopener noreferrer">
                    Visit Website
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IncubationSection;