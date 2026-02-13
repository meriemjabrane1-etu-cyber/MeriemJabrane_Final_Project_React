import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaPinterestP, FaGooglePlusG, FaInstagram, 
  FaRegUserCircle, FaShoppingBag 
} from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/Shop' },
    { name: 'Sale', path: '/sale' },
    { name: 'Features', path: '/features' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/ContactSection' },
  ]

  return (
    <header className="w-full font-sans shadow-sm">

      <div className="bg-[#e65540] text-white text-[13px] py-2 px-4 flex justify-center items-center relative">
        <p>
          20% off everything! <Link to="/shop" className="underline ml-1 font-medium">Shop Now</Link>
        </p>
        <button className="absolute right-4 hover:scale-110 transition-transform">✕</button>
      </div>

      <div className="flex justify-between items-center px-6 md:px-12 py-5 border-b border-gray-100">

        <div className="flex space-x-5 text-gray-500 text-sm">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF className="hover:text-[#e65540] cursor-pointer" /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter className="hover:text-[#e65540] cursor-pointer" /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram className="hover:text-[#e65540] cursor-pointer" /></a>
        </div>

        <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-3xl font-black tracking-tighter text-black">
          Fashe<span className="text-[#e65540]">.</span>
        </Link>

        <div className="flex items-center space-x-6 text-gray-500">
          <span className="hidden lg:inline text-xs border-r pr-4 border-gray-200 uppercase">fashe@example.com</span>
          <div className="flex items-center space-x-4">
            <Link to="/cont"><FaRegUserCircle className="text-2xl hover:text-black transition-colors" /></Link>
            <Link to="/cart" className="relative group" >
              <FaShoppingBag className="text-2xl group-hover:text-black transition-colors" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                6
              </span>
            </Link>
          </div>
        </div>
      </div>

      <nav className="flex justify-center items-center space-x-10 py-4 text-[14px] font-medium uppercase tracking-widest sticky top-0 z-50">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition-all duration-300 pb-1 border-b-2 ${
              isActive(link.path) ? 'text-[#e65540] border-[#e65540]' : 'text-gray-600 border-transparent hover:text-[#e65540]'}`} >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Navbar;