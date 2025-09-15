import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const AdvertisingSection = () => {
  // Mock brand data - these would be replaced with actual brand images
  const brands = [
    { name: 'Samsung', color: 'bg-blue-500' },
    { name: 'Apollo Tyres', color: 'bg-purple-500' },
    { name: 'Audi', color: 'bg-red-500' },
    { name: 'Hugo Boss', color: 'bg-gray-800' },
    { name: 'Apple', color: 'bg-gray-900' },
    { name: 'Microsoft', color: 'bg-blue-600' },
    { name: 'Google', color: 'bg-green-500' },
    { name: 'Tesla', color: 'bg-red-600' },
    { name: 'Nike', color: 'bg-orange-500' },
    { name: 'Adidas', color: 'bg-black' },
    { name: 'BMW', color: 'bg-blue-700' },
    { name: 'Mercedes', color: 'bg-gray-700' },
    { name: 'Toyota', color: 'bg-red-700' },
    { name: 'Coca Cola', color: 'bg-red-500' },
    { name: 'Pepsi', color: 'bg-blue-800' }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            In60z Advertising:{' '}
            <span className="text-gradient">Connect with Your Audience</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
            Reach your target audience with native, non-intrusive advertising that seamlessly integrates into our short-form content. 
            Our platform offers a variety of ad formats to meet your campaign goals and deliver maximum impact.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {brands.map((brand, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden group cursor-pointer">
                    <div className={`absolute inset-0 ${brand.color} opacity-80`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60" />
                    </div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/20 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                        Ads
                      </span>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg md:text-xl mb-1">
                        {brand.name}
                      </h3>
                      <p className="text-white/80 text-xs md:text-sm">
                        Connect with your audience through innovative advertising solutions
                      </p>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm md:text-base">
            Join leading brands in reaching engaged researchers and professionals through In60z's advertising platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingSection;