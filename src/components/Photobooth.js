// src/components/Photobooth.js
import React from 'react';
import './Photobooth.css';
import photobooth1 from '../assets/images/photobooth1.jpg';
import photobooth2 from '../assets/images/photobooth2.jpg';
import photobooth3 from '../assets/images/photobooth3.jpg';

const images = [
  photobooth1,
  photobooth2,
  photobooth3,
  // Add the rest of your images here
];

const Photobooth = () => {
  return (
    <div className="photobooth">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image} alt={`Sample ${index}`} />
        </div>
      ))}
    </div>
  );
  
};

export default Photobooth;
