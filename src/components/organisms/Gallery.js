import React from 'react';
import DogPreview from '../../containers/molecules/DogPreview';
import Description from '../molecules/Description';
import './Gallery.css';

const Gallery = () => (
  <div className="gallery-container">
    <Description />
    <DogPreview />
  </div>
);

export default Gallery;
