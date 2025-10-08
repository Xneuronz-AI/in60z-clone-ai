import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const articles = [
    {
      id: 'podcast-strategy-dominance',
      title: 'How In60z\'s Podcast Strategy is Poised to Dominate the Knowledge Audio Market',
      description: 'Explore how In60z is strategically leveraging the explosive $131 billion podcast market boom with a tiered audio content strategy designed to capture premium audiences.',
      publishedAt: '2025-10-01',
      readTime: '12 min read'
    },
    {
      id: 'events-industry-opportunity',
      title: 'The $1.1 Trillion Unseen Opportunity: How In60z Will Dominate the Global Events Industry',
      description: 'Discover how In60z is positioned to fundamentally redefine the $1.1 trillion global events industry through AI-powered event discovery and personalized marketplace solutions.',
      publishedAt: '2025-09-26',
      readTime: '8 min read'
    },
    {
      id: 'tired-of-information-overload',
      title: 'Tired of the Information Overload? You\'re Not Alone.',
      description: 'In today\'s fast-paced world, staying informed feels like a full-time job. Discover how In60z transforms information consumption.',
      publishedAt: '2025-09-15',
      readTime: '5 min read'
    },
    {
      id: 'future-of-event-discovery',
      title: 'The Future of Event Discovery Isn\'t About Finding More; It\'s About Finding the Right Ones.',
      description: 'Transform your approach to professional development with curated, not cluttered event discovery.',
      publishedAt: '2025-09-20',
      readTime: '4 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                In60z Blog
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Insights on transforming information consumption and staying ahead in the knowledge economy
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
              
              <div className="grid gap-8">
                {articles.map((article) => (
                  <Link 
                    key={article.id} 
                    to={`/blog/${article.id}`}
                    className="block group"
                  >
                    <Card className="h-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 border-border/50 hover:border-primary/30">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-muted-foreground">{article.publishedAt}</span>
                          <span className="text-sm text-muted-foreground">{article.readTime}</span>
                        </div>
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {article.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;