import React from 'react';
import './Find.css';
import exo2 from './images/exo2.jpg';
const Find = () => {
  return (
    <>
      <div className="find1">
        <h1 className="find1header">HOW DO WE FIND ?</h1>
        <img className="find1img" src={exo2} />
        <p className="findp1">
          For most of human history our understanding of how planets form and
          evolve was based on the eight planets in our solar system. But over
          the last 25 years, the discovery of more than
          <span> 5,600 exoplanets</span>, or planets outside our solar system,
          <span> changed all that</span>.
        </p>
      </div>
      <div className="find2">
        <h1 className="find2header">
          Most of us wonder about
          <span className="find2span"> how these exoplanets are detected</span>,
          here's a explanation of various methods used to detect exoplanets -
        </h1>
        <div className="method1 method">
          <h1 className="methodHeader">transit photometry :</h1>
          <p className="methodP">
            The transit method can be used to discover exoplanets. As a planet
            eclipses/transits its host star it will block a portion of the light
            from the star just like a solar eclipse where moon obstructs the
            path of solar eclipse.
          </p>
          <img
            src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/02/detecting_exoplanets_with_transits/19268778-1-eng-GB/Detecting_exoplanets_with_transits.jpg"
            alt="method1img"
            className="method1img"
          />
        </div>
      </div>
      <div className="find3">
        <div className="method2 method">
          <h1 className="methodHeader">astrometry :</h1>
          <p className="methodP">
            This technique involves measuring a star's coordinates in the sky
            and recording any deviations over time, so if an exoplanet is
            revolving around the star we can detect it's position.
          </p>
          <img
            src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/02/detecting_exoplanets_with_astrometry/19268741-1-eng-GB/Detecting_exoplanets_with_astrometry.jpg"
            alt="m2i"
            className="m2i"
          />
        </div>
      </div>
      <div className="find4">
        <div className="method3 method">
          <h1 className="methodHeader">direct imaging :</h1>
          <p className="methodP">
            this is the simplest technique where we just try to directly capture
            the image of the exoplanet and detect it's orbit,atmosphere and
            related stuff.It is difficult to directly capture the image as the
            planet revolves around the host star which is too bright to capture
            image of planet itself.
          </p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a2/HR_8799_Orbiting_Exoplanets.gif"
            alt="m3i"
            className="m3i"
          />
          <p className="imagedes">
            Four exoplanets of the HR 8799 system imaged by the W. M. Keck
            Observatory over the course of seven years. Motion is interpolated
            from annual observations.
          </p>
        </div>
      </div>
      <div className="find5">
        <div className="method4 method">
          <h1 className="methodHeader">Gravitational microlensing :</h1>
          <p className="methodP">
            According to Einstein's theory of general relativity, gravity bends
            light because it warps the fabric of space-time. using this theory
            we can tell if there is an object which is bending light due to it's
            gravity by looking at photo.
          </p>
          <img
            src="https://cdn.esahubble.org/archives/images/screen/heic1106c.jpg"
            alt="m3i"
            className="m3i"
          />
        </div>
      </div>
      <div className="find6">
        <div className="method4 method">
          <h1 className="methodHeader">
            doppler spectroscopy or radial velocity :
          </h1>
          <p className="methodP">
            Doppler spectroscopy (also known as the radial-velocity method, or
            colloquially, the wobble method) is an indirect method for finding
            extrasolar planets and brown dwarfs from radial-velocity
            measurements via observation of Doppler shifts in the spectrum of
            the planet's parent star. As of November 2022, about 19.5% of known
            extrasolar planets (1,018 of the total) have been discovered using
            Doppler spectroscopy.
          </p>
          <img
            src="https://www.universetoday.com/wp-content/uploads/2017/12/Radial-Velocity-Method-star-orbits-1024x878.png"
            alt="m3i"
            className="m3i"
          />
        </div>
      </div>
      <div className="find6">
        <div className="method4 method">
          <h1 className="methodHeader">transit spectrography :</h1>
          <p className="methodP">
            One of the best ways we have of studying the an exoplanet’s
            atmosphere is to combine the transit method with spectroscopy (we
            discuss spectroscopy in the velocimetry section above). When the
            planet is in transit, some starlight shines through the planet’s
            atmosphere. The different atoms and molecules in the planet’s
            atmosphere all leave specific signatures, like a fingerprint, in the
            light we receive on Earth. By carefully disentangling the planet’s
            signal from the star’s signal, we can determine the composition of
            the exoplanet’s atmosphere. This method is called transit
            spectroscopy.
          </p>
          <img
            src="https://science.nasa.gov/wp-content/uploads/2023/09/AWA_5_Diagram_980.jpeg?w=1280&format=webp"
            alt="m5i"
            className="m5i"
          />
        </div>
      </div>
    </>
  );
};

export default Find;
