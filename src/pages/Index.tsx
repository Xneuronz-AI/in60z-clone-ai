import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeatureSection from '@/components/FeatureSection';
import VideoSection from '@/components/VideoSection';
import DomainsSection from '@/components/DomainsSection';
import PodcastSection from '@/components/PodcastSection';
import AdvertisingSection from '@/components/AdvertisingSection';
import IncubationSection from '@/components/IncubationSection';
import RecognizedSection from '@/components/RecognizedSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <FeatureSection />
      <VideoSection />
      <DomainsSection />
      <PodcastSection />
      <AdvertisingSection />
      <IncubationSection />
      <RecognizedSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
