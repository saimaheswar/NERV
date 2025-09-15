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
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              PREMIUM <span className="text-pink-600">INGREDIENTS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every ingredient in NERV is carefully selected and scientifically backed for optimal cognitive enhancement. 
              Our premium formulation combines the most effective nootropics, adaptogens, and natural compounds 
              to deliver sustained focus without compromising your health.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left ingredients with detailed descriptions */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Primary Active Compounds</h3>
              
              <Card className="bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-2xl">L</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">L-Theanine (200mg)</h4>
                      <p className="text-gray-700 mb-3">
                        A natural amino acid found in tea leaves that promotes relaxed alertness by increasing alpha brainwave activity. 
                        L-theanine synergizes perfectly with caffeine to provide smooth, sustained focus without jitters or anxiety.
                      </p>
                      <div className="text-sm text-pink-600 font-semibold">
                        ✓ Reduces stress • ✓ Enhances attention • ✓ Promotes calm focus
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">125mg</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Natural Caffeine (125mg)</h4>
                      <p className="text-gray-700 mb-3">
                        Precisely dosed natural caffeine from green coffee beans provides clean energy and enhanced alertness. 
                        This optimal amount maximizes cognitive benefits while minimizing side effects like jitters or crashes.
                      </p>
                      <div className="text-sm text-green-600 font-semibold">
                        ✓ Sustained energy • ✓ Enhanced alertness • ✓ No crash
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-50 to-violet-50 border-purple-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <TreePine className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Adaptogenic Complex</h4>
                      <p className="text-gray-700 mb-3">
                        A blend of premium adaptogens including Rhodiola Rosea, Ashwagandha, and Ginseng that help your body 
                        adapt to stress while maintaining cognitive performance under pressure.
                      </p>
                      <div className="text-sm text-purple-600 font-semibold">
                        ✓ Stress resilience • ✓ Mental stamina • ✓ Cortisol balance
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right ingredients continued */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Supporting Nutrients</h3>
              
              <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Brain className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Nootropic Blend</h4>
                      <p className="text-gray-700 mb-3">
                        A synergistic combination of Alpha-GPC, Huperzine A, and Bacopa Monnieri that supports memory formation, 
                        neuroplasticity, and overall cognitive function for enhanced learning and recall.
                      </p>
                      <div className="text-sm text-blue-600 font-semibold">
                        ✓ Memory enhancement • ✓ Learning support • ✓ Neuroprotection
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-teal-50 to-cyan-50 border-teal-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Droplets className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Electrolyte Matrix</h4>
                      <p className="text-gray-700 mb-3">
                        Essential minerals including sodium, potassium, and magnesium that maintain optimal hydration, 
                        support cellular function, and enhance nutrient absorption for peak cognitive performance.
                      </p>
                      <div className="text-sm text-teal-600 font-semibold">
                        ✓ Hydration support • ✓ Cellular function • ✓ Nutrient absorption
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-3xl">0</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-3">Zero Sugar Formula</h4>
                      <p className="text-gray-700 mb-3">
                        Completely free from artificial sugars, sweeteners, and additives. NERV uses natural flavoring 
                        and stevia leaf extract to deliver great taste without compromising your metabolic health.
                      </p>
                      <div className="text-sm text-orange-600 font-semibold">
                        ✓ No sugar crash • ✓ Metabolic friendly • ✓ Natural sweetening
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quality assurance */}
              <Card className="bg-gray-900 text-white shadow-xl">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold mb-4">Quality Assurance</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-pink-400" />
                      <span>GMP Certified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FlaskConical className="w-4 h-4 text-pink-400" />
                      <span>Third-Party Tested</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TreePine className="w-4 h-4 text-pink-400" />
                      <span>Natural Sourced</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Sparkles className="w-4 h-4 text-pink-400" />
                      <span>No Artificial Additives</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center mt-20">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 bg-pink-100 rounded-full px-8 py-4">
                <div className="text-sm font-semibold text-pink-800">PREMIUM QUALITY</div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="text-sm font-semibold text-pink-800">SCIENTIFICALLY BACKED</div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="text-sm font-semibold text-pink-800">ZERO COMPROMISE</div>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-16 py-8 text-2xl font-bold rounded-xl shadow-xl">
              UNLOCK YOUR FLOW STATE
            </Button>
            <p className="text-gray-500 text-lg mt-6">
              Join thousands of professionals achieving peak cognitive performance
            </p>
            <div className="flex justify-center items-center space-x-8 mt-8 text-sm text-gray-400">
              <span>🚚 Free shipping over $50</span>
              <span>💸 30-day money back guarantee</span>
              <span>⚡ Same-day processing</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;