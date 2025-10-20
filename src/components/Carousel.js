import { useState, useEffect } from 'react';

// I got the inspiration of the Carousel from a youtube video from "Code Complete"
const CarouselSlides = ({ data, interval = 3000 }) => {
  // store index of image
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // increase interval and then set back to 0 when the images are over
      setCurrent((prev) => (prev + 1) % data.length);
    }, interval);

    return () => clearInterval(timer); 
  }, [data.length, interval]);

  return (
    <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center bg-black">
      {/* define what my Carousel will take for data and map through that data */}
      {data.map((item, index) => (
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          /* only show the image where the index is at the others are hidden opacity-0 */
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselSlides;