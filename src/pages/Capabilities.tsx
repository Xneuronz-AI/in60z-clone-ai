import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Brain, Zap, Network, Globe, Database, Shield, Clock, Users } from 'lucide-react';

const Capabilities = () => {
  const capabilities = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Summarization",
      description: "Advanced natural language processing algorithms that understand context, extract key insights, and maintain scientific accuracy while condensing complex research into 60-word summaries.",
      features: ["Context-aware processing", "Scientific accuracy verification", "Multi-language support", "Real-time generation"]
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Research Connectivity",
      description: "Intelligent mapping of relationships between research papers, identifying citations, related work, and emerging trends to help users discover relevant studies and build comprehensive understanding.",
      features: ["Citation network analysis", "Related paper discovery", "Trend identification", "Knowledge graph generation"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Comprehensive Coverage", 
      description: "Access to millions of research papers across 4+ major domains and 72+ specialized topics, continuously updated with the latest publications from top journals and conferences.",
      features: ["4+ research domains", "72+ specialized topics", "Millions of papers", "Daily updates"]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Global Event Intelligence",
      description: "Real-time tracking and curation of academic conferences, webinars, workshops, and industry events worldwide, helping researchers stay connected with their community.",
      features: ["Conference tracking", "Webinar curation", "Workshop discovery", "Networking opportunities"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning-Fast Processing",
      description: "Optimized infrastructure delivering research summaries and insights in seconds, not hours, enabling researchers to stay current without sacrificing productivity.",
      features: ["Sub-second processing", "Real-time updates", "Scalable architecture", "High availability"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Quality Assurance",
      description: "Multi-layer verification system ensuring accuracy, credibility, and relevance of all summarized content through both automated checks and expert validation.",
      features: ["Automated fact-checking", "Expert validation", "Source verification", "Quality scoring"]
    }
  ];

  const techStack = [
    { name: "Machine Learning", description: "Advanced NLP models for text understanding and generation" },
    { name: "Cloud Infrastructure", description: "Scalable, secure, and globally distributed architecture" },
    { name: "Data Analytics", description: "Real-time processing and analysis of research trends" },
    { name: "API Integration", description: "Seamless connectivity with academic databases and journals" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-gradient">Capabilities</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Cutting-edge technology and innovative approaches that power the world's most comprehensive research platform.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-card/50 rounded-2xl p-8 border border-border/50">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    {capability.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{capability.description}</p>
                  <ul className="space-y-2">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Technology Stack</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {techStack.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-4">
                    <div className="text-2xl font-bold text-primary">{tech.name.charAt(0)}</div>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Performance Metrics</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-muted-foreground">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">&lt;2s</div>
                <div className="text-muted-foreground">Average Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support Coverage</div>
              </div>
            </div>
          </div>
        </section>

        {/* API & Integration */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">API & Integration Capabilities</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Seamlessly integrate In60z's powerful research capabilities into your existing workflows, applications, and research platforms.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">RESTful API</h3>
                <p className="text-muted-foreground">Full access to our research database and summarization engine through clean, documented APIs.</p>
              </div>
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Webhook Support</h3>
                <p className="text-muted-foreground">Real-time notifications for new research, summaries, and events in your areas of interest.</p>
              </div>
              <div className="bg-card rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Custom Integration</h3>
                <p className="text-muted-foreground">Tailored solutions for enterprise clients with specific research and workflow requirements.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Capabilities;