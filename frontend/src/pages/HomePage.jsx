import React, { useEffect, useState } from 'react';
import { ChevronDown, Brain, Zap, Shield, Focus, Droplets, Star } from 'lucide-react';
import Header from '../components/Header';
import ProductBottle from '../components/ProductBottle';
import ScrollSection from '../components/ScrollSection';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          setCurrentSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById(`section-${Math.min(currentSection + 1, 2)}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Section 1: Hero - Why NERV */}
      <ScrollSection id="section-0" className="bg-white relative overflow-hidden">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-9xl font-bold text-gray-100 select-none tracking-wider transform -rotate-12">
            NERV
          </div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6 z-10 relative">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              ZERO SUGAR<br />
              <span className="text-pink-600">FOCUS ENHANCING</span><br />
              HYDRATION
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              NERV is an innovative <span className="text-pink-600 font-semibold">premium focus enhancement</span> drink 
              designed to optimize <span className="text-gray-900 font-semibold">cognitive performance</span> and mental clarity. 
              A carefully formulated blend of <span className="text-pink-600 font-semibold">natural nootropics</span> and 
              brain-boosting nutrients.
            </p>
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById('section-1').scrollIntoView({ behavior: 'smooth' })}
            >
              BUY NOW +
            </Button>
          </div>

          {/* Center - Product */}
          <div className="flex justify-center">
            <ProductBottle className="transform hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Right content - Why NERV keywords */}
          <div className="space-y-4 z-10 relative">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why NERV?</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Brain className="w-6 h-6 text-pink-600" />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">Enhanced Focus</span> & Concentration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="w-6 h-6 text-pink-600" />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">Sustained Energy</span> Without Crashes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-6 h-6 text-pink-600" />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">Stress Reduction</span> & Mental Clarity</span>
              </div>
              <div className="flex items-center space-x-3">
                <Focus className="w-6 h-6 text-pink-600" />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">Flow State</span> Activation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Droplets className="w-6 h-6 text-pink-600" />
                <span className="text-gray-700"><span className="font-semibold text-gray-900">Zero Sugar</span> Formula</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={scrollToNext}
            className="text-gray-400 hover:text-pink-600"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </ScrollSection>

      {/* Section 2: How It Supports You */}
      <ScrollSection id="section-1" className="bg-gray-50 relative">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left benefits */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Brain className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enhanced Focus</h3>
                <p className="text-gray-600">Improves attention span and mental clarity for demanding tasks and complex problem-solving.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sustained Energy</h3>
                <p className="text-gray-600">Clean, jitter-free energy that lasts hours without crashes or blood sugar rollercoaster.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stress Reduction</h3>
                <p className="text-gray-600">Contains adaptogens that help manage stress and reduce mental fatigue throughout your day.</p>
              </CardContent>
            </Card>
          </div>

          {/* Center - Product (stays consistent) */}
          <div className="flex justify-center">
            <ProductBottle className="transform hover:scale-105 transition-transform duration-300" />
          </div>

          {/* Right benefits */}
          <div className="space-y-6">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Focus className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cognitive Support</h3>
                <p className="text-gray-600">Supports memory, processing speed, and mental agility for peak performance.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Flow State Activation</h3>
                <p className="text-gray-600">Helps your brain achieve Alpha state for optimal mental performance and deep focus.</p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <Droplets className="w-12 h-12 text-pink-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Formula</h3>
                <p className="text-gray-600">Made with scientifically-backed natural compounds and zero artificial sugars.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll to learn more */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-400 text-sm mb-2">SCROLL TO LEARN MORE</p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => document.getElementById('section-2').scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-400 hover:text-pink-600 animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </ScrollSection>

      {/* Section 3: Ingredients */}
      <ScrollSection id="section-2" className="bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              POWERFUL <span className="text-pink-600">INGREDIENTS</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every ingredient in NERV is carefully selected and scientifically backed for optimal cognitive enhancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Left ingredients */}
            <div className="space-y-6">
              <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">L</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">L-Theanine</h3>
                  <p className="text-gray-600 text-sm">Promotes calm focus and reduces jitters while enhancing cognitive performance</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Natural Adaptogens</h3>
                  <p className="text-gray-600 text-sm">Help your body adapt to stress and maintain mental balance</p>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Nootropics Blend</h3>
                  <p className="text-gray-600 text-sm">Cognitive enhancers that support memory and mental clarity</p>
                </CardContent>
              </Card>
            </div>

            {/* Center - Product */}
            <div className="flex justify-center">
              <ProductBottle className="transform hover:scale-105 transition-transform duration-300" />
            </div>

            {/* Right ingredients */}
            <div className="space-y-6">
              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-sm">125mg</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Caffeine</h3>
                  <p className="text-gray-600 text-sm">Optimal 125mg dose for sustained energy without crashes or jitters</p>
                </CardContent>
              </Card>

              <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Droplets className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Electrolytes</h3>
                  <p className="text-gray-600 text-sm">Essential minerals for optimal hydration and cellular function</p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">0</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zero Sugar</h3>
                  <p className="text-gray-600 text-sm">No artificial sugars or sweeteners, just clean natural energy</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-lg">
              EXPERIENCE NERV TODAY
            </Button>
            <p className="text-gray-500 text-sm mt-4">Available at select retailers and online</p>
          </div>
        </div>
      </ScrollSection>
    </div>
  );
};

export default HomePage;