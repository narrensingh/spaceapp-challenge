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
          speed={20}
        />
      </div>
      <div className="home__second">
        <div className="home__secondTl">
          <h1>What Are Exoplanets ?</h1>
          <p>
            An exoplanet is any planet beyond our solar system. Most of them
            orbit other stars, but some free-floating exoplanets, called rogue
            planets, are untethered to any star. We’ve confirmed more than 5,600
            exoplanets out of the billions that we believe exist.
          </p>
        </div>
        <div className="home__secondBr">
          <h1>Whats The Closest?</h1>
          <p>
            The closest known exoplanet to Earth, Proxima Centauri b, is still
            about 4 light-years away
          </p>
        </div>
        <div className="home__secondTr">
          <h1>Is There Life Beyond Earth?</h1>
          <p>
            The big question, “Is there life beyond Earth?” has a catch: we
            don’t really know how to define life perfectly. But that’s okay—we
            just need to find clues in a distant planet’s atmosphere that
            suggest life, based on what we understand from Earth.
          </p>
        </div>
        <div className="home__secondBl">
          <h1>What is Universe?</h1>
          <p>
            The universe is everything. It includes all of space, and all the
            matter and energy that space contains. It even includes time itself
            and, of course, it includes you.
          </p>
        </div>
      </div>
      <div className="home__gallery">
        <h1 className="home__galleryHead">Get Started</h1>
        <div className="classes">
          <div className="classify box1">
            <h2>How We Find And Classify</h2>
            <span>→</span>
          </div>
          <div className="classify box2">
            <h2>Goals Of NASA's Exoplanet Exploration Program</h2>
            <span>→</span>
          </div>
          <div className="classify box3">
            <h2>Exoplanet Types</h2>
            <span>→</span>
          </div>
          <div className="classify box4">
            <h2>Other NASA's Resources</h2>
            <span>→</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
