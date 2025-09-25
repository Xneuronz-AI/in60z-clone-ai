import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { 
  Stethoscope, 
  Atom, 
  Lightbulb, 
  Monitor,
  TrendingUp,
  Users,
  DollarSign,
  Palette,
  Heart,
  Leaf,
  Briefcase,
  Shield,
  Telescope,
  Zap,
  Brain,
  Globe,
  TestTube,
  Dna,
  Activity,
  Pill,
  HeartHandshake,
  Database,
  Smartphone,
  Cloud,
  Bot,
  Lock,
  Cpu,
  Network,
  Code,
  Gamepad2,
  Wifi,
  ShoppingCart,
  Megaphone,
  Recycle
} from 'lucide-react';

// Import domain images
import medicalImage from '@/assets/domain-medical.jpg';
import scienceImage from '@/assets/domain-science.jpg';
import innovationImage from '@/assets/domain-innovation.jpg';
import technologyImage from '@/assets/domain-technology.jpg';

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

  const topics = [
    // Innovation topics
    { name: 'Innovation', icon: <Lightbulb className="w-4 h-4" /> },
    { name: 'Disruptive Trends', icon: <TrendingUp className="w-4 h-4" /> },
    { name: 'Startups & Entrepreneurship', icon: <Users className="w-4 h-4" /> },
    { name: 'Venture Capital', icon: <DollarSign className="w-4 h-4" /> },
    { name: 'Design Thinking', icon: <Palette className="w-4 h-4" /> },
    { name: 'Social Innovation', icon: <Heart className="w-4 h-4" /> },
    { name: 'Sustainable Innovation', icon: <Leaf className="w-4 h-4" /> },
    { name: 'Future of Work', icon: <Briefcase className="w-4 h-4" /> },
    { name: 'Intellectual Property', icon: <Shield className="w-4 h-4" /> },
    { name: 'R&D Breakthroughs', icon: <TestTube className="w-4 h-4" /> },
    { name: 'Fintech', icon: <DollarSign className="w-4 h-4" /> },
    
    // Science topics
    { name: 'Astrophysics', icon: <Telescope className="w-4 h-4" /> },
    { name: 'Quantum Mechanics', icon: <Zap className="w-4 h-4" /> },
    { name: 'Neuroscience', icon: <Brain className="w-4 h-4" /> },
    { name: 'Environmental Science', icon: <Globe className="w-4 h-4" /> },
    { name: 'Chemistry', icon: <TestTube className="w-4 h-4" /> },
    { name: 'Biology', icon: <Dna className="w-4 h-4" /> },
    { name: 'Paleontology', icon: <TestTube className="w-4 h-4" /> },
    { name: 'Geology', icon: <Globe className="w-4 h-4" /> },
    { name: 'Material Science', icon: <Atom className="w-4 h-4" /> },
    { name: 'Nanotechnology', icon: <Zap className="w-4 h-4" /> },
    { name: 'Marine Biology', icon: <Globe className="w-4 h-4" /> },
    { name: 'Climatology', icon: <Globe className="w-4 h-4" /> },
    
    // Medical topics
    { name: 'Genomics', icon: <Dna className="w-4 h-4" /> },
    { name: 'Biotechnology', icon: <TestTube className="w-4 h-4" /> },
    { name: 'Public Health', icon: <Activity className="w-4 h-4" /> },
    { name: 'Medical Devices', icon: <Activity className="w-4 h-4" /> },
    { name: 'Digital Therapeutics', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'Clinical Trials', icon: <TestTube className="w-4 h-4" /> },
    { name: 'Pharmaceuticals', icon: <Pill className="w-4 h-4" /> },
    { name: 'Mental Health', icon: <Brain className="w-4 h-4" /> },
    { name: 'Surgery & Procedures', icon: <Activity className="w-4 h-4" /> },
    { name: 'Wearable Health Tech', icon: <Activity className="w-4 h-4" /> },
    { name: 'Disease Research', icon: <TestTube className="w-4 h-4" /> },
    { name: 'Bioethics', icon: <HeartHandshake className="w-4 h-4" /> },
    { name: 'Personalized Medicine', icon: <Dna className="w-4 h-4" /> },
    
    // Technology topics
    { name: 'Artificial Intelligence', icon: <Bot className="w-4 h-4" /> },
    { name: 'Machine Learning', icon: <Brain className="w-4 h-4" /> },
    { name: 'Cybersecurity', icon: <Lock className="w-4 h-4" /> },
    { name: 'Cloud Computing', icon: <Cloud className="w-4 h-4" /> },
    { name: 'Automation', icon: <Bot className="w-4 h-4" /> },
    { name: 'Robotics', icon: <Bot className="w-4 h-4" /> },
    { name: 'Data Science', icon: <Database className="w-4 h-4" /> },
    { name: 'Internet of Things (IoT)', icon: <Network className="w-4 h-4" /> },
    { name: 'Blockchain & Web3', icon: <Network className="w-4 h-4" /> },
    { name: 'Software Development', icon: <Code className="w-4 h-4" /> },
    { name: 'UX/UI Design', icon: <Palette className="w-4 h-4" /> },
    { name: 'Mobile Technology', icon: <Smartphone className="w-4 h-4" /> },
    { name: 'AR/VR', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'Quantum Computing', icon: <Cpu className="w-4 h-4" /> },
    { name: 'Telecommunications', icon: <Wifi className="w-4 h-4" /> },
    { name: 'E-commerce', icon: <ShoppingCart className="w-4 h-4" /> },
    { name: 'Ad Tech', icon: <Megaphone className="w-4 h-4" /> },
    { name: 'Green Tech', icon: <Recycle className="w-4 h-4" /> }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Discover All <span className="text-gradient">72 Topics</span>
          </h2>
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

        {/* Topics Slider */}
        <div className="relative">
          <p className="text-center text-muted-foreground mb-8 text-lg max-w-4xl mx-auto">
            Explore diverse topics across all domains
          </p>
          
            <Carousel
              plugins={[plugin.current]}
              className="w-full max-w-6xl mx-auto"
              opts={{
                align: "start",
                loop: true,
              }}
            >
            <CarouselContent className="-ml-4">
              {topics.map((topic, index) => (
                <CarouselItem key={index} className="pl-4 basis-auto">
                  <div className="bg-primary text-primary-foreground px-6 py-3 rounded-full flex items-center gap-2 whitespace-nowrap font-medium hover:bg-primary/90 transition-colors cursor-pointer">
                    {topic.icon}
                    <span>{topic.name}</span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-12" />
            <CarouselNext className="hidden lg:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;