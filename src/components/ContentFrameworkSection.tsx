import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ContentFrameworkSection = () => {
  const domains = [
    {
      id: "science",
      title: "Science",
      emoji: "🧪",
      description: "Latest breakthroughs and discoveries across a wide range of scientific fields.",
      topics: [
        "Astrophysics", "Quantum Mechanics", "Particle Physics", "Condensed Matter", "Thermodynamics",
        "Genetics", "Microbiology", "Ecology", "Neuroscience", "Biochemistry",
        "Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry",
        "Geology", "Climatology", "Oceanography", "Environmental Conservation"
      ]
    },
    {
      id: "technology",
      title: "Technology",
      emoji: "💻",
      description: "Disruptive trends and innovations shaping the future of technology.",
      topics: [
        "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision",
        "Cybersecurity", "Cloud Computing", "Data Science", "Software Development", "IT Operations",
        "Robotics", "Nanotechnology", "Quantum Computing", "IoT (Internet of Things)",
        "Blockchain", "Augmented/Virtual Reality", "3D Printing", "Space Technology", "Edge Computing"
      ]
    },
    {
      id: "medical",
      title: "Medical",
      emoji: "🏥",
      description: "Concise updates on medical research, health innovations, and clinical findings.",
      topics: [
        "Clinical Trials", "Pharmacology", "Public Health", "Infectious Diseases", "Surgery",
        "Gene Therapy", "Medical Devices", "Diagnostics", "Regenerative Medicine",
        "Nutrition", "Mental Health", "Fitness Science", "Epidemiology",
        "Oncology", "Cardiology", "Neurology", "Immunology", "Telemedicine"
      ]
    },
    {
      id: "innovation",
      title: "Innovation & Events",
      emoji: "🚀",
      description: "Disruptive business models, digital transformation, and key industry events.",
      topics: [
        "Disruptive Trends", "Digital Transformation", "Business Models", "Financial Innovation",
        "Venture Capital", "Startup Ecosystems", "Social Entrepreneurship", "Product Design",
        "Academic Conferences", "Technology Summits", "Industry Hackathons", "Webinars",
        "User Design", "Infomediary", "Crowdsourcing", "Media & Entertainment", "Sustainability", "Green Tech"
      ]
    }
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-geometric opacity-50"></div>
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">In60z</span> Content Framework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coverage across 4 domains, 72 topics, and millions of papers, articles, and events
          </p>
        </div>

        {/* Mobile Tabs View */}
        <div className="lg:hidden">
          <Tabs defaultValue="science" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              {domains.map((domain) => (
                <TabsTrigger key={domain.id} value={domain.id} className="text-xs">
                  {domain.emoji} {domain.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {domains.map((domain) => (
              <TabsContent key={domain.id} value={domain.id}>
                <Card className="glass glow-primary">
                  <CardHeader className="text-center pb-4">
                    <div className="text-4xl mb-3">{domain.emoji}</div>
                    <CardTitle className="text-2xl">{domain.title}</CardTitle>
                    <CardDescription className="text-base">
                      {domain.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {domain.topics.map((topic, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs bg-primary/10 hover:bg-primary/20 transition-smooth"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {domains.map((domain, index) => (
            <Card 
              key={domain.id} 
              className="glass p-8 hover:glow-primary transition-smooth animate-fade-in group" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="text-center pb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {domain.emoji}
                </div>
                <CardTitle className="text-3xl font-bold mb-3">
                  {domain.title}
                </CardTitle>
                <CardDescription className="text-lg text-muted-foreground">
                  {domain.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="grid grid-cols-2 gap-2">
                  {domain.topics.map((topic, topicIndex) => (
                    <Badge 
                      key={topicIndex} 
                      variant="secondary" 
                      className="justify-center py-2 text-sm bg-primary/10 hover:bg-primary/20 transition-smooth cursor-default"
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4</div>
            <div className="text-sm text-muted-foreground">Domains</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">72</div>
            <div className="text-sm text-muted-foreground">Topics</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">Millions</div>
            <div className="text-sm text-muted-foreground">Papers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">Thousands</div>
            <div className="text-sm text-muted-foreground">Events</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentFrameworkSection;