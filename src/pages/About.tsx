import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Target, Users, Lightbulb, Eye, Zap, BookOpen, Clock, Globe, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Transforming the Way{' '}
              <span className="text-gradient">Research</span>{' '}
              is Consumed
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              In60z is revolutionizing information consumption with our signature 60-word summaries, 
              making complex research accessible to everyone, everywhere.
            </p>
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
              Join Our Mission
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                The <span className="text-gradient">Problem</span> We're Solving
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Today's digital world is overflowing with information, making it difficult for users to stay informed efficiently.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Information Overload</h3>
                    <p className="text-muted-foreground">Millions of papers, fragmented sources</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Time Constraints</h3>
                    <p className="text-muted-foreground">People don't have time to read lengthy research papers or attend every event</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Scattered Ecosystem</h3>
                    <p className="text-muted-foreground">Research, news, and events are fragmented across platforms</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Lack of Summarization</h3>
                    <p className="text-muted-foreground">Complex insights need to be digestible and actionable</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card p-8 rounded-3xl glow-accent">
                <h4 className="text-2xl font-bold mb-6 text-center">Market Reality</h4>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">59%</div>
                    <p className="text-sm text-muted-foreground">Growth in global publications (2012-2022)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">66%</div>
                    <p className="text-sm text-muted-foreground">Watch short news videos weekly</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">$2.5T</div>
                    <p className="text-sm text-muted-foreground">Events industry by 2035</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution: Swipe Intelligence */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Solution</span>: Swipe Intelligence
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Research, Reimagined. Seamless Swipe - Up to explore, down to recap, left for source, and right to discover.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="p-6 text-center bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">60 Words Concise</h3>
                <h4 className="font-semibold text-primary mb-2">Summaries</h4>
                <p className="text-sm text-muted-foreground">60-word research paper summaries & 2-minute free podcast overviews.</p>
              </Card>

              <Card className="p-6 text-center bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI-Connected</h3>
                <h4 className="font-semibold text-primary mb-2">Papers</h4>
                <p className="text-sm text-muted-foreground">Navigate research networks, discover key related papers, and build bibliographies.</p>
              </Card>

              <Card className="p-6 text-center bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Engaging Audio</h3>
                <h4 className="font-semibold text-primary mb-2">Content</h4>
                <p className="text-sm text-muted-foreground">2-minute free overviews, plus 15-minute paid in-depth podcasts.</p>
              </Card>

              <Card className="p-6 text-center bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Event and News</h3>
                <h4 className="font-semibold text-primary mb-2">Summaries</h4>
                <p className="text-sm text-muted-foreground">60-word insights on top news, conferences, webinars, and hackathons across the globe.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;