import React from 'react';
import { motion } from 'framer-motion'; 


const BlogSection = () => {
    const blogs = [
        {
            title: "Black Friday Guide: Best Sales & Discount Codes",
            // img: imges.Blog?.BlogA,
            author: "fashe-theme Admin",
            date: "Dec 28, 2017",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vultuate nec cursus ante."
        },
        {
            title: "The White Sneakers Nearly Every Fashion Girls Own",
            // img: imges.Blog?.BlogB,
           
            author: "fashe-theme Admin",
            date: "Dec 28, 2017",
            desc: "Duis ut velit gravida nibh bibendum commodo. Suspendisse pellentesque mattis augue id euismod."
        },
        {
            title: "New York SS 2018 Street Style: By Annina Mislin",
            // img: imges.Blog?.BlogC,
            author: "fashe-theme Admin",
            date: "Dec 28, 2017",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vultuate nec cursus ante."
        }
    ]

    return (
        <section className="py-20 bg-white">
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-black text-center mb-12 uppercase tracking-widest"
            >
                Our Blog
            </motion.h2>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                {blogs.map((post, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group cursor-pointer"
                    >

                        <div className="overflow-hidden mb-5">
                            {/* <img 
                                src={post.img || "https://via.placeholder.com/400x250"} 
                                alt={post.title} 
                                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                            /> */}
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-[#e65540] transition-colors line-clamp-2">
                            {post.title}
                        </h3>
                        
                        <p className="text-gray-400 text-[11px] mb-3 uppercase tracking-tighter">
                            by <span className="text-gray-600 font-medium">{post.author}</span> on {post.date}
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                            {post.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default BlogSection;