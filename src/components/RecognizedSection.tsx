import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import nvidiaLogo from '@/assets/nvidia-logo.svg';
import elevenLabsLogo from '@/assets/eleven-labs-logo.png';
import googleCloudLogo from '@/assets/google-cloud-logo.svg';
import microsoftLogo from '@/assets/microsoft-logo.svg';
import awsLogo from '@/assets/aws-logo.svg';

const RecognizedSection = () => {
  const partners = [
    {
      logo: nvidiaLogo,
      name: 'Nvidia Inception',
      description: 'AI Accelerator Program',
      logoAlt: 'NVIDIA'
    },
    {
      logo: elevenLabsLogo,
      name: 'Eleven Labs',
      description: 'Grant Recipient',
      logoAlt: 'ElevenLabs',
      className: 'text-white'
    },
    {
      logo: googleCloudLogo,
      name: 'Google Cloud',
      description: 'AI and Cloud Credits Infrastructure',
      logoAlt: 'Google Cloud'
    },
    {
      logo: microsoftLogo,
      name: 'Microsoft for Startups',
      description: 'AI and Cloud Credits Infrastructure',
      logoAlt: 'Microsoft'
    },
    {
      logo: awsLogo,
      name: 'Amazon AWS',
      description: 'AI and Cloud Credits Infrastructure',
      logoAlt: 'AWS'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Recognized</span> & <span className="text-foreground">Supported</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Backed by industry leaders like NVIDIA, Microsoft, and Google, and supported by an Eleven Labs grant.
            This coalition provides the advanced technology, scalable cloud infrastructure, and compute power for AI model training.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="glass border-border/20 hover:border-primary/30 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center items-center h-20">
                  <img 
                    src={partner.logo} 
                    alt={partner.logoAlt}
                    className="max-h-16 max-w-full object-contain filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${partner.className || 'text-foreground'}`}>
                  {partner.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {partner.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognizedSection;