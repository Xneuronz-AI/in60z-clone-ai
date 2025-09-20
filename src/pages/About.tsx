import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, Users, Lightbulb, Eye, Zap, BookOpen, Clock, Globe, CheckCircle, TrendingUp, Shield, Smartphone, Network, Brain, Award, Rocket, Heart, Star, Building, MapPin, Calendar, Phone, Mail } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

const About = () => {
  const problems = [
    {
      icon: <Clock className="w-10 h-10 text-destructive" />,
      title: "Information Overload Crisis",
      description: "Over 2.5 million research papers published annually create an impossible-to-navigate flood of information. Researchers spend 70% of their time searching, not discovering.",
      impact: "Lost productivity worth $125B annually"
    },
    {
      icon: <Zap className="w-10 h-10 text-destructive" />,
      title: "Time Scarcity Challenge", 
      description: "Modern professionals have only 23 minutes daily for learning, yet critical insights are buried in 50+ page academic papers that take hours to comprehend.",
      impact: "Average 4.5 hours to read one paper"
    },
    {
      icon: <Globe className="w-10 h-10 text-destructive" />,
      title: "Fragmented Knowledge Ecosystem",
      description: "Research, events, news, and insights scattered across 200+ platforms, forcing professionals to juggle multiple subscriptions and interfaces.",
      impact: "12 different platforms per researcher"
    },
    {
      icon: <BookOpen className="w-10 h-10 text-destructive" />,
      title: "Accessibility Barriers",
      description: "Complex academic language, paywalls, and technical jargon create knowledge inequality, limiting breakthrough insights to academic elites.",
      impact: "85% of global population excluded"
    }
  ];

  const solutions = [
    {
      icon: <Brain className="w-12 h-12 text-primary" />,
      title: "Revolutionary AI Summarization",
      description: "Our proprietary 60-word algorithm captures the essence of complex research with 96% accuracy, making any paper digestible in under 30 seconds.",
      features: ["Advanced NLP processing", "Context preservation", "Scientific accuracy validation", "Multi-format output"],
      metrics: { accuracy: "96%", time: "<30s", papers: "10M+" }
    },
    {
      icon: <Network className="w-12 h-12 text-primary" />,
      title: "Intelligent Knowledge Mapping",
      description: "AI-powered relationship discovery connects research across domains, revealing hidden patterns and breakthrough opportunities in real-time.",
      features: ["Citation network analysis", "Cross-domain connections", "Trend prediction", "Research impact scoring"],
      metrics: { connections: "50M+", domains: "4+", accuracy: "94%" }
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Mobile-First Innovation", 
      description: "Swipe-based interface designed for the TikTok generation, making research consumption as addictive as social media with offline capabilities.",
      features: ["Intuitive swipe navigation", "Offline reading", "Cross-device sync", "Social sharing"],
      metrics: { engagement: "+300%", retention: "85%", mobile: "100%" }
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Multi-Modal Experience",
      description: "Transform dense research into engaging formats: audio summaries, visual abstracts, interactive timelines, and immersive podcasts.",
      features: ["Audio synthesis", "Visual storytelling", "Interactive content", "Podcast generation"],
      metrics: { formats: "5+", quality: "HD", languages: "15+" }
    }
  ];

  const impactMetrics = [
    { icon: <Users className="w-8 h-8" />, value: "50K+", label: "Active Researchers", description: "Global community of users" },
    { icon: <BookOpen className="w-8 h-8" />, value: "10M+", label: "Papers Processed", description: "Research articles summarized" },
    { icon: <Clock className="w-8 h-8" />, value: "2.5M", label: "Hours Saved", description: "Time returned to researchers" },
    { icon: <Globe className="w-8 h-8" />, value: "150+", label: "Countries", description: "Global reach and impact" },
    { icon: <TrendingUp className="w-8 h-8" />, value: "96%", label: "Accuracy Rate", description: "AI summarization precision" },
    { icon: <Zap className="w-8 h-8" />, value: "<2s", label: "Response Time", description: "Lightning-fast processing" }
  ];

  const journey = [
    {
      year: "Jan 2025",
      title: "Visionary Foundation",
      description: "Founded with the ambitious mission to democratize global research access through cutting-edge AI technology.",
      achievement: "Secured initial funding and assembled world-class AI team"
    },
    {
      year: "Mar 2025", 
      title: "Breakthrough Innovation",
      description: "Developed our signature 60-word algorithm and launched the industry's first mobile-first research platform.",
      achievement: "Beta launched with 1,000+ researchers"
    },
    {
      year: "Aug 2025",
      title: "Rapid Scaling",
      description: "Expanding globally with advanced features: podcast integration, event discovery, and multi-language support.",
      achievement: "Reached 50K+ users across 150+ countries"
    },
    {
      year: "2026",
      title: "Future Vision",
      description: "Next-generation AI models, AR/VR integration, and enterprise solutions for research institutions worldwide.",
      achievement: "Targeting 1M+ users and IPO preparation"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-10 h-10 text-amber-500" />,
      title: "Innovation First",
      description: "We push boundaries and challenge conventions to create breakthrough solutions."
    },
    {
      icon: <Heart className="w-10 h-10 text-red-500" />,
      title: "Democratization",
      description: "Knowledge should be accessible to everyone, not just academic elites."
    },
    {
      icon: <Star className="w-10 h-10 text-purple-500" />,
      title: "Excellence",
      description: "We maintain the highest standards in accuracy, design, and user experience."
    },
    {
      icon: <Rocket className="w-10 h-10 text-blue-500" />,
      title: "Speed",
      description: "In a fast-moving world, we deliver insights at the speed of thought."
    }
  ];

  const team = [
    {
      role: "Leadership",
      members: "15+ industry veterans",
      description: "Former executives from Google, Microsoft, and leading research institutions"
    },
    {
      role: "AI Research",
      members: "20+ PhD researchers",
      description: "World-class AI scientists and machine learning engineers"
    },
    {
      role: "Engineering",
      members: "25+ developers",
      description: "Full-stack engineers from top tech companies and startups"
    },
    {
      role: "Global Operations",
      members: "10+ specialists",
      description: "Business development, marketing, and customer success experts"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-6xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              Transforming Research Since 2025
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Revolutionizing How Humanity{' '}
              <span className="text-gradient">Discovers Knowledge</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-5xl mx-auto">
              In60z is on a mission to democratize research access for 8 billion people. 
              We're transforming the overwhelming world of academic research into digestible, 
              actionable insights through revolutionary AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistForm 
                trigger={
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                    Join Our Revolution
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
              <Button size="lg" variant="outline" className="border-primary/20 px-8 py-4">
                Watch Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Global Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that demonstrate our commitment to transforming research accessibility worldwide.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card border-primary/20 glow-subtle hover:glow-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="font-semibold mb-1">{metric.label}</div>
                <div className="text-xs text-muted-foreground">{metric.description}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem We Solve */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge variant="destructive" className="mb-4">Critical Challenge</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Research Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Today's research landscape is fundamentally broken. Information overload meets time scarcity 
              in an increasingly fragmented ecosystem, creating unprecedented barriers to knowledge discovery.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="p-8 border-destructive/20 bg-destructive/5 hover:bg-destructive/10 transition-colors">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{problem.description}</p>
                    <div className="text-sm font-semibold text-destructive bg-destructive/10 px-3 py-1 rounded-full inline-block">
                      {problem.impact}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Revolutionary Solution */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary">Game-Changing Solution</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Revolutionary Approach</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We've completely reimagined how research is consumed, discovered, and connected. 
              Through breakthrough AI and intuitive design, we make complex knowledge accessible to everyone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="p-8 bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-500 group">
                <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{solution.description}</p>
                
                {/* Solution Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-muted/20 rounded-lg">
                  {Object.entries(solution.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
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

      {/* Our Journey & Milestones */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Transformative Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From ambitious vision to global reality - how we're building the future of research accessibility.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Enhanced Timeline line */}
              <div className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary via-accent to-secondary rounded-full"></div>
              
              <div className="space-y-16">
                {journey.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm z-10 shadow-lg">
                      {milestone.year}
                    </div>
                    <div className="ml-12">
                      <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">{milestone.description}</p>
                      <div className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                        {milestone.achievement}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and drive our mission forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card border-primary/20 hover:glow-accent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-muted/20 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">World-Class Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              70+ exceptional individuals from top tech companies and research institutions, united by our mission.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((dept, index) => (
              <Card key={index} className="p-6 bg-card border-border/50">
                <h3 className="text-xl font-bold mb-2">{dept.role}</h3>
                <div className="text-2xl font-bold text-primary mb-3">{dept.members}</div>
                <p className="text-sm text-muted-foreground">{dept.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-10 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 glow-primary">
              <Eye className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Bold Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a world where every person has instant access to humanity's collective knowledge, 
                democratizing research and accelerating global progress through intelligent AI curation 
                that makes complex insights universally accessible.
              </p>
            </Card>

            <Card className="p-10 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 glow-accent">
              <Target className="w-16 h-16 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To transform complex research into digestible, actionable insights through revolutionary AI, 
                mobile-first design, and intelligent connectivity - making knowledge discovery as intuitive 
                as social media for researchers, professionals, and curious minds worldwide.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Transform Research?</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            Join 50,000+ researchers, students, and professionals who are already experiencing 
            the future of knowledge consumption. Be part of the research revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaitlistForm 
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              }
            />
            <Button size="lg" variant="outline" className="border-primary/20 px-8 py-4" asChild>
              <a href="/team">Meet Our Team</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;