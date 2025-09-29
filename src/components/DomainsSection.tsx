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

// Import topic images - Innovation section
import aiImage from '@/assets/topics/ai.png';
import quantumImage from '@/assets/topics/quantum.png';
import renewableEnergyImage from '@/assets/topics/renewable-energy.png';
import augmentedRealityImage from '@/assets/topics/augmented-reality.png';
import spaceExplorationImage from '@/assets/topics/space-exploration.png';
import virtualRealityImage from '@/assets/topics/virtual-reality.png';
import autonomousVehiclesImage from '@/assets/topics/autonomous-vehicles.png';
import smartCitiesImage from '@/assets/topics/smart-cities.png';
import machineLearningImage from '@/assets/topics/machine-learning.png';
import cryptocurrencyImage from '@/assets/topics/cryptocurrency.png';
import iotInnovationsImage from '@/assets/topics/iot-innovations.png';
import threeDPrintingImage from '@/assets/topics/3d-printing.png';
import additiveManufacturingImage from '@/assets/topics/additive-manufacturing.png';
import blockchainImage from '@/assets/topics/blockchain.png';
import greenEnergyImage from '@/assets/topics/green-energy.png';
import sustainabilityImage from '@/assets/topics/sustainability.png';

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

  // Topic data for shuffle grid - Innovation section topics
  const topicImages = [
    { id: 1, src: aiImage, title: 'Artificial Intelligence' },
    { id: 2, src: quantumImage, title: 'Quantum Computing' },
    { id: 3, src: renewableEnergyImage, title: 'Renewable Energy' },
    { id: 4, src: augmentedRealityImage, title: 'Augmented Reality' },
    { id: 5, src: spaceExplorationImage, title: 'Space Exploration' },
    { id: 6, src: virtualRealityImage, title: 'Virtual Reality' },
    { id: 7, src: autonomousVehiclesImage, title: 'Autonomous Vehicles' },
    { id: 8, src: smartCitiesImage, title: 'Smart Cities' },
    { id: 9, src: machineLearningImage, title: 'Machine Learning' },
    { id: 10, src: cryptocurrencyImage, title: 'Cryptocurrency' },
    { id: 11, src: iotInnovationsImage, title: 'IoT Innovations' },
    { id: 12, src: threeDPrintingImage, title: '3D Printing' },
    { id: 13, src: additiveManufacturingImage, title: 'Additive Manufacturing' },
    { id: 14, src: blockchainImage, title: 'Blockchain' },
    { id: 15, src: greenEnergyImage, title: 'Green Energy' },
    { id: 16, src: sustainabilityImage, title: 'Sustainability' },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Discover All <span className="text-gradient">Topics</span>
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
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
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
            title="Explore Our Topics"
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