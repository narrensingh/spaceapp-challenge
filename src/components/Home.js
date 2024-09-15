import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import logo from './images/logo.jpeg';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';

function Home() {
  const [startTyping, setStartTyping] = useState(false); // To control typing in home__middle2
  const [zoomIn, setZoomIn] = useState(false); // To control the zoom effect
  const middle2Ref = useRef(null); // Ref for home__middle2 section

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartTyping(true); // Start typing when the section is in view
          setZoomIn(true); // Start the zoom effect when in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (middle2Ref.current) {
      observer.observe(middle2Ref.current);
    }

    return () => {
      if (middle2Ref.current) {
        observer.unobserve(middle2Ref.current);
      }
    };
  }, []);

  return (
    <div className="home">
      <div className="home__top">
        <div className="home__topLeft">
          <img className="home__topLeftLogo" src={logo} alt="logo" />
        </div>
        <div className="home__topRight">
          <Link
            to="section1"
            smooth={true}
            duration={1000}
            className="nav__link"
            style={{ color: 'white' }}
          >
            Home
          </Link>
          <Link
            to="section2"
            smooth={true}
            duration={1000}
            className="nav__link"
            style={{ color: 'white' }}
          >
            Overview
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="nav__link"
            style={{ color: 'white' }}
          >
            AboutUs
          </Link>
        </div>
      </div>
      <div className="home__sections">
        <div className="section home__middle1" id="section1">
          <TypeAnimation
            sequence={[1000, 'Exoplanets.']}
            wrapper="span"
            speed={40}
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

        {/* Section 2 with zoom-in effect */}
        <div
          className={`section home__middle2 ${zoomIn ? 'zoom-in' : ''}`}
          id="section2"
          ref={middle2Ref}
        >
          {startTyping && (
            <>
              <TypeAnimation
                sequence={[1000, 'Revolutionising Exoplanet Education.']}
                wrapper="span"
                speed={40}
                style={{
                  fontSize: '60px',
                  display: 'inline-block',
                  color: 'white',
                  position: 'absolute',
                  top: '30%',
                  left: '20%',
                }}
              />
              <TypeAnimation
                sequence={[
                  3500,
                  'We aim to bla bla bla.... should edit in future',
                ]}
                wrapper="span"
                speed={80}
                style={{
                  fontSize: '20px',
                  display: 'inline-block',
                  color: 'white',
                  position: 'absolute',
                  top: '50%',
                  left: '20%',
                  maxWidth: '500px',
                  lineHeight: '30px',
                }}
              />
            </>
          )}
        </div>

        <div className="AboutUs" id="about">
          AboutUs
        </div>
      </div>
    </div>
  );
}

export default Home;
