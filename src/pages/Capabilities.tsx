import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Zap, Network, Globe, Database, Shield, Clock, Users, Cpu, Layers, Search, BarChart3, Smartphone, Headphones, FileText, Video, Calendar, TrendingUp, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Capabilities = () => {
  const coreCapabilities = [
    {
      icon: <Brain className="w-10 h-10 text-primary" />,
      title: "Advanced AI Summarization",
      description: "Our proprietary AI engine processes complex research papers and distills them into precise 60-word summaries while preserving scientific accuracy and key insights.",
      features: ["Natural Language Processing", "Context-aware compression", "Multi-language support", "Scientific accuracy validation"],
      metrics: { accuracy: "96%", speed: "<2s", languages: "15+" }
    },
    {
      icon: <Network className="w-10 h-10 text-primary" />,
      title: "Intelligent Research Connectivity",
      description: "Advanced graph algorithms map relationships between research papers, identifying citations, related work, and emerging trends to build comprehensive knowledge networks.",
      features: ["Citation network analysis", "Related paper discovery", "Trend identification", "Knowledge graph generation"],
      metrics: { papers: "10M+", connections: "50M+", accuracy: "94%" }
    },
    {
      icon: <Database className="w-10 h-10 text-primary" />,
      title: "Comprehensive Data Coverage", 
      description: "Real-time access to the world's largest collection of research papers across Science, Technology, Medical, and Innovation domains with continuous updates.",
      features: ["4+ research domains", "72+ specialized topics", "Daily paper ingestion", "Quality filtering"],
      metrics: { domains: "4+", topics: "72+", updates: "Daily" }
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Global Event Intelligence",
      description: "AI-powered event discovery system that tracks conferences, webinars, workshops, and industry events worldwide, providing curated recommendations.",
      features: ["Real-time event tracking", "Smart categorization", "Personalized recommendations", "Geographic filtering"],
      metrics: { events: "1000+", coverage: "Global", categories: "20+" }
    },
    {
      icon: <Headphones className="w-10 h-10 text-primary" />,
      title: "Multi-Format Content Generation",
      description: "Transform research summaries into various engaging formats including audio podcasts, visual abstracts, and interactive timelines for diverse learning preferences.",
      features: ["Audio synthesis", "Visual abstracts", "Interactive content", "Format adaptation"],
      metrics: { formats: "5+", quality: "HD", languages: "10+" }
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Enterprise-Grade Security",
      description: "Military-grade security infrastructure ensuring data privacy, content authenticity, and secure access across all platforms and devices.",
      features: ["End-to-end encryption", "Zero-trust architecture", "Compliance ready", "Audit trails"],
      metrics: { uptime: "99.9%", compliance: "SOC2", encryption: "AES-256" }
    }
  ];

  const technicalArchitecture = [
    {
      category: "AI & Machine Learning",
      icon: <Cpu className="w-8 h-8 text-primary" />,
      technologies: [
        { name: "Large Language Models", description: "Custom-trained models for research summarization" },
        { name: "Neural Networks", description: "Deep learning for content analysis and classification" },
        { name: "NLP Pipeline", description: "Advanced text processing and understanding" },
        { name: "Knowledge Graphs", description: "Semantic relationship mapping" }
      ]
    },
    {
      category: "Cloud Infrastructure",
      icon: <Layers className="w-8 h-8 text-primary" />,
      technologies: [
        { name: "Microservices Architecture", description: "Scalable, distributed system design" },
        { name: "Container Orchestration", description: "Kubernetes-based deployment" },
        { name: "Edge Computing", description: "Global content delivery network" },
        { name: "Auto-scaling", description: "Dynamic resource allocation" }
      ]
    },
    {
      category: "Data Processing",
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      technologies: [
        { name: "Real-time Streaming", description: "Kafka-based data ingestion" },
        { name: "ETL Pipelines", description: "Automated data transformation" },
        { name: "Vector Databases", description: "Semantic search and similarity" },
        { name: "Analytics Engine", description: "User behavior and content insights" }
      ]
    },
    {
      category: "User Experience",
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      technologies: [
        { name: "Progressive Web App", description: "Cross-platform compatibility" },
        { name: "Responsive Design", description: "Mobile-first interface" },
        { name: "Offline Capabilities", description: "Background synchronization" },
        { name: "Voice Interface", description: "Audio interaction support" }
      ]
    }
  ];

  const performanceMetrics = [
    { label: "Research Papers Processed", value: "10M+", icon: <FileText className="w-6 h-6" /> },
    { label: "Summaries Generated", value: "2.5M+", icon: <Brain className="w-6 h-6" /> },
    { label: "Active Users", value: "50K+", icon: <Users className="w-6 h-6" /> },
    { label: "Events Tracked", value: "25K+", icon: <Calendar className="w-6 h-6" /> },
    { label: "Podcast Hours", value: "1000+", icon: <Headphones className="w-6 h-6" /> },
    { label: "Global Reach", value: "150+", icon: <Globe className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "96%", icon: <Star className="w-6 h-6" /> },
    { label: "Response Time", value: "<2s", icon: <Zap className="w-6 h-6" /> }
  ];

  const integrations = [
    { name: "Academic Databases", description: "Direct integration with major research repositories" },
    { name: "Conference APIs", description: "Real-time event data from global conference platforms" },
    { name: "Journal Publishers", description: "Partnerships with leading academic publishers" },
    { name: "Social Platforms", description: "Seamless sharing across social networks" },
    { name: "Citation Tools", description: "Integration with reference management systems" },
    { name: "Calendar Apps", description: "Event synchronization with calendar applications" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-geometric opacity-10"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 text-center relative">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              Advanced AI Technology
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Our <span className="text-gradient">Technical Capabilities</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Powered by cutting-edge AI, cloud infrastructure, and innovative engineering that transforms 
              how the world consumes and connects with research knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-primary/10 text-primary">AI-Powered</Badge>
              <Badge className="bg-accent/10 text-accent">Real-time</Badge>
              <Badge className="bg-secondary/10 text-secondary">Scalable</Badge>
              <Badge className="bg-muted text-muted-foreground">Enterprise-Ready</Badge>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Capabilities</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Six pillars of innovation that power the In60z platform and deliver unmatched research accessibility.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {coreCapabilities.map((capability, index) => (
                <Card key={index} className="p-8 bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-500 group">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {capability.icon}
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                    
                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
                      {Object.entries(capability.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="py-24 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Technical Architecture</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built on modern, scalable architecture with best-in-class technologies and engineering practices.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {technicalArchitecture.map((arch, index) => (
                <Card key={index} className="p-6 bg-card border-border/50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 mb-2">
                      {arch.icon}
                      <CardTitle className="text-xl">{arch.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {arch.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="border-l-2 border-primary/20 pl-4">
                          <h4 className="font-semibold mb-1">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>



        {/* Future Roadmap */}
        <section className="py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Innovation Pipeline</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Continuous innovation and development to stay at the forefront of research technology.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card border-primary/20">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Advanced AI Models</h3>
                <p className="text-muted-foreground">Next-generation language models with improved accuracy and multi-modal capabilities.</p>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Network className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Enhanced Connectivity</h3>
                <p className="text-muted-foreground">Deeper research relationships and cross-domain knowledge discovery features.</p>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Global Expansion</h3>
                <p className="text-muted-foreground">Extended language support and regional research database integrations.</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;