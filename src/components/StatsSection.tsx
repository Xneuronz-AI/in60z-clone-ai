import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, BookOpen, Clock, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "4+",
      label: "Domains",
      description: "Comprehensive coverage across research fields"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      number: "72+",
      label: "Topics",
      description: "Diverse subject areas to explore"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "Millions",
      label: "Access to Papers",
      description: "Vast collection of research publications"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "Thousands",
      label: "Access to Events",
      description: "Stay updated with research conferences"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-50"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Comprehensive Research{' '}
            <span className="text-gradient">Access Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your gateway to organized research content across multiple domains and topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="glass p-8 text-center hover:glow-primary transition-smooth animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-primary">
                {stat.icon}
              </div>
              
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-semibold mb-3">
                {stat.label}
              </h3>
              
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;