import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import imges from '../Constants/Cards';

const Shop = () => {
    const [priceRange, setPriceRange] = useState(50);

    const products = [
        { id: 1, name: "Boxy T-Shirt with Roll Sleeve", price: 3090, img: imges.card2, sale: true },
        { id: 2, name: "Boxy T-Shirt with Roll Sleeve", price: 3090, img: imges.card3 },
        { id: 3, name: "Boxy T-Shirt with Roll Sleeve", price: 3090, img: imges.card4 },
        { id: 4, name: "Boxy T-Shirt with Roll Sleeve", price: 3090, img: imges.card5 },
        { id: 5, name: "Boxy T-Shirt with Roll Sleeve", price: 3090, img: imges.card6 },
        { id: 6, name: "Boxy T-Shirt with Roll Sleeve", price: 3090, img: imges.card4 },
    ]

    return (

        <div className="bg-white min-h-screen pt-20">

            <div className="bg-[#f5f5f5] py-20 text-center mb-10">
                <h1 className="text-4xl font-black uppercase tracking-[0.2em]">Products</h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                

                <aside className="col-span-1 space-y-10">

                    <div>
                        <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-gray-800">Categories</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Best Seller (8 items)</li>
                            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Featured (8 items)</li>
                            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Men (8 items)</li>
                            <li className="hover:text-[#e65540] cursor-pointer transition-colors">Women (8 items)</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-gray-800">Color</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            {['Black', 'Gray', 'Red', 'Blue'].map((color) => (
                                <li key={color} className="flex items-center gap-2 cursor-pointer group">
                                    <span className={`w-3 h-3 rounded-full border border-gray-200 bg-${color.toLowerCase()}-500`}></span>
                                    <span className="group-hover:text-[#e65540]">{color}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6 uppercase tracking-widest text-gray-800">Price</h3>
                        <input 
                            type="range" 
                            min="0" max="200" 
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="w-full h-1 bg-gray-200 appearance-none cursor-pointer accent-black" 
                        />
                        <div className="flex justify-between text-xs mt-4 text-gray-500 font-bold uppercase tracking-widest">
                            <span>Range: $0 - ${priceRange}</span>
                            <button className="text-black hover:text-[#e65540]">Filter</button>
                        </div>
                    </div>

                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="w-full border-b border-gray-200 py-2 outline-none focus:border-black transition-all"
                        />
                        <Search className="absolute right-0 top-2 w-4 h-4 text-gray-400" />
                    </div>
                </aside>

                <main className="col-span-3">

                    <div className="flex flex-wrap justify-between items-center mb-8 gap-4 text-sm text-gray-500">
                        <div className="flex gap-4">
                            <select className="border border-gray-200 px-4 py-2 outline-none">
                                <option>Alphabetically, A-Z</option>
                                <option>Price, low to high</option>
                                <option>Price, high to low</option>
                            </select>
                            <select className="border border-gray-200 px-4 py-2 outline-none">
                                <option>10 Items</option>
                                <option>20 Items</option>
                                <option>All</option>
                            </select>
                        </div>
                        <p>Showing 1–6 of 8 items</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((item) => (
                            <motion.div 
                                key={item.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                className="group"
                            >
                                <div className="relative bg-[#f5f5f5] overflow-hidden mb-4">
                                    <img 
                                        src={item.img || "https://via.placeholder.com/300x400"} 
                                        alt={item.name} 
                                        className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {item.sale && (
                                        <span className="absolute top-4 left-4 bg-[#e65540] text-white text-[10px] px-3 py-1 font-bold uppercase rounded-full">Sale</span>
                                    )}

                                    <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <button className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase hover:bg-[#e65540] transition-colors shadow-2xl">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                                <h4 className="text-gray-600 text-sm mb-1 hover:text-[#e65540] cursor-pointer transition-colors">{item.name}</h4>
                                <p className="font-bold text-gray-800">¥{item.price.toLocaleString()}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-16 gap-2">
                        <button className="w-10 h-10 rounded-full bg-black text-white font-bold">1</button>
                        <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-400 hover:bg-black hover:text-white transition-all font-bold">2</button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Shop;