import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock, Globe, BookOpen, Target, Brain, Smartphone, TrendingUp, Users, Zap, CheckCircle, Play, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Headphones, FileText, Calendar, Mic2, Heart, Cog, Package } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

const About = () => {
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
              About In60z
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Revolutionizing Research{' '}
              <span className="text-gradient">Discovery</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-5xl mx-auto">
              Swipe Intelligence. Stay Informed in 60 Words.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaitlistForm 
                trigger={
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                    Join Our Waitlist
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Statement */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">Vision Statement</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the world's leading platform for concise, impactful knowledge consumption, empowering every user to stay informed on Research, Events, and News in just 60 words.
                </p>
              </Card>

              {/* Mission Statement */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:glow-accent transition-all duration-500">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold">Mission Statement</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our mission is to curate, summarize, and deliver the most relevant Research papers, Events, and news from global sources in a crisp, 60-word format via a seamless mobile experience. We aim to efficiently bridge the gap between information overload and user's time constraints while providing a valuable platform for advertisers through non-disruptive native integration.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Simon Sinek's Golden Circle */}
      <section className="py-24 bg-muted/5 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Golden Circle</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding our purpose, process, and product
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Golden Circle Visual with Labels Inside */}
            <div className="relative mb-20">
              <div className="relative aspect-square max-w-2xl mx-auto">
                {/* Outer Circle - WHAT */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 border-[3px] border-accent/60 flex flex-col items-center pt-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-accent mb-2">WHAT</h3>
                  <p className="text-xs md:text-sm text-muted-foreground max-w-[280px] text-center px-6">
                    A mobile app that delivers summarized Research papers, Events, and news stories.
                  </p>
                </motion.div>

                {/* Middle Circle - HOW */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute inset-[15%] rounded-full bg-gradient-to-br from-primary/15 to-primary/5 border-[3px] border-primary/70 flex flex-col items-center pt-6 md:pt-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">HOW</h3>
                  <p className="text-xs md:text-sm text-muted-foreground max-w-[220px] text-center px-6">
                    By using human curation and AI to summarize complex content into crisp 60-word or less snippets.
                  </p>
                </motion.div>

                {/* Inner Circle - WHY */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="absolute inset-[35%] rounded-full bg-gradient-to-br from-primary/30 to-primary/20 border-[3px] border-primary shadow-glow flex flex-col items-center justify-center px-4"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-2">
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">WHY</h3>
                  <p className="text-xs md:text-sm text-foreground max-w-[180px] text-center font-medium">
                    To efficiently and comprehensively keep users informed in a time-crunched world.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Detailed Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-32 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="p-6 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-primary">WHY - Purpose</h4>
                  <p className="text-muted-foreground">
                    To efficiently and comprehensively keep users informed in a time-crunched world. We believe everyone deserves access to quality information without drowning in content overload.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <Card className="p-6 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-primary">HOW - Process</h4>
                  <p className="text-muted-foreground">
                    By using human curation and AI to summarize complex content into crisp 60-word or less snippets. We combine expert human curation with cutting-edge AI technology.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Card className="p-6 bg-gradient-card border-accent/20 hover:glow-accent transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <Package className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-accent">WHAT - Product</h4>
                  <p className="text-muted-foreground">
                    A mobile app that delivers summarized Research papers, Events, and news stories. A beautifully designed app that delivers the world's most important knowledge directly to your pocket.
                  </p>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-primary/10 text-primary">Problem Statement</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  <span className="text-gradient">Problem</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Today's digital world is overflowing with information, making it difficult for users to stay informed efficiently. People have less time and shorter attention spans, yet they need to keep up with crucial updates, including research papers, related papers, events, news and podcasts.
                </p>
              </div>
              <div>
                <Badge className="mb-6 bg-accent/10 text-accent">Our Solution</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Our <span className="text-gradient">Solution</span>
                </h2>
                <div className="space-y-6">
                  <div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <h3 className="text-xl font-semibold text-primary mb-2">Swipe Intelligence. Stay informed in 60 words</h3>
                    <p className="text-muted-foreground">Swipe Intelligence Seamless Swipe - Up to Explore, down to Recap, left for Source, and right to Discover.</p>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In60z is not simply an app; it is a disruptive solution to a global problem of information overload built for the mobile-first, tech-savvy consumer that defines modern world.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Our technological backbone is a sophisticated AI-powered content aggregation and summarization engine. This engine, built on advanced Machine Learning (ML) algorithms, performs a continuous, high-speed crawl of a vast array of global and local information sources, including academic research repositories, news agencies, and key industry publications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenges Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient">The Challenges</span> in Research and Events Today
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenge 01 */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">01</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Information Overload</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Millions of papers fragmented sources.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Challenge 02 */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">02</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Time Constraints</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      People don't have time to read lengthy research papers or attend every event.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Challenge 03 */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">03</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Scattered Ecosystem</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Research, news, and events are fragmented across platforms.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Challenge 04 */}
              <Card className="p-8 bg-gradient-card border-primary/20 hover:glow-primary transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-primary">04</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Lack of Summarization</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Complex insights need to be digestible and actionable.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground">
                The global number of webinars surpasses <span className="font-bold text-primary">10 million per year in 2024</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                How <span className="text-gradient">It Works</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We provide Bite-Sized Research Discovery by summarizing Research papers, Events, and News into a crisp and short format of 60 words or less.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-8">Swipe Intelligence</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <ChevronUp className="w-8 h-8 text-primary" />
                    <span className="text-lg font-semibold">Up to Explore</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <ChevronDown className="w-8 h-8 text-primary" />
                    <span className="text-lg font-semibold">Down to Recap</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <ChevronLeft className="w-8 h-8 text-primary" />
                    <span className="text-lg font-semibold">Left for Source</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <ChevronRight className="w-8 h-8 text-primary" />
                    <span className="text-lg font-semibold">Right to Discover</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-card p-8 rounded-2xl border border-primary/20">
                <h4 className="text-2xl font-bold mb-4">Technological Backbone</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Our core is a sophisticated AI-powered content aggregation and summarization engine. 
                  Built on advanced Machine Learning (ML) algorithms, this engine performs a continuous, 
                  high-speed crawl of a vast array of global and local information sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Cover Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What <span className="text-gradient">We Cover</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                In60z offers focused, high-quality content spanning the most vital fields shaping our future.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Users className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Audience Reach</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-primary">4 Core Categories:</strong> Science, Medical, Innovation, & Technology</p>
                  <p><strong className="text-primary">Delivery Format:</strong> Research papers, Events, News & Podcasts</p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-primary/20">
                <Target className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Personalization</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p><strong className="text-primary">72 Key Topics</strong> for deep specialization</p>
                  <p><strong className="text-primary">AI Personalized</strong> Content Topic Discovery</p>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-primary/20">
                <Headphones className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">Podcast Offering</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>Minimum of <strong className="text-primary">2 short podcasts</strong> and <strong className="text-primary">1 in-depth 15-minute podcast</strong> of research papers</p>
                  <p>Audio summaries for on-the-go consumption</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Journey: <span className="text-gradient">From Concept to Product</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Our dedicated team rapidly built a robust Minimum Viable Product (MVP) to bring our vision to life.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-16">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-muted-foreground">10%</span>
                <Badge className="bg-muted text-muted-foreground">MVP Stage</Badge>
                <span className="text-sm text-muted-foreground">75%</span>
              </div>
              <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-full" style={{ width: '75%' }}></div>
                <div className="absolute left-[10%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute left-[25%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute left-[45%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
                <div className="absolute left-[75%] top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* March 2025 */}
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Badge className="mb-4 bg-primary/10 text-primary">March 2025</Badge>
                <h3 className="text-2xl font-bold mb-4">Team Assembly & Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We began with a clear vision to redefine information consumption. Our team of expert developers, 
                  designers, and content strategists was assembled to build the core product.
                </p>
                <div className="text-sm font-semibold text-primary">10% Project Completion</div>
              </Card>

              {/* April 2025 */}
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Badge className="mb-4 bg-primary/10 text-primary">April 2025</Badge>
                <h3 className="text-2xl font-bold mb-4">Dual Platform Development</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We began simultaneous development for both Android and iOS, ensuring a consistent user experience. 
                  Our team also completed the foundational UI/UX design, which focuses on a simple and intuitive 60-word format.
                </p>
                <div className="text-sm font-semibold text-primary">45% Project Completion</div>
              </Card>

              {/* May 2025 */}
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Badge className="mb-4 bg-primary/10 text-primary">May 2025</Badge>
                <h3 className="text-2xl font-bold mb-4">Backend & API Development</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We built the core backend and APIs, then validated our technology with a functional prototype.
                </p>
                <div className="text-sm font-semibold text-primary">25% Milestone Achieved</div>
              </Card>

              {/* June 2025 */}
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Badge className="mb-4 bg-primary/10 text-primary">June 2025</Badge>
                <h3 className="text-2xl font-bold mb-4">AI Integration & Partnerships</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We integrated machine learning for content curation and secured partnerships to build our launch content pipeline.
                </p>
                <div className="text-sm font-semibold text-primary">ML Integration Complete</div>
              </Card>

              {/* July 2025 */}
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Badge className="mb-4 bg-primary/10 text-primary">July 2025</Badge>
                <h3 className="text-2xl font-bold mb-4">Major Milestone Achievement</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  After an internal alpha test, we hit a major milestone with 75% of our core product features complete.
                </p>
                <div className="text-sm font-semibold text-primary">75% Features Complete</div>
              </Card>

              {/* August 2025 */}
              <Card className="p-8 bg-gradient-card border-primary/20">
                <Badge className="mb-4 bg-muted text-muted-foreground">August 2025</Badge>
                <h3 className="text-2xl font-bold mb-4">Testing Phase</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Internal testing, bug, and feature testing commenced.
                </p>
                <div className="text-sm font-semibold text-muted-foreground">Internal Testing Phase</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Model Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Business Model: <span className="text-gradient">Sustainable Growth</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                In60z operates via a Dual Revenue Model designed for seamless monetization that enhances, rather than disrupts, the user experience.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">In-App Advertising & Sponsored Content</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Seamless Monetisation</h4>
                      <p className="text-muted-foreground text-sm">
                        Native ads merge into the news feed, ensuring visibility without interrupting the user experience.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Brand Safety</h4>
                      <p className="text-muted-foreground text-sm">
                        Content goes live after internal checks, avoiding clickbait. We only support useful information.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-primary/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4">Sponsored Events & Notification Stories</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Brand Integration</h4>
                      <p className="text-muted-foreground text-sm">
                        Customized, brand-centric images/videos integrate directly into the news feed, offering passive brand building and data-driven engagement.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Transparency</h4>
                      <p className="text-muted-foreground text-sm">
                        We use 3rd party SDKs for transparency. Every ad slot is 100% viewable; we don't charge for what isn't displayed.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-geometric opacity-10"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Our <span className="text-gradient">Promise to You</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We are committed to helping you stay ahead of the curve in Innovation, Science, Medical, and Technology. 
              With In60z, you get a quick and comprehensive experience, ensuring you are informed efficiently in a time-sensitive world.
            </p>
            <div className="text-center">
              <Badge className="text-2xl py-3 px-6 bg-primary/20 text-primary border-primary/30">
                Swipe Intelligence. Stay informed in 60 words.
              </Badge>
            </div>
            <div className="mt-12">
              <WaitlistForm 
                trigger={
                  <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4">
                    Join the Revolution
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;