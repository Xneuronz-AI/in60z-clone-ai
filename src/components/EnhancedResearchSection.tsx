import React from 'react';
import { Globe, Database, Calendar, Zap } from 'lucide-react';

const EnhancedResearchSection = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Expansive Coverage",
      description: "4+ Domains and 72+ Topics at your fingertips."
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Limitless Knowledge", 
      description: "Millions of publications, from foundational studies to breaking research."
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Global Connections",
      description: "Thousands of academic and industry events, updated daily."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Unmatched Speed",
      description: "Every insight delivered in our signature 60-word summary format."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            The World of Research.{' '}
            <span className="text-gradient">Simplified.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlock the full potential of global research with our comprehensive platform designed for the modern researcher.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:bg-card/80 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-primary/10 rounded-full border border-primary/20">
            <span className="text-primary font-semibold">
              Join thousands of researchers worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedResearchSection;