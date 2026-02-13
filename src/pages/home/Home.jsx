import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import imges from '../../Constants/index';
import BlogSection from '../../components/BlogSection';

const CategorySection = () => {
    const categories = [
        { name: 'Dresses', img: imges.Blog?.BlogA, size: 'md:col-span-1' },
        { name: 'Sunglasses', img: imges.Blog?.BlogB, size: 'md:col-span-1' },
        { name: 'Footwear', img: imges.Blog?.BlogC, size: 'md:col-span-1 md:row-span-2' }, // Dik l-kbira
        { name: 'Bags', img: imges.Blog?.BlogA, size: 'md:col-span-1' },
        { name: 'Accessories', img: imges.Blog?.BlogB, size: 'md:col-span-1' },
    ];

    return (
        <div className="max-w-7xl mx-auto p-10 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-full">
            {categories.map((cat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className={`${cat.size} relative group overflow-hidden cursor-pointer min-h-[250px]`}
                >
                    <img
                        src={imges.Blog.BlogB}
                        alt={cat.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-end p-6 bg-black/5 group-hover:bg-black/20 transition-all">
                        <button className="bg-white px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-[#e65540] hover:text-white transition-colors shadow-lg">
                            {cat.name}
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

const FeaturedProducts = () => (
    <section className="py-20 bg-white">
        <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl font-black text-center mb-12 uppercase tracking-widest"
        >
            Featured Products
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
            {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="group"
                >
                    <div className="relative overflow-hidden mb-4 bg-[#f5f5f5]">
                        
                        <img
                            src={imges.Blog.BlogA}
                            alt="Product"
                            className="w-full h-[350px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <motion.button
                            whileHover={{ y: -5 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all shadow-xl"
                        >
                            Add to Cart
                        </motion.button>
                    </div>
                    <h3 className="text-gray-600 text-sm hover:text-[#e65540] cursor-pointer">Herschel supply co 25l</h3>
                    <p className="font-bold text-gray-800 mt-1">$75.00</p>
                </motion.div>
            ))}
        </div>
    </section>
);


const Lookbook = () => (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-[#f2f2f2]">
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] md:h-[600px]"
        >
            <img src={imges.Banner.bnA} alt="Lookbook" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/10">
                <h2 className="text-3xl md:text-4xl font-serif italic mb-2 text-white">The Beauty</h2>
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-widest uppercase text-white">Lookbook</h1>
                <Link to="/Shop" className="text-white underline font-bold tracking-widest hover:text-[#e65540] transition-colors">
                    VIEW COLLECTION
                </Link>
            </div>
        </motion.div>

        <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center p-12 bg-white"
        >
            <div className="relative group overflow-hidden">
                <img src={imges.Blog.BlogB} alt="Product Deal" className="w-64 h-64 object-contain transition-transform duration-500 group-hover:scale-110" />
            </div>
            <p className="mt-6 text-gray-500 hover:text-[#e65540] cursor-pointer">Glynne s-h-o-e-s in white</p>
            <p className="text-xl font-bold mt-2">$29.00</p>

            <div className="flex space-x-4 mt-8">
                {['Days', 'Hrs', 'Mins', 'Secs'].map((unit, i) => (
                    <div key={i} className="border border-gray-100 p-4 text-center min-w-[75px] shadow-sm">
                        <span className="block font-bold text-2xl text-gray-800">0{i + 2}</span>
                        <span className="text-[10px] uppercase text-gray-400 font-bold tracking-tighter">{unit}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    </section>
);

function Home() {
    const slides = [
        { img: imges.Carousel?.CarouselA, title: "Women Collection 2026", subtitle: "NEW ARRIVALS" },
        { img: imges.Carousel?.CarouselB, title: "Men Fashion", subtitle: "STREET STYLE" },
        { img: imges.Carousel?.CarouselC, title: "Accessories", subtitle: "COMPLETE YOUR LOOK" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }

    return (
        <>
            <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute w-full h-full bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
                    >
                        <div className="text-center text-white z-10 px-4">
                            <motion.span
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                className="block text-lg md:text-2xl font-light mb-2 tracking-wide"
                            >
                                {slides[currentIndex].title}
                            </motion.span>

                            <motion.h2
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
                            >
                                {slides[currentIndex].subtitle}
                            </motion.h2>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.5 }}
                            >
                                <Link
                                    to="/ShopNow"
                                    className="inline-block bg-white text-black px-10 py-3 rounded-full font-bold uppercase text-sm tracking-widest hover:bg-[#e65540] hover:text-white transition-all duration-300 shadow-xl"
                                >
                                    Shop Now
                                </Link>
                            </motion.div>
                        </div>
                        <div className="absolute inset-0 bg-black/30 z-0"></div>
                    </motion.div>
                </AnimatePresence>

                <button onClick={prevSlide} className="absolute left-5 top-1/2 z-20 text-white hover:scale-110 transition-transform">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute right-5 top-1/2 z-20 text-white hover:scale-110 transition-transform">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <main className="w-full overflow-hidden">
                <CategorySection />
                <FeaturedProducts />
                <Lookbook />
                <BlogSection/>
            </main>
        </>
    );
}

export default Home;