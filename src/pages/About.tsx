import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Target, Users, Lightbulb, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Our Mission",
      description: "To democratize access to research knowledge by transforming complex academic papers into digestible, actionable insights that empower everyone to stay informed and make better decisions."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Our Community",
      description: "We serve a diverse community of researchers, students, professionals, and curious minds who value evidence-based knowledge and continuous learning."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Our Innovation",
      description: "Through cutting-edge AI and careful curation, we distill vast amounts of research into precise 60-word summaries that capture the essence without losing the impact."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Our Vision",
      description: "A world where breakthrough research reaches everyone instantly, where knowledge barriers are eliminated, and where informed decision-making becomes the norm, not the exception."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">In60z</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We're on a mission to make research accessible to everyone. In a world overflowing with information, 
              we believe that the most valuable insights should be available in the time it takes to read a tweet.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  In60z was born from a simple observation: groundbreaking research was getting lost in academic silos. 
                  Brilliant discoveries were locked away in lengthy papers, accessible only to those with specialized knowledge and unlimited time.
                </p>
                <p className="mb-6">
                  Our founders, researchers themselves, experienced firsthand the frustration of trying to stay current with 
                  rapidly evolving fields while managing demanding schedules. They realized that the solution wasn't to read faster, 
                  but to read smarter.
                </p>
                <p>
                  Today, In60z has grown into a platform trusted by thousands of researchers, students, and professionals worldwide. 
                  We've summarized millions of papers, connected countless dots between related research, and helped our community 
                  make more informed decisions in less time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">What Drives Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <div className="text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-muted-foreground">Papers Summarized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">4+</div>
                <div className="text-muted-foreground">Research Domains</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">72+</div>
                <div className="text-muted-foreground">Topics Covered</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;