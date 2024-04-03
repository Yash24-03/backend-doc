import React, { useState, useEffect } from 'react';
import { bannerImgOne, bannerImgThree, bannerImgTwo } from '../../assets/images';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [bannerImgOne, bannerImgTwo,bannerImgThree]; // Array of banner images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds (3000 milliseconds)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Banner ${index + 1}`}
          className={`w-full ${index === currentImageIndex ? 'block' : 'hidden'}`}
          style={{ height: 'auto' }} // Set height to 'auto'
        />
      ))}
    </div>
  );
};

export default Banner;