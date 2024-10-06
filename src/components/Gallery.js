import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images1 = [
    'https://images-assets.nasa.gov/image/PIA20690/PIA20690~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://science.nasa.gov/wp-content/uploads/2023/04/hs-2015-44-b-xlarge_web-jpg.webp?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/04/hs-2016-32-a-print-crop-jpg.webp?w=1536&format=webp',
    'https://images-assets.nasa.gov/image/ACD20-0044-003_1/ACD20-0044-003_1~large.jpg?w=1920&h=1151&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA15258/PIA15258~large.jpg?w=1920&h=853&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA22082/PIA22082~orig.jpg?w=2048&h=1152&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA24372/PIA24372~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA21473/PIA21473~orig.jpg?w=2200&h=1700&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA22087/PIA22087~large.jpg?w=1920&h=1622&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e002172/GSFC_20171208_Archive_e002172~orig.jpg?w=1280&h=1024&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA22098/PIA22098~orig.jpg?w=1068&h=600&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA23689/PIA23689~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001417/GSFC_20171208_Archive_e001417~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000132/GSFC_20171208_Archive_e000132~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA23408/PIA23408~orig.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/PIA22069/PIA22069~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
    'https://images-assets.nasa.gov/image/ACD20-0044-001/ACD20-0044-001~large.jpg?w=1920&h=1080&fit=clip&crop=faces%2Cfocalpoint',
  ];
  const images2 = [
    'https://science.nasa.gov/wp-content/uploads/2023/09/Exoplanet_types-2.jpeg?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2020/10/the-lives-of-stars.webp?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2020/10/first-image-of-a-black-hole.webp?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/09/Drake_equation_illustration.jpeg?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/09/artists_concept_of_the_James_Webb_Space_Telescope.jpeg?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/09/Wasp-107b.jpeg?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/09/T__Pyle__TESS__NASAs_Goddard_Space_Flight_Center.jpeg?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/09/Spitzer_spacecraft_artists_concept.jpeg?w=1536&format=webp',
    'https://science.nasa.gov/wp-content/uploads/2023/09/Hubble_Space_Telescope.jpeg?w=1536&format=webp',
  ];
  return (
    <div className="gallery">
      <h1 className="gallery__header">Gallery</h1>
      <div className="gallery__images1">
        {images1.map((image) => {
          return <img src={image} className="gallery__image" />;
        })}
      </div>
      <div className="gallery__images2">
        {images2.map((image) => {
          return <img src={image} className="gallery__image" />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
