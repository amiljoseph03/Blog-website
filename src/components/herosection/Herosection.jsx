import React from 'react';
import { Button } from '@material-tailwind/react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-20 px-6 md:px-16 lg:px-32 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-6">
          Discover Inspiring Stories and Ideas
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl mb-8">
          Dive into articles, insights, and tips on technology, design, and
          creativity from passionate writers around the world.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Button color="blue" size="lg" className="px-6 py-3">
            Explore Blogs
          </Button>
          <Button
            variant="outlined"
            color="blue"
            size="lg"
            className="px-6 py-3"
          >
            Start Writing
          </Button>
        </div>
      </div>

      {/* Decorative background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&w=1400&q=80"
          alt="blog background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
