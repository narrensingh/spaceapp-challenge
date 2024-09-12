import React from 'react';
import './Home.css';
import logo from './images/logo.jpeg';
import { TypeAnimation } from 'react-type-animation';
import '@google/model-viewer';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__topLeft">
          <img className="home__topLeftLogo" src={logo} alt="logo" />
        </div>
        <nav>
          <Link
            to="section1"
            smooth={true}
            duration={1000}
            className="nav__link"
            style={{ color: 'white' }}
          >
            Section 1
          </Link>
          <Link
            to="section2"
            smooth={true}
            duration={1000}
            className="nav__link"
            style={{ color: 'white' }}
          >
            Section 2
          </Link>
        </nav>
      </div>
      <div className="home__sections">
        <div className="section home__middle1" id="section1">
          <TypeAnimation
            sequence={[1000, 'Exoplanets.']}
            wrapper="span"
            speed={20}
            style={{
              fontSize: '96px',
              display: 'inline-block',
              color: 'white',
              position: 'absolute',
              top: '40%',
              left: '10%',
            }}
          />
          <TypeAnimation
            sequence={[
              2000,
              'An exoplanet is any planet beyond our solar system. Most of them orbit other stars, but some free-floating exoplanets, called rogue planets, are untethered to any star. We’ve confirmed more than 5,600 exoplanets out of the billions that we believe exist.',
            ]}
            wrapper="span"
            speed={80}
            style={{
              fontSize: '20px',
              display: 'inline-block',
              color: 'white',
              position: 'absolute',
              top: '60%',
              left: '10%',
              maxWidth: '500px',
              lineHeight: '30px',
            }}
          />
        </div>
        <div className="section home__middle1" id="section2">
          <TypeAnimation
            sequence={[1000, 'Exoplanets.']}
            wrapper="span"
            speed={20}
            style={{
              fontSize: '96px',
              display: 'inline-block',
              color: 'white',
              position: 'absolute',
              top: '40%',
              left: '10%',
            }}
          />
          <TypeAnimation
            sequence={[
              2000,
              'An exoplanet is any planet beyond our solar system. Most of them orbit other stars, but some free-floating exoplanets, called rogue planets, are untethered to any star. We’ve confirmed more than 5,600 exoplanets out of the billions that we believe exist.',
            ]}
            wrapper="span"
            speed={80}
            style={{
              fontSize: '20px',
              display: 'inline-block',
              color: 'white',
              position: 'absolute',
              top: '60%',
              left: '10%',
              maxWidth: '500px',
              lineHeight: '30px',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
