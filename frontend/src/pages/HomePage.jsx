import React, { useEffect, useState, useRef } from 'react';
import { ChevronDown, Brain, Zap, Shield, Focus, Droplets, Star, Activity, Waves, Target, TreePine, Sparkles, FlaskConical } from 'lucide-react';
import Header from '../components/Header';
import ProductBottle from '../components/ProductBottle';
import ScrollSection from '../components/ScrollSection';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useScrollHook } from '../hooks/useScrollHook';

const HomePage = () => {
  const bottleRef = useRef(null);
  const { scrollProgress, currentSection, bottlePosition } = useScrollHook(bottleRef);

  const scrollToNext = () => {
    const nextSection = document.getElementById(`section-${Math.min(currentSection + 1, 2)}`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      
      {/* Fixed bottle hook in the center */}
      <div
        ref={bottleRef}
        className="fixed z-20 pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: `${bottlePosition.x}px`,
          top: `${bottlePosition.y}px`,
          transform: `scale(${0.8 + scrollProgress * 0.2}) rotate(${scrollProgress * 10}deg)`,
        }}
      >
        <ProductBottle />
      </div>
      
      {/* Section 1: Hero - Why NERV */}
      <div data-section="0" className="min-h-screen bg-white relative overflow-hidden flex items-center">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <div className="text-9xl font-bold text-gray-900 select-none tracking-wider transform -rotate-12">
            NERV FOCUS
          </div>
        </div>

        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 z-10 relative">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              ZERO SUGAR<br />
              <span className="text-pink-600">FOCUS ENHANCING</span><br />
              HYDRATION
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              NERV is an innovative <span className="text-pink-600 font-semibold">premium focus enhancement</span> drink 
              designed to optimize <span className="text-gray-900 font-semibold">cognitive performance</span> and mental clarity. 
              A carefully formulated blend of <span className="text-pink-600 font-semibold">natural nootropics</span>, 
              <span className="text-gray-900 font-semibold">adaptogens</span>, and brain-boosting nutrients that promote 
              <span className="text-pink-600 font-semibold">alpha brainwave activity</span> for sustained focus.
            </p>
            
            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">125mg</div>
                <div className="text-sm text-gray-600">Caffeine</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">0g</div>
                <div className="text-sm text-gray-600">Sugar</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">8-12Hz</div>
                <div className="text-sm text-gray-600">Alpha Waves</div>
              </div>
            </div>
            
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-6 text-xl font-semibold rounded-lg"
              onClick={() => document.getElementById('section-1').scrollIntoView({ behavior: 'smooth' })}
            >
              EXPERIENCE FLOW STATE
            </Button>
          </div>

          {/* Right content - Why NERV expanded */}
          <div className="space-y-6 z-10 relative">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose NERV?</h2>
            <div className="grid grid-cols-1 gap-4">
              <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Brain className="w-8 h-8 text-pink-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Enhanced Focus & Concentration</div>
                    <div className="text-sm text-gray-600">Improves attention span and mental clarity for demanding tasks</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Waves className="w-8 h-8 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Alpha Brainwave Activation</div>
                    <div className="text-sm text-gray-600">Promotes relaxed alertness state for optimal cognitive performance</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Zap className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Sustained Energy Without Crashes</div>
                    <div className="text-sm text-gray-600">Clean energy from L-theanine and caffeine synergy</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Target className="w-8 h-8 text-purple-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Flow State Facilitation</div>
                    <div className="text-sm text-gray-600">Helps achieve deep focus and peak performance zones</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Shield className="w-8 h-8 text-orange-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Stress Resilience</div>
                    <div className="text-sm text-gray-600">Adaptogens help manage cortisol and mental fatigue</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-teal-50 border-teal-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-4 flex items-center space-x-3">
                  <TreePine className="w-8 h-8 text-teal-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Natural Nootropic Formula</div>
                    <div className="text-sm text-gray-600">Scientifically-backed natural compounds with zero artificial additives</div>
                  </div>
                </CardContent>
              </Card>
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
      </div>

      {/* Section 2: Cognitive Science & Benefits */}
      <div data-section="1" className="min-h-screen bg-gradient-to-br from-gray-50 to-pink-50 relative flex items-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              THE <span className="text-pink-600">SCIENCE</span> OF FOCUS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              NERV leverages cutting-edge neuroscience to optimize your brain's natural ability to achieve and maintain flow states, 
              promoting alpha brainwave activity (8-12Hz) associated with relaxed alertness and peak cognitive performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Cognitive benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Cognitive Enhancement Benefits</h3>
              
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Activity className="w-8 h-8 text-pink-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Alpha Brainwave Activation</h4>
                      <p className="text-gray-600">Promotes the 8-12Hz frequency range associated with relaxed alertness, creativity, and optimal learning states. L-theanine increases alpha wave production while maintaining mental clarity.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Brain className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Enhanced Neuroplasticity</h4>
                      <p className="text-gray-600">Supports the brain's ability to form new neural connections, improving memory consolidation, learning capacity, and cognitive flexibility for complex problem-solving.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Target className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Sustained Attention & Focus</h4>
                      <p className="text-gray-600">The L-theanine and caffeine combination enhances selective attention, reduces mind-wandering, and maintains focus for extended periods without the typical caffeine crash.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Waves className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">Flow State Facilitation</h4>
                      <p className="text-gray-600">Creates optimal conditions for achieving flow - the mental state of complete immersion and energized focus, leading to peak performance and enhanced creativity.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right side - Performance metrics */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
              
              {/* Performance stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">40%</div>
                    <div className="text-sm">Improved Focus Duration</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">25%</div>
                    <div className="text-sm">Faster Processing Speed</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">60%</div>
                    <div className="text-sm">Reduced Mental Fatigue</div>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold mb-2">3-4hrs</div>
                    <div className="text-sm">Sustained Performance</div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional benefits */}
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Additional Cognitive Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Sparkles className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">Enhanced working memory capacity</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <FlaskConical className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">Improved cognitive flexibility</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">Stress-induced cognitive protection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Activity className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">Increased mental energy without jitters</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Brain className="w-5 h-5 text-pink-600" />
                      <span className="text-gray-700">Enhanced mood and motivation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Research backing */}
              <Card className="bg-gray-900 text-white shadow-lg">
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold mb-3">Research-Backed Formula</h4>
                  <p className="text-sm text-gray-300 mb-3">
                    Our formulation is based on peer-reviewed studies from leading neuroscience journals, 
                    with each ingredient selected for its proven cognitive enhancement properties.
                  </p>
                  <div className="text-xs text-pink-400">
                    Studies from: Psychopharmacology, Cognitive Science, Journal of Neuroplasticity
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Scroll to ingredients */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-gray-500 text-sm mb-2 text-center">DISCOVER THE INGREDIENTS</p>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => document.getElementById('section-2').scrollIntoView({ behavior: 'smooth' })}
            className="text-gray-500 hover:text-pink-600 animate-bounce"
          >
            <ChevronDown className="w-6 h-6" />
          </Button>
        </div>
      </div>

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