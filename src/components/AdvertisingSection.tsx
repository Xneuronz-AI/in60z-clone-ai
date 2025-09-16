import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Import brand images
import brandSamsung from '@/assets/brand-samsung.jpg';
import brandHP from '@/assets/brand-hp.jpg';
import brandRayBan from '@/assets/brand-rayban.jpg';
import brandRaymond from '@/assets/brand-raymond.jpg';
import brandBoss from '@/assets/brand-boss.jpg';
import brandAudi from '@/assets/brand-audi.jpg';
import brandVolvo from '@/assets/brand-volvo.jpg';
import brandMaruti from '@/assets/brand-maruti.jpg';
import brandTitan from '@/assets/brand-titan.jpg';
import brandRealme from '@/assets/brand-realme.jpg';
import brandMotorola from '@/assets/brand-motorola.jpg';
import brandUSPolo from '@/assets/brand-uspolo.jpg';
import brandMovado from '@/assets/brand-movado.jpg';
import brandAudiNew from '@/assets/brand-audi-new.jpg';
import brandHyundai from '@/assets/brand-hyundai.jpg';

const AdvertisingSection = () => {
  const brands = [
    { name: 'Samsung', image: brandSamsung },
    { name: 'HP', image: brandHP },
    { name: 'Ray-Ban', image: brandRayBan },
    { name: 'Raymond', image: brandRaymond },
    { name: 'Boss', image: brandBoss },
    { name: 'Audi', image: brandAudiNew },
    { name: 'Volvo', image: brandVolvo },
    { name: 'Maruti Suzuki', image: brandMaruti },
    { name: 'Titan', image: brandTitan },
    { name: 'Realme', image: brandRealme },
    { name: 'Motorola', image: brandMotorola },
    { name: 'U.S. Polo Assn.', image: brandUSPolo },
    { name: 'Movado', image: brandMovado },
    { name: 'Hyundai', image: brandHyundai }
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
                  <div className="relative h-56 md:h-64 lg:h-72 rounded-2xl overflow-hidden group cursor-pointer">
                    <img 
                      src={brand.image} 
                      alt={`${brand.name} advertisement`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60" />
                    
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