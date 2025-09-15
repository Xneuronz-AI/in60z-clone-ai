import React from 'react';
import { FileText, Network, Podcast, Calendar, Zap, BookOpen } from 'lucide-react';
import { Card } from '@/components/ui/card';
import researchPhone from '@/assets/research-phone.png';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  reverse?: boolean;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, subtitle, description, image, reverse = false }) => {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-center mb-32 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={`animate-fade-in ${reverse ? 'lg:col-start-2' : ''}`}>
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4 glow-primary">
            {icon}
          </div>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
          {title}
          {subtitle && <span className="text-gradient block">{subtitle}</span>}
        </h2>
        
        <p className="text-xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      {/* Image/Mockup */}
      <div className={`flex justify-center animate-slide-in-right ${reverse ? 'lg:col-start-1' : ''}`}>
        {image ? (
          <div className="phone-mockup w-72 h-[580px] p-2">
            <img 
              src={image} 
              alt="Feature mockup" 
              className="w-full h-full object-cover rounded-[2.5rem]"
            />
          </div>
        ) : (
          <div className="w-72 h-80 rounded-3xl bg-gradient-card flex items-center justify-center glow-accent">
            <div className="text-6xl text-primary/30">
              {icon}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Research Papers,",
      subtitle: "Simplified in 60 words",
      description: "Stay ahead of the curve with bite-sized summaries of the latest research papers. We turn complex papers into digestible knowledge, so you can learn more in less time.",
      image: researchPhone,
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Connect the Dots",
      subtitle: "by going backwards",
      description: "Our Connected Papers feature maps out the relationships between studies, helping you find foundational and related work in an instant.",
      reverse: true,
    },
    {
      icon: <Podcast className="w-8 h-8 text-primary" />,
      title: "Your Research Podcast,",
      subtitle: "Simplified.",
      description: "Dive deep into the research. Our 15-minute podcasts explore the methodology, findings, and implications of a paper.",
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Webinars, Events",
      subtitle: "& Hackathons",
      description: "Stay updated with the latest conferences, webinars, and hackathons in your field. Never miss an important event again.",
      reverse: true,
    },
  ];

  return (
    <section className="py-32 bg-geometric">
      <div className="container mx-auto px-6">
        {features.map((feature, index) => (
          <Feature key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;