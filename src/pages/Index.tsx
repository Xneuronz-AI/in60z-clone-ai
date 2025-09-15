import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import StatsSection from '@/components/StatsSection';
import PodcastSection from '@/components/PodcastSection';
import VideoSection from '@/components/VideoSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <PodcastSection />
      <VideoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
