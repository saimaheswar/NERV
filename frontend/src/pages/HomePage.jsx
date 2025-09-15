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
      
      {/* Fixed bottle hook in the center - always centered */}
      <div
        ref={bottleRef}
        className="fixed z-20 pointer-events-none transition-all duration-500 ease-out"
        style={{
          left: '50%',
          top: '50%',
          transform: `translate(-50%, -50%) scale(${0.9 + scrollProgress * 0.1})`,
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

        {/* Left side content */}
        <div className="absolute left-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              ZERO SUGAR<br />
              <span className="text-pink-600">FOCUS ENHANCING</span><br />
              HYDRATION
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              NERV is an innovative <span className="text-pink-600 font-semibold">premium focus enhancement</span> drink 
              designed to optimize <span className="text-gray-900 font-semibold">cognitive performance</span> and mental clarity.
            </p>
            
            {/* Key stats */}
            <div className="grid grid-cols-1 gap-3 py-4">
              <div className="text-center bg-pink-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-pink-600">125mg</div>
                <div className="text-sm text-gray-600">Caffeine</div>
              </div>
              <div className="text-center bg-gray-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-gray-900">0g</div>
                <div className="text-sm text-gray-600">Sugar</div>
              </div>
              <div className="text-center bg-blue-100 rounded-lg p-3">
                <div className="text-2xl font-bold text-blue-600">8-12Hz</div>
                <div className="text-sm text-gray-600">Alpha Waves</div>
              </div>
            </div>
            
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-lg w-full"
              onClick={() => document.getElementById('section-1').scrollIntoView({ behavior: 'smooth' })}
            >
              EXPERIENCE FLOW STATE
            </Button>
          </div>
        </div>

        {/* Right side content - Why NERV */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose NERV?</h2>
            
            <Card className="bg-pink-50 border-pink-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-3">
                <Brain className="w-6 h-6 text-pink-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Enhanced Focus</div>
                  <div className="text-xs text-gray-600">Improves attention span</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-3">
                <Waves className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Alpha Brainwaves</div>
                  <div className="text-xs text-gray-600">Relaxed alertness state</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-3">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Sustained Energy</div>
                  <div className="text-xs text-gray-600">No crashes or jitters</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-3">
                <Target className="w-6 h-6 text-purple-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Flow State</div>
                  <div className="text-xs text-gray-600">Peak performance zones</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-3">
                <Shield className="w-6 h-6 text-orange-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Stress Resilience</div>
                  <div className="text-xs text-gray-600">Adaptogen support</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-teal-50 border-teal-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 flex items-center space-x-3">
                <TreePine className="w-6 h-6 text-teal-600 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Natural Formula</div>
                  <div className="text-xs text-gray-600">Zero artificial additives</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
        {/* Left side - Cognitive benefits */}
        <div className="absolute left-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Cognitive Enhancement</h3>
            
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Activity className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Alpha Brainwave Activation</h4>
                    <p className="text-xs text-gray-600">Promotes 8-12Hz frequency for relaxed alertness and optimal learning states.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Brain className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Enhanced Neuroplasticity</h4>
                    <p className="text-xs text-gray-600">Supports new neural connections and cognitive flexibility.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Sustained Attention</h4>
                    <p className="text-xs text-gray-600">L-theanine and caffeine enhance focus without crashes.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Waves className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Flow State Facilitation</h4>
                    <p className="text-xs text-gray-600">Creates conditions for peak performance and creativity.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right side - Performance metrics */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Metrics</h3>
            
            {/* Performance stats */}
            <div className="grid grid-cols-1 gap-3 mb-6">
              <Card className="bg-gradient-to-br from-pink-500 to-pink-600 text-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold mb-1">40%</div>
                  <div className="text-xs">Improved Focus Duration</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold mb-1">25%</div>
                  <div className="text-xs">Faster Processing Speed</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold mb-1">60%</div>
                  <div className="text-xs">Reduced Mental Fatigue</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold mb-1">3-4hrs</div>
                  <div className="text-xs">Sustained Performance</div>
                </CardContent>
              </Card>
            </div>

            {/* Additional benefits */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Additional Benefits</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-pink-600" />
                    <span className="text-xs text-gray-700">Enhanced working memory</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FlaskConical className="w-4 h-4 text-pink-600" />
                    <span className="text-xs text-gray-700">Improved flexibility</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-pink-600" />
                    <span className="text-xs text-gray-700">Stress protection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-pink-600" />
                    <span className="text-xs text-gray-700">Clean mental energy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Research backing */}
            <Card className="bg-gray-900 text-white shadow-lg">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold mb-2">Research-Backed</h4>
                <p className="text-xs text-gray-300 mb-2">
                  Based on peer-reviewed studies from leading neuroscience journals.
                </p>
                <div className="text-xs text-pink-400">
                  Psychopharmacology • Cognitive Science
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Center title */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            THE <span className="text-pink-600">SCIENCE</span> OF FOCUS
          </h2>
          <p className="text-sm text-gray-600 max-w-md">
            NERV leverages cutting-edge neuroscience to optimize alpha brainwave activity for peak cognitive performance.
          </p>
        </div>

        {/* Scroll to ingredients */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
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

      {/* Section 3: Premium Ingredients */}
      <div data-section="2" className="min-h-screen bg-white relative flex items-center">
        {/* Left ingredients */}
        <div className="absolute left-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Primary Compounds</h3>
            
            <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">L-Theanine (200mg)</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      Natural amino acid that promotes relaxed alertness by increasing alpha brainwave activity.
                    </p>
                    <div className="text-xs text-pink-600 font-semibold">
                      ✓ Reduces stress • ✓ Calm focus
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs">125mg</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Natural Caffeine (125mg)</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      Precisely dosed from green coffee beans for clean energy and alertness.
                    </p>
                    <div className="text-xs text-green-600 font-semibold">
                      ✓ Sustained energy • ✓ No crash
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Adaptogenic Complex</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      Rhodiola, Ashwagandha, and Ginseng for stress adaptation and mental stamina.
                    </p>
                    <div className="text-xs text-purple-600 font-semibold">
                      ✓ Stress resilience • ✓ Mental stamina
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right ingredients */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Supporting Nutrients</h3>
            
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Nootropic Blend</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      Alpha-GPC, Huperzine A, and Bacopa for memory and cognitive function.
                    </p>
                    <div className="text-xs text-blue-600 font-semibold">
                      ✓ Memory enhancement • ✓ Learning support
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Electrolyte Matrix</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      Sodium, potassium, and magnesium for optimal hydration and cellular function.
                    </p>
                    <div className="text-xs text-teal-600 font-semibold">
                      ✓ Hydration support • ✓ Cellular function
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">0</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Zero Sugar Formula</h4>
                    <p className="text-xs text-gray-700 mb-2">
                      No artificial sugars or sweeteners, using natural stevia leaf extract.
                    </p>
                    <div className="text-xs text-orange-600 font-semibold">
                      ✓ No sugar crash • ✓ Metabolic friendly
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality assurance */}
            <Card className="bg-gray-900 text-white shadow-xl">
              <CardContent className="p-4">
                <h4 className="text-sm font-bold mb-3">Quality Assurance</h4>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-3 h-3 text-pink-400" />
                    <span>GMP Certified</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FlaskConical className="w-3 h-3 text-pink-400" />
                    <span>Third-Party Tested</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TreePine className="w-3 h-3 text-pink-400" />
                    <span>Natural Sourced</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="w-3 h-3 text-pink-400" />
                    <span>No Additives</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Center title */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center z-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            PREMIUM <span className="text-pink-600">INGREDIENTS</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-md">
            Every ingredient is carefully selected and scientifically backed for optimal cognitive enhancement.
          </p>
        </div>

        {/* Final CTA Section */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center z-10">
          <div className="mb-4">
            <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2">
              <div className="text-xs font-semibold text-pink-800">PREMIUM QUALITY</div>
              <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              <div className="text-xs font-semibold text-pink-800">SCIENTIFICALLY BACKED</div>
            </div>
          </div>
          
          <Button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl">
            UNLOCK YOUR FLOW STATE
          </Button>
          <p className="text-gray-500 text-sm mt-3">
            Join thousands achieving peak cognitive performance
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;