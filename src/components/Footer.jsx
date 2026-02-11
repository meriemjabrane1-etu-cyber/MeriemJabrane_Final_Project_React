import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f2f2f2] pt-16 pb-8 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
        
        {/* GET IN TOUCH */}
        <div className="lg:col-span-1">
          <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Get in Touch</h4>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
          </p>
          <div className="flex space-x-4 text-gray-400">
            {/* Social Icons Placeholders */}
            <span className="hover:text-black cursor-pointer transition-colors text-lg">f</span>
            <span className="hover:text-black cursor-pointer transition-colors text-lg">t</span>
            <span className="hover:text-black cursor-pointer transition-colors text-lg">p</span>
            <span className="hover:text-black cursor-pointer transition-colors text-lg">g+</span>
            <span className="hover:text-black cursor-pointer transition-colors text-lg">i</span>
          </div>
        </div>

        {/* CATEGORIES */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Categories</h4>
          <ul className="text-gray-500 text-sm space-y-3">
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Men</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Women</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Dresses</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Sunglasses</li>
          </ul>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Links</h4>
          <ul className="text-gray-500 text-sm space-y-3">
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Search</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">About Us</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Contact Us</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Returns</li>
          </ul>
        </div>

        {/* HELP */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Help</h4>
          <ul className="text-gray-500 text-sm space-y-3">
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Track Order</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Returns</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Shipping</li>
            <li className="hover:text-[#e65540] cursor-pointer transition-colors">FAQs</li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="text-sm font-bold tracking-widest uppercase mb-6">Newsletter</h4>
          <form className="relative border-b border-gray-300 mb-6">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent py-2 text-sm focus:outline-none placeholder-gray-400"
            />
          </form>
          <button className="bg-[#111] text-white text-xs font-bold px-10 py-3 rounded-full uppercase tracking-widest hover:bg-blue-600 transition-all">
            Subscribe
          </button>
        </div>
      </div>

      <div className="mt-16 text-center border-t border-gray-200 pt-8 relative">
        <p className="text-gray-500 text-sm">
          Copyright © 2018 <span className="text-gray-700 font-medium">MassTechnologist.com</span>. All rights reserved.
        </p>
        
        <button className="absolute right-0 bottom-0 bg-gray-500 text-white p-2 rounded-md hover:bg-gray-700 transition-colors">
          <span className="block transform -rotate-90">➔</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;

