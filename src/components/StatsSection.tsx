import React from 'react';
import { Card } from '@/components/ui/card';
import { Users, BookOpen, Clock, TrendingUp } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "100K+",
      label: "Active Users",
      description: "Growing community of researchers and learners"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      number: "10K+",
      label: "Research Papers",
      description: "Summarized and made accessible"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      number: "60",
      label: "Words Max",
      description: "Every summary fits in 60 words"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      number: "95%",
      label: "Time Saved",
      description: "Compared to reading full papers"
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-50"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Trusted by{' '}
            <span className="text-gradient">Researchers Worldwide</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of researchers, students, and professionals who are staying informed with In60z
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