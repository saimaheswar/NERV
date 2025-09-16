import React, { useEffect, useState, useRef } from 'react';
import {
  ChevronDown, Brain, Zap, Shield, Droplets, Activity, Waves,
  Target, TreePine, Sparkles, FlaskConical
} from 'lucide-react';
import Header from '../components/Header';
import ProductBottle from '../components/ProductBottle';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useScrollHook } from '../hooks/useScrollHook';
import axios from 'axios';
import bgImage3 from './3bgimage.png';

// background image in the SAME folder as this file
import bgImage from './bgimage.png';

const HomePage = () => {
  const bottleRef = useRef(null);
  const { currentSection } = useScrollHook(bottleRef);
  const [apiStatus, setApiStatus] = useState(null);

  useEffect(() => {
    const testAPI = async () => {
      try {
        const response = await axios.get('/api/');
        setApiStatus({ type: 'success', message: 'API Connected: ' + response.data.message });
      } catch (error) {
        setApiStatus({ type: 'error', message: 'API Error: ' + error.message });
      }
    };
    testAPI();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById(`section-${Math.min(currentSection + 1, 2)}`);
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  // Just the image. No overlay/gradient.
  const sectionBg = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed', // <- enable if you want parallax
  };
  const section3Bg = {
    backgroundImage: `url(${bgImage3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-white relative">
      <Header />

      {apiStatus && (
        <div
          className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-sm font-medium ${
            apiStatus.type === 'success'
              ? 'bg-green-100 text-green-800 border border-green-200'
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}
        >
          {apiStatus.message}
        </div>
      )}

      {/* Bottle stays centered */}
      <div
        ref={bottleRef}
        className="fixed z-20 pointer-events-none transition-none"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%) scale(1)' }}
      >
        <ProductBottle />
      </div>

      {/* SECTION 1 */}
      {/* SECTION 1 */}
<div
  id="section-0"
  data-section="0"
  className="h-screen snap-start relative overflow-hidden flex items-center"
  style={sectionBg}
>
  {/* Top Heading */}
  <h1
  className="absolute top-[4.2rem] left-1/2 transform -translate-x-1/2 
             text-4xl md:text-5xl font-bold text-gray-900 
             whitespace-nowrap text-center z-20"
>
  ZERO SUGAR <span className="text-pink-600">FOCUS ENHANCING</span> HYDRATION
</h1>

  {/* Left column */}
  <div className="absolute left-0 top-0 w-1/3 h-full flex items-center z-10">
    <div className="p-8 space-y-6 mt-20">
      <p className="text-gray-600 text-lg leading-relaxed">
        NERV is an innovative <span className="text-pink-600 font-semibold">premium focus enhancement</span> drink
        designed to optimize <span className="text-gray-900 font-semibold">cognitive performance</span> and mental clarity.
      </p>

      {/* Stats */}
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

  {/* Right column */}
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
    <Button variant="ghost" size="sm" onClick={scrollToNext} className="text-gray-400 hover:text-pink-600">
      <ChevronDown className="w-6 h-6" />
    </Button>
  </div>
</div>

      {/* SECTION 2 */}
      <div id="section-1" data-section="1" className="h-screen snap-start relative flex items-center" style={sectionBg}>
        {/* Left - Cognitive benefits */}
        {/* Left - Cognitive benefits */}
<div className="absolute left-0 top-0 w-1/3 h-full flex items-center z-10">
  <div className="p-8 space-y-6">

    {/* Box around the whole section */}
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl shadow-lg p-6 space-y-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
        Cognitive Enhancement
      </h3>

      <div className="space-y-6">
        <div className="flex items-start space-x-4 hover:translate-x-2 transition-all duration-300">
          <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Alpha Brainwave Activation
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Promotes 8–12Hz frequency for relaxed alertness and optimal learning states.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 hover:translate-x-2 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Enhanced Neuroplasticity
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Supports new neural connections and cognitive flexibility for better learning.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 hover:translate-x-2 transition-all duration-300">
          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Sustained Attention
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              L-theanine and caffeine enhance focus without crashes or jitters.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4 hover:translate-x-2 transition-all duration-300">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
            <Waves className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Flow State Facilitation
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Creates optimal conditions for peak performance and creativity.
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

        {/* Right - Performance metrics */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Performance Metrics</h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="text-2xl font-bold text-pink-600">40%</div>
                  <div className="text-sm text-gray-700">Improved Focus Duration</div>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="text-2xl font-bold text-blue-600">25%</div>
                  <div className="text-sm text-gray-700">Faster Processing Speed</div>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-gradient-to-r from-green-100 to-green-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="text-2xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-gray-700">Reduced Mental Fatigue</div>
                </div>
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
              </div>

              <div className="flex items-center justify-between bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
                <div>
                  <div className="text-2xl font-bold text-purple-600">3-4hrs</div>
                  <div className="text-sm text-gray-700">Sustained Performance</div>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg border-l-4 border-gray-600">
              <h4 className="text-sm font-bold text-gray-900 mb-2">Research-Backed Formula</h4>
              <p className="text-xs text-gray-600 mb-2">Based on peer-reviewed studies from leading neuroscience journals.</p>
              <div className="text-xs text-pink-600 font-medium">Psychopharmacology • Cognitive Science • Neuroplasticity</div>
            </div>
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

        {/* Jump to ingredients */}
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

      {/* SECTION 3 */}
      <div id="section-2" data-section="2" className="h-screen snap-start relative flex items-center" style={section3Bg}>
        {/* Left ingredients */}
        <div className="absolute left-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Primary Compounds</h3>

            <div className="space-y-6">
              <div className="group hover:translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl">
                    <span className="text-white font-bold text-xl">L</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">L-Theanine</h4>
                    <div className="text-sm font-semibold text-pink-600 mb-2">200mg</div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Natural amino acid that promotes relaxed alertness by increasing alpha brainwave activity for optimal focus.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Reduces stress</span>
                      <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Calm focus</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl">
                    <span className="text-white font-bold text-sm">125mg</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Natural Caffeine</h4>
                    <div className="text-sm font-semibold text-green-600 mb-2">125mg</div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Precisely dosed from green coffee beans for clean energy and enhanced alertness without jitters.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">Sustained energy</span>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">No crash</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl">
                    <TreePine className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Adaptogenic Complex</h4>
                    <div className="text-sm font-semibold text-purple-600 mb-2">Premium Blend</div>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      Rhodiola, Ashwagandha, and Ginseng work together for stress adaptation and mental stamina.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Stress resilience</span>
                      <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">Mental stamina</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right ingredients */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex items-center z-10">
          <div className="p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Supporting Nutrients</h3>

            <div className="space-y-6">
              <div className="group hover:-translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Nootropic Blend</h4>
                    <div className="text-sm font-semibold text-blue-600 mb-2">Cognitive Enhancement</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Alpha-GPC, Huperzine A, and Bacopa Monnieri support memory formation and cognitive function.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Memory boost</span>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Learning support</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:-translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl">
                    <Droplets className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Electrolyte Matrix</h4>
                    <div className="text-sm font-semibold text-teal-600 mb-2">Essential Minerals</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Sodium, potassium, and magnesium maintain optimal hydration and cellular function.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Hydration support</span>
                      <span className="bg-teal-100 text-teal-700 px-2 py-1 rounded-full">Cellular function</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group hover:-translate-x-2 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl">
                    <span className="text-white font-bold text-2xl">0</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Zero Sugar Formula</h4>
                    <div className="text-sm font-semibold text-orange-600 mb-2">Clean & Natural</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      No artificial sugars or sweeteners, using natural stevia leaf extract for great taste.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">No sugar crash</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">Metabolic friendly</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QA */}
            <div className="mt-8 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-l-4 border-gray-600">
              <h4 className="text-lg font-bold text-gray-900 mb-3">Quality Assurance</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Shield className="w-4 h-4 text-pink-600" />
                  <span className="text-gray-700">GMP Certified</span>
                </div>
                <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <FlaskConical className="w-4 h-4 text-pink-600" />
                  <span className="text-gray-700">Third-Party Tested</span>
                </div>
                <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <TreePine className="w-4 h-4 text-pink-600" />
                  <span className="text-gray-700">Natural Sourced</span>
                </div>
                <div className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity duration-300">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span className="text-gray-700">No Additives</span>
                </div>
              </div>
            </div>
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

        {/* Final CTA */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10">
  <div className="mb-6">   {/* ⬅️ changed from mb-4 to mb-6 for extra spacing */}
    <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2">
      <div className="text-xs font-semibold text-pink-800">PREMIUM QUALITY</div>
      <div className="w-1 h-1 bg-pink-400 rounded-full" />
      <div className="text-xs font-semibold text-pink-800">SCIENTIFICALLY BACKED</div>
    </div>
  </div>

          <Button className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-xl">
            UNLOCK YOUR FLOW STATE
          </Button>
          <p className="text-gray-500 text-sm mt-3">Join thousands achieving peak cognitive performance</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;