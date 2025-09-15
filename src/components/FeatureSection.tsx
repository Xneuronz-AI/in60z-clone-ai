import React from 'react';
import { FileText, Network, Podcast, Calendar, Zap, BookOpen, Newspaper } from 'lucide-react';
import { Card } from '@/components/ui/card';
import researchPhone from '@/assets/research-phone.png';
import researchDetailPhone from '@/assets/research-detail-phone.png';
import relatedPapersPhone from '@/assets/related-papers-phone.png';
import podcastsPhone from '@/assets/podcasts-phone.png';
import eventPhone from '@/assets/event-phone.png';
import newsPhone from '@/assets/news-phone.png';
import discoverPhone from '@/assets/discover-phone.png';

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
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: "Deep Dive into",
      subtitle: "Research Details",
      description: "Explore comprehensive research papers with detailed analysis, methodology, and findings. Get the full context and understand the implications of groundbreaking studies.",
      image: researchDetailPhone,
      reverse: true,
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Connect the Dots",
      subtitle: "with Related Papers",
      description: "Our Connected Papers feature maps out the relationships between studies, helping you find foundational and related work in an instant. Visualize the research landscape.",
      image: relatedPapersPhone,
    },
    {
      icon: <Podcast className="w-8 h-8 text-primary" />,
      title: "Your Research Podcast,",
      subtitle: "Simplified.",
      description: "Dive deep into the research with our 15-minute podcasts. We explore the methodology, findings, and implications of papers in an engaging audio format.",
      image: podcastsPhone,
      reverse: true,
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Webinars, Events",
      subtitle: "& Hackathons",
      description: "Stay updated with the latest conferences, webinars, and hackathons in your field. Never miss an important event again with our curated event listings.",
      image: eventPhone,
    },
    {
      icon: <Newspaper className="w-8 h-8 text-primary" />,
      title: "Latest News",
      subtitle: "in Tech & AI",
      description: "Get the most important news in technology, AI, and research. We curate and summarize the stories that matter most to researchers and innovators.",
      image: newsPhone,
      reverse: true,
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Discover",
      subtitle: "New Frontiers",
      description: "Explore curated content across multiple categories. From green energy to blockchain, discover the latest research and innovations across all fields of study.",
      image: discoverPhone,
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