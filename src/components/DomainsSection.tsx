import React from 'react';
import { Card } from '@/components/ui/card';
import { ShuffleHero } from '@/components/ui/shuffle-grid';
import { 
  Stethoscope, 
  Atom, 
  Lightbulb, 
  Monitor
} from 'lucide-react';

// Import domain images
import medicalImage from '@/assets/domain-medical.jpg';
import scienceImage from '@/assets/domain-science.jpg';
import innovationImage from '@/assets/domain-innovation.jpg';
import technologyImage from '@/assets/domain-technology.jpg';

// Import topic images
import aiImage from '@/assets/topics/ai.jpg';
import quantumImage from '@/assets/topics/quantum.jpg';
import genomicsImage from '@/assets/topics/genomics.jpg';
import astrophysicsImage from '@/assets/topics/astrophysics.jpg';
import blockchainImage from '@/assets/topics/blockchain.jpg';
import roboticsImage from '@/assets/topics/robotics.jpg';
import biotechImage from '@/assets/topics/biotech.jpg';
import nanotechImage from '@/assets/topics/nanotech.jpg';
import sustainableEnergyImage from '@/assets/topics/sustainable-energy.jpg';
import cybersecurityImage from '@/assets/topics/cybersecurity.jpg';
import climateImage from '@/assets/topics/climate.jpg';
import mentalHealthImage from '@/assets/topics/mental-health.jpg';
import iotImage from '@/assets/topics/iot.jpg';
import fintechImage from '@/assets/topics/fintech.jpg';
import machineLearningImage from '@/assets/topics/machine-learning.jpg';
import materialsImage from '@/assets/topics/materials.jpg';

const DomainsSection = () => {
  const domains = [
    {
      name: 'Medical',
      image: medicalImage,
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      name: 'Science',
      image: scienceImage,
      icon: <Atom className="w-6 h-6" />
    },
    {
      name: 'Innovation',
      image: innovationImage,
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      name: 'Technology',
      image: technologyImage,
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  // Topic data for shuffle grid
  const topicImages = [
    { id: 1, src: aiImage, title: 'Artificial Intelligence' },
    { id: 2, src: quantumImage, title: 'Quantum Computing' },
    { id: 3, src: genomicsImage, title: 'Genomics' },
    { id: 4, src: astrophysicsImage, title: 'Astrophysics' },
    { id: 5, src: blockchainImage, title: 'Blockchain' },
    { id: 6, src: roboticsImage, title: 'Robotics' },
    { id: 7, src: biotechImage, title: 'Biotechnology' },
    { id: 8, src: nanotechImage, title: 'Nanotechnology' },
    { id: 9, src: sustainableEnergyImage, title: 'Sustainable Energy' },
    { id: 10, src: cybersecurityImage, title: 'Cybersecurity' },
    { id: 11, src: climateImage, title: 'Climate Science' },
    { id: 12, src: mentalHealthImage, title: 'Mental Health' },
    { id: 13, src: iotImage, title: 'Internet of Things' },
    { id: 14, src: fintechImage, title: 'Fintech' },
    { id: 15, src: machineLearningImage, title: 'Machine Learning' },
    { id: 16, src: materialsImage, title: 'Material Science' },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Discover All <span className="text-gradient">72 Topics</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-full mx-auto text-center px-4 mb-2">
            Maximum Insight. Minimum Time. The 60-Word Research, Events & News Digest.
          </p>
          <p className="text-lg text-muted-foreground max-w-full mx-auto text-center px-4 md:whitespace-nowrap">
            We cover 72 topics across 4 key domains: Innovation, Science, Medical, and Technology.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {domains.map((domain, index) => (
            <Card key={index} className="glass p-6 text-center hover:glow-primary transition-smooth animate-fade-in group" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img 
                  src={domain.image} 
                  alt={domain.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </div>
              
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="text-primary">
                  {domain.icon}
                </div>
                <h3 className="text-2xl font-bold">
                  {domain.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Interactive Topics Grid */}
        <div className="relative">
          <ShuffleHero
            title="Explore Our 72 Topics"
            subtitle="Interactive Discovery"
            description="Watch our diverse topics shuffle and discover the breadth of knowledge across Innovation, Science, Medical, and Technology domains. Each topic is carefully curated to provide maximum insight in minimum time."
            buttonText="Start Exploring"
            squareData={topicImages}
          />
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;