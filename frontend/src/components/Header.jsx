import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">NERV</span>
              <span className="text-sm text-gray-600 ml-2">LIVE FIT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              PRODUCTS ▼
            </a>
            <a href="#store-locator" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              STORE LOCATOR
            </a>
            <a href="#about" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              ABOUT ▼
            </a>
            <a href="#contact" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">
              CONTACT US
            </a>
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ShoppingCart className="w-4 h-4" />
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">
              BUY ONLINE
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#products" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                PRODUCTS
              </a>
              <a href="#store-locator" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                STORE LOCATOR
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                ABOUT
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600">
                CONTACT US
              </a>
              <div className="pt-4 border-t border-gray-200">
                <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                  BUY ONLINE
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;