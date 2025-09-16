import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: "Niyaz Ahmed",
      role: "Co-Founder & CEO",
      bio: "Visionary leader with a passion for democratizing research access. Previously led research initiatives at top tech companies.",
      email: "niyaz@in60z.com",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Siddhnath Sharma", 
      role: "Co-Founder & CTO",
      bio: "Technical architect behind In60z's AI-powered summarization engine. Expert in machine learning and natural language processing.",
      email: "siddhnath@in60z.com",
      image: "/api/placeholder/300/300"
    }
  ];

  const advisors = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Advisor",
      bio: "Former Director of Research at MIT, specializing in AI applications in academia.",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Prof. Michael Roberts",
      role: "Industry Advisor", 
      bio: "Serial entrepreneur and professor of Innovation at Stanford Business School.",
      image: "/api/placeholder/300/300"
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
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The brilliant minds behind In60z, dedicated to making research accessible to everyone through innovation and passion.
            </p>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="icon" asChild>
                      <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                        <Mail className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label={`${member.name} LinkedIn`}>
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild>
                      <a href="#" aria-label={`${member.name} Twitter`}>
                        <Twitter className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="py-20 bg-card/30">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-16 text-center">Advisory Board</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {advisors.map((advisor, index) => (
                <div key={index} className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                    <div className="w-full h-full rounded-full bg-muted flex items-center justify-center text-3xl font-bold text-primary">
                      {advisor.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                  <p className="text-primary font-semibold mb-4">{advisor.role}</p>
                  <p className="text-muted-foreground leading-relaxed">{advisor.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals who share our vision of making research accessible to everyone.
            </p>
            <Button size="lg" asChild>
              <a href="mailto:contact@in60z.com">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;