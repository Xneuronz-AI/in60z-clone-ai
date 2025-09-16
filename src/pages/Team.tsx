import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import niyazImage from '@/assets/team/niyaz.jpg';
import prabhjotImage from '@/assets/team/prabhjot.jpg';
import siddhanthImage from '@/assets/team/siddhanth.jpg';
import nitinImage from '@/assets/team/nitin.jpg';

const Team = () => {
  const founders = [
    {
      name: "Niyaz G",
      role: "Founder & CEO",
      bio: "Bringing a decade of extensive experience in Marketing & Business from Yahoo in building and scaling consumer-centric platforms. Visionary leader with a passion for democratizing research access.",
      email: "niyaz@in60z.com",
      image: niyazImage,
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Prabhjot Singh", 
      role: "Co-Founder & Head of AI & ML",
      bio: "Expert who demonstrated significant conviction by leaving a high-paying role (97LPA) to build In60z. Leading the AI architecture that powers our summarization engine.",
      email: "prabhjot@in60z.com",
      image: prabhjotImage,
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Siddhanth Bhat",
      role: "Co-Founder & Head of Research", 
      bio: "AI Researcher and published expert who ensures the quality and credibility of our research summaries. Technical architect behind In60z's AI-powered platform.",
      email: "siddhanth@in60z.com",
      image: siddhanthImage,
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Nitin Revankar",
      role: "Founding Team Member & Head of Digital Media",
      bio: "Digital Media Expert with decade of experience leveraging his Yahoo background to lead monetization and brand partnerships for scaling platforms.",
      email: "nitin@in60z.com", 
      image: nitinImage,
      linkedin: "#",
      twitter: "#"
    }
  ];

  const teamMembers = [
    {
      name: "Rifa Shazmeen",
      role: "MLE Engineer",
      bio: "Machine Learning Engineer specializing in NLP and model optimization.",
      department: "AI/ML"
    },
    {
      name: "Bhoomika GP",
      role: "MLE Engineer", 
      bio: "Expert in machine learning infrastructure and model deployment.",
      department: "AI/ML"
    },
    {
      name: "Kanishkha J",
      role: "MLE Engineer",
      bio: "Focused on developing scalable ML solutions for research processing.",
      department: "AI/ML"
    },
    {
      name: "Sayeed Shaik",
      role: "AI Engineer",
      bio: "AI specialist working on advanced summarization algorithms.",
      department: "AI/ML"
    },
    {
      name: "Sarvesh S",
      role: "AI Researcher",
      bio: "Research scientist ensuring accuracy and quality of content processing.",
      department: "Research"
    },
    {
      name: "Nikhilesh Rana",
      role: "Frontend Engineer",
      bio: "Creating intuitive user experiences for the In60z platform.",
      department: "Engineering"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-geometric opacity-20"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto px-6 relative text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Meet Our <span className="text-gradient">Dream Team</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              The brilliant minds behind In60z, united by a shared vision to democratize research access and make knowledge accessible to everyone, everywhere.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Seasoned professionals with deep expertise in technology, research, and business transformation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {founders.map((founder, index) => (
                <Card key={index} className="p-8 bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-500 group">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src={founder.image} 
                        alt={founder.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                    <p className="text-primary font-semibold mb-4">{founder.role}</p>
                    <p className="text-muted-foreground mb-6 leading-relaxed text-sm">{founder.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={`mailto:${founder.email}`} aria-label={`Email ${founder.name}`}>
                          <Mail className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={founder.linkedin} aria-label={`${founder.name} LinkedIn`}>
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-primary/10 hover:text-primary" asChild>
                        <a href={founder.twitter} aria-label={`${founder.name} Twitter`}>
                          <Twitter className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Core Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Talented engineers, researchers, and creators working together to build the future of research accessibility.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="p-6 text-center bg-card/50 border-border/50 hover:bg-card transition-all duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-2xl font-bold text-primary">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
                    {member.department}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                We're always looking for passionate individuals who share our vision of making research accessible to everyone. 
                Join us in building the future of knowledge democratization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="mailto:contact@in60z.com">View Open Positions</a>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20">
                  <a href="mailto:careers@in60z.com">Send Your Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;