import React from 'react';
import { Button } from '@material-tailwind/react';

const HeroSection = () => {
  return (
    <section className="relative py-30 px-6 md:px-16 lg:px-32 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://i.pinimg.com/1200x/c9/42/d7/c942d777898a7c6881c2a296a00ec3d0.jpg"
          alt="Blog Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="max-w-3xl mx-auto text-white">
        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Discover Inspiring Stories and Ideas
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8">
          Dive into articles, insights, and tips on technology, design, and
          creativity from passionate writers around the world.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outlined"
            color="white"
            size="lg"
            className="px-6 py-3 text-white border-white"
          >
            Explore Blogs
          </Button>

          <Button
            variant="outlined"
            color="white"
            size="lg"
            className="px-6 py-3 text-white border-white"
          >
            Start Writing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
