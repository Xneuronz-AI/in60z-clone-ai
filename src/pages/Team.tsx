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
import rifaImage from '@/assets/team/rifa.jpg';
import ResumeForm from '@/components/ResumeForm';
import bhoomikaImage from '@/assets/team/bhoomika.jpg';
import kanishkhaImage from '@/assets/team/kanishkha.jpg';
import sayeedImage from '@/assets/team/sayeed.jpg';
import sarveshImage from '@/assets/team/sarvesh.jpg';
import nikhileshImage from '@/assets/team/nikhilesh.jpg';
import sushmaImage from '@/assets/team/sushma.jpg';
import meeraImage from '@/assets/team/meera.jpg';
import bhavyaImage from '@/assets/team/bhavya.jpg';
import himanshuImage from '@/assets/team/himanshu.jpg';
import parasImage from '@/assets/team/paras.jpg';
import elafImage from '@/assets/team/elaf.jpg';
import premImage from '@/assets/team/prem.jpg';
import anujaiImage from '@/assets/team/anujai.jpg';
import dhanjeetImage from '@/assets/team/dhanjeet.jpg';

const Team = () => {
  const founders = [
    {
      name: "Niyaz G",
      role: "Founder & CEO",
      bio: "Bringing a decade of extensive experience in Marketing & Business from Yahoo in building and scaling consumer-centric platforms. Visionary leader with a passion for democratizing research access.",
      email: "niyaz@in60z.com",
      image: niyazImage,
      linkedin: "https://www.linkedin.com/in/n1y4z",
      twitter: "https://x.com/N1Y4zz"
    },
    {
      name: "Prabhjot Singh", 
      role: "Co-Founder & Head of AI & ML",
      bio: "Expert who demonstrated significant conviction by leaving a high-paying role (97LPA) to build In60z. Leading the AI architecture that powers our summarization engine.",
      email: "prabhjot@in60z.com",
      image: prabhjotImage,
      linkedin: "https://in.linkedin.com/in/prabhjot-singh-chugh",
      twitter: "https://x.com/in60z_ai"
    },
    {
      name: "Siddhanth Bhat",
      role: "Co-Founder & Head of Research", 
      bio: "AI Researcher and published expert who ensures the quality and credibility of our research summaries. Technical architect behind In60z's AI-powered platform.",
      email: "siddhanth@in60z.com",
      image: siddhanthImage,
      linkedin: "https://www.linkedin.com/in/siddhanthbhat/",
      twitter: "https://x.com/in60z_ai"
    },
    {
      name: "Nitin Revankar",
      role: "Founding Team Member & Head of Digital Media",
      bio: "Digital Media Expert with decade of experience leveraging his Yahoo background to lead monetization and brand partnerships for scaling platforms.",
      email: "nitin@in60z.com", 
      image: nitinImage,
      linkedin: "https://www.linkedin.com/in/nitinrevankar/",
      twitter: "https://x.com/in60z_ai"
    }
  ];

  const teamMembers = [
    {
      name: "Rifa Shazmeen",
      role: "MLE Engineer",
      bio: "Machine Learning Engineer specializing in NLP and model optimization.",
      department: "AI/ML",
      image: rifaImage
    },
    {
      name: "Bhoomika GP",
      role: "MLE Engineer", 
      bio: "Expert in machine learning infrastructure and model deployment.",
      department: "AI/ML",
      image: bhoomikaImage
    },
    {
      name: "Kanishkha J",
      role: "MLE Engineer",
      bio: "Focused on developing scalable ML solutions for research processing.",
      department: "AI/ML",
      image: kanishkhaImage
    },
    {
      name: "Sayeed Shaik",
      role: "AI Engineer",
      bio: "AI specialist working on advanced summarization algorithms.",
      department: "AI/ML",
      image: sayeedImage
    },
    {
      name: "Sarvesh S",
      role: "AI Researcher",
      bio: "Research scientist ensuring accuracy and quality of content processing.",
      department: "Research",
      image: sarveshImage
    },
    {
      name: "Nikhilesh Rana",
      role: "Frontend Engineer",
      bio: "Creating intuitive user experiences for the In60z platform.",
      department: "Engineering",
      image: nikhileshImage
    },
    {
      name: "Sushma",
      role: "Frontend UI/UX Designer",
      bio: "Creating beautiful and intuitive user interfaces for seamless user experience.",
      department: "Design",
      image: sushmaImage
    },
    {
      name: "Meera",
      role: "UI/UX Designer",
      bio: "Designing user-centered experiences that make research accessible and engaging.",
      department: "Design",
      image: meeraImage
    },
    {
      name: "Bhavya",
      role: "UI/UX Designer",
      bio: "Crafting elegant design solutions that bridge the gap between users and complex research.",
      department: "Design",
      image: bhavyaImage
    },
    {
      name: "Himanshu",
      role: "iOS & Android Developer",
      bio: "Building native mobile applications that bring research summaries to your fingertips.",
      department: "Mobile",
      image: himanshuImage
    },
    {
      name: "Paras",
      role: "Backend Developer",
      bio: "Architecting robust backend systems that power our AI-driven research platform.",
      department: "Engineering",
      image: parasImage
    },
    {
      name: "Elaf",
      role: "Frontend Developer",
      bio: "Building intuitive and responsive user interfaces for seamless user experience.",
      department: "Engineering",
      image: elafImage
    }
  ];

  const advisors = [
    {
      name: "Prem Panicker",
      role: "Ex Managing Director Yahoo!",
      bio: "Former Yahoo executive bringing extensive experience in digital media and strategic partnerships.",
      image: premImage
    },
    {
      name: "Anujay Mathur",
      role: "Zepto Growth Head",
      bio: "Growth expert helping scale platforms and optimize user acquisition strategies at Zepto.",
      image: anujaiImage
    },
    {
      name: "Dhanjeet Singh",
      role: "Senior Account Director at DWA",
      bio: "Strategic advisor bringing extensive experience in account management and digital transformation initiatives.",
      image: dhanjeetImage
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
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
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

        {/* Advisors */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Advisors</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic advisors and industry experts guiding our vision and growth trajectory.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {advisors.map((advisor, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-primary/20 glow-primary hover:glow-accent transition-all duration-500">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                    <img 
                      src={advisor.image} 
                      alt={advisor.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{advisor.name}</h3>
                  <p className="text-primary font-semibold mb-4">{advisor.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{advisor.bio}</p>
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
              <div className="flex justify-center">
                <ResumeForm />
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