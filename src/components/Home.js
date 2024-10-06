import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import exobg from './images/types.png';

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
            top: '15%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight: 300,
            fontSize: '70px',
            zIndex: 200,
          }}
        />
        <h1 className="explore">EXPLORE</h1>
        <img src={exobg} alt="" className="exobg" />
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
          <Link to="/spaceapp-challenge/find">
            <div className="classify box1">
              <h2>Find</h2>
              <span>→</span>
            </div>
          </Link>
          <Link to="">
            <div className="classify box2">
              <h2>Goals</h2>
              <span>→</span>
            </div>
          </Link>
          <Link to="/spaceapp-challenge/types">
            <div className="classify box3">
              <h2>Types Of Exoplanets</h2>
              <span>→</span>
            </div>
          </Link>
          <Link to="/spaceapp-challenge/gallery">
            <div className="classify box4">
              <h2>Gallery</h2>
              <span>→</span>
            </div>
          </Link>
          <Link to="">
            <div className="classify box5">
              <h2>Quiz</h2>
              <p>Yet to be added :)</p>
              <span>→</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="aboutUs">
        <h2 className="aboutUs__header">About Us</h2>
        <p className="aboutUs__content">
          We are IITMStellars, a passionate team of innovators from the Indian
          Institute of Technology Madras, comprising
          <span> Narren Singh, Nuthan Reddy, Gaganram, and Vismay Shah</span> .
          United by our love for space exploration and cutting-edge technology,
          we’re competing in NASA’s [Space-app-challenge]. Our mission is to
          push the boundaries of innovation, solve real-world challenges, and
          contribute to the future of space science. Through collaboration and
          determination, we aim to make a stellar impact!
        </p>
      </div>
    </div>
  );
};

export default Home;
