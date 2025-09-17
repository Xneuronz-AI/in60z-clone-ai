import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Target, Users, Lightbulb, Eye, Zap, BookOpen, Clock, Globe, CheckCircle, TrendingUp, Shield, Smartphone, Network, Brain } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

const About = () => {
  const problems = [
    {
      icon: <Clock className="w-8 h-8 text-destructive" />,
      title: "Information Overload",
      description: "Millions of research papers published annually, creating an overwhelming flood of information that's impossible to navigate efficiently."
    },
    {
      icon: <Zap className="w-8 h-8 text-destructive" />,
      title: "Time Constraints", 
      description: "Researchers and professionals lack time to read lengthy papers, attend every event, or stay current with rapidly evolving fields."
    },
    {
      icon: <Globe className="w-8 h-8 text-destructive" />,
      title: "Fragmented Ecosystem",
      description: "Research, news, events, and insights are scattered across multiple platforms, making comprehensive knowledge gathering inefficient."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-destructive" />,
      title: "Accessibility Barriers",
      description: "Complex academic language and lengthy formats create barriers for broader knowledge dissemination and understanding."
    }
  ];

  const solutions = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI-Powered Summarization",
      description: "Revolutionary 60-word summaries that capture the essence of complex research, making knowledge instantly digestible.",
      features: ["Advanced NLP algorithms", "Context preservation", "Key insight extraction", "Scientific accuracy"]
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Connected Research",
      description: "Intelligent mapping of research relationships, helping users discover related work and build comprehensive understanding.",
      features: ["Citation networks", "Related paper discovery", "Trend identification", "Knowledge graphs"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile-First Experience", 
      description: "Swipe-based interface designed for the mobile generation, making research consumption as easy as social media.",
      features: ["Intuitive navigation", "Offline reading", "Cross-device sync", "Social sharing"]
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Multi-Format Content",
      description: "Transform research into various formats - summaries, podcasts, visualizations, and interactive content.",
      features: ["Audio summaries", "Visual abstracts", "Interactive timelines", "Podcast overviews"]
    }
  ];

  const metrics = [
    { value: "59%", label: "Growth in global publications (2012-2022)", source: "Academic Publishing Report" },
    { value: "66%", label: "Watch short news videos weekly", source: "Digital Content Survey" },
    { value: "$2.5T", label: "Events industry by 2035", source: "Industry Forecast" },
    { value: "72%", label: "Prefer bite-sized content", source: "User Behavior Study" }
  ];

  const journey = [
    {
      year: "Jan 2025",
      title: "Foundation",
      description: "In60z was founded with a vision to democratize research access through AI-powered summarization."
    },
    {
      year: "Mar 2025", 
      title: "Innovation",
      description: "Developed our signature 60-word summary algorithm and launched the mobile-first platform."
    },
    {
      year: "Aug 2025",
      title: "Expansion",
      description: "Scaling globally with advanced AI features, podcast integration, and event discovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Revolutionizing How the World{' '}
              <span className="text-gradient">Consumes Research</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto">
              In60z transforms the overwhelming world of academic research into digestible, actionable insights. 
              Our AI-powered platform delivers the essence of complex studies in exactly 60 words.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistForm 
                trigger={
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                    Join Our Mission
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
              <Button size="lg" variant="outline" className="border-primary/20" asChild>
                <a href="#video-section">
                  Watch Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reality */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Research Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Today's research landscape is broken. Information overload meets time scarcity in an increasingly fragmented ecosystem.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {problems.map((problem, index) => (
                <Card key={index} className="p-6 border-destructive/20 bg-destructive/5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                      {problem.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{problem.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-card p-8 rounded-3xl glow-accent">
              <h3 className="text-3xl font-bold mb-8 text-center">Market Reality</h3>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center p-4">
                    <div className="text-4xl font-bold text-primary mb-2">{metric.value}</div>
                    <p className="text-sm text-muted-foreground leading-tight">{metric.label}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{metric.source}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Revolutionary Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We've reimagined how research is consumed. Through advanced AI and intuitive design, 
              we make complex knowledge accessible, engaging, and actionable for everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-500 group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                <div className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From vision to reality - how we're building the future of research accessibility.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-primary to-accent"></div>
              
              <div className="space-y-12">
                {journey.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg z-10">
                      {milestone.year}
                    </div>
                    <div className="ml-8">
                      <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <Card className="p-8 bg-gradient-card border-primary/20 glow-primary">
              <Eye className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a world where every person has instant access to the knowledge they need, 
                democratizing research and accelerating human progress through intelligent information curation.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-primary/20 glow-accent">
              <Target className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To transform complex research into digestible insights, making knowledge accessible, 
                engaging, and actionable for researchers, professionals, and curious minds worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Research?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join thousands of researchers, students, and professionals who are already experiencing 
            the future of knowledge consumption with In60z.
          </p>
          <WaitlistForm 
            trigger={
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            }
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;