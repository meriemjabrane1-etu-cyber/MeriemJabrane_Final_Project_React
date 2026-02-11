import React, { useEffect, useRef, useState } from 'react';

function Home(props) { 
    const images = [
  "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
  "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
  "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
  "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  // Autoplay loop every 3s
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);
    return (
        <div className="relative w-full overflow-hidden">
      {/* Carousel slides */}
      <div className="flex transition-transform duration-700"
           style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, idx) => (
          <div key={idx} className="carousel-item w-full flex-shrink-0">
            <img src={img} className="w-full rounded-xl" alt={`slide-${idx}`} />
          </div>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`btn btn-xs ${idx === current ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setCurrent(idx)}
          >
            
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
    );
}

export default Home;