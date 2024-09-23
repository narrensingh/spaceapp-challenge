import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Home = () => {
  return (
    <div className="home">
      <div className="home__first">
        <TypeAnimation
          sequence={[1000, 'All About Exoplanets.', 1000, 'Search For Life.']}
          wrapper="h1"
          speed={40}
          style={{
            color: 'white',
            position: 'absolute',
            top: '30%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 300,
            fontSize: '70px',
          }}
        />
        <TypeAnimation
          sequence={[6500, 'EXPLORE']}
          className="explore"
          style={{
            color: 'rgb(48,219,91)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 100,
            fontSize: '80px',
          }}
        />
      </div>
    </div>
  );
};

export default Home;
