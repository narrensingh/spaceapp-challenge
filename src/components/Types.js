import React from 'react';
import './Types.css';
import typesheader from './images/typesheader.jpg';
import rexo2 from './images/exoplanet3.jpg';

const Types = () => {
  return (
    <div className="types">
      <div className="pg1">
        <div className="pg1__header">TYPES OF EXOPLANETS</div>
        <img src={typesheader} className="pg1__image" />
        <img src={rexo2} alt="" className="pg2__image" />
        <p className="pg1__content">
          <ol>
            <li> GAS GIANTS</li>
            <li> NEPTUNIAN PLANETS</li>
            <li> SUPER EARTHS</li>
            <li> TERRESTIAL PLANETS</li>
          </ol>
        </p>
      </div>
      <div className="pg2">
        <h2 className="pg2__header">GAS GAINTS :</h2>
        <p className="content">
          A gas giant is a large planet mostly composed of helium and/or
          hydrogen. These planets, like Jupiter and Saturn in our solar system,
          don’t have hard surfaces and instead have swirling gases above a solid
          core. Gas giant exoplanets can be much larger than Jupiter, and much
          closer to their stars than anything found in our solar system.
        </p>
        <div className="pg2__div1">
          <div className="pg2__div1__imgs">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg"
              alt="this photo by hubble telescope shows auroras on jupiter"
              className="pg2__div1__img1"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Saturn_Equinox_09212014.jpg/1589px-Saturn_Equinox_09212014.jpg"
              alt="saturn by cassini taken on oct 28 2016"
              className="pg2__div1__img2"
            />
          </div>
          <p className="content pg2__content">
            A gas giant is a large planet mostly composed of helium and/or
            hydrogen. These planets, like Jupiter and Saturn in our solar
            system, don’t have hard surfaces and instead have swirling gases
            above a solid core. Gas giant exoplanets can be much larger than
            Jupiter, and much closer to their stars than anything found in our
            solar system.Gas giants like Jupiter, yes, but orbiting so close to
            their stars that their temperatures soar into the thousands of
            degrees (Fahrenheit or Celsius). These large planets make such tight
            orbits that they cause a pronounced “wobble” in their stars, tugging
            their stellar hosts this way and that, and causing a measurable
            shift in the spectrum of light from the stars. That made hot
            Jupiters easier to detect in the early days of planet hunting using
            the radial velocity method.
          </p>
        </div>
      </div>
      <div className="pg3">
        <h1 className="pg3__header">
          HERE ARE SOME OF THE GAS GIANTS DETECTED OUTSIDE OF THE SOLAR SYSTEM :
        </h1>
        <h2 className="pg3__subheader">Kepler-7b :</h2>
        <p className="content">
          Kepler-7b is one of the first five exoplanets to be confirmed by
          NASA's Kepler spacecraft, and was confirmed in the first 33.5 days of
          Kepler's science operations. It orbits a star slightly hotter and
          significantly larger than the Sun that is expected to soon reach the
          end of the main sequence. Kepler-7b is a hot Jupiter that is about
          half the mass of Jupiter, but is nearly 1.5 times its size; at the
          time of its discovery, Kepler-7b was the second most diffuse planet
          known, surpassed only by WASP-17b. It orbits its host star every five
          days at a distance of approximately 0,06 AU (9.000.000 km or 5.592.340
          mi). Kepler-7b was announced at a meeting of the American Astronomical
          Society on January 4, 2010 .
          <b>
            It is the first extrasolar planet to have a crude map of cloud
            coverage.
          </b>
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/Exoplanet_Comparison_Kepler-7_b.png"
          alt=""
        />
      </div>
      <div className="pg4">
        <h2 className="pg4__subheader">TrES-1b :</h2>
        <p className="content">
          TrES-1b is an extrasolar planet approximately 523 light-years away in
          the constellation of Lyra (the Lyre). The planet's mass and radius
          indicate that it is a Jovian planet with a similar bulk composition to
          Jupiter. Unlike Jupiter, but similar to many other planets detected
          around other stars, TrES-1 is located very close to its star, and
          belongs to the class of planets known as hot Jupiters. The planet was
          discovered orbiting around GSC 02652-01324 (an orange dwarf star).
          TrES-1b was discovered by the Trans-Atlantic Exoplanet Survey by
          detecting the transit of the planet across its parent star using a
          4-inch-diameter (100 mm) telescope. The discovery was confirmed by the
          Keck Observatory using the radial velocity method, which allowed its
          mass to be determined.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d3/Exoplanet_Comparison_TrES-1_b.png"
          alt=""
        />
      </div>
      <div className="pg5">
        <h2 className="pg5__subheader">16 Cygni Bb or HD 186427 b :</h2>
        <p className="content">
          an extrasolar planet approximately 69 light-years (21 parsecs) away in
          the constellation of Cygnus. The planet was discovered orbiting the
          Sun-like star 16 Cygni B, one of two solar-mass (M☉) components of the
          triple star system 16 Cygni in 1996. It orbits its star once every 799
          days and was the first eccentric Jupiter and planet in a double star
          system to be discovered. The planet is abundant in lithium. It was
          discovered on 22nd october 1996.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/16_Cygni_B_b.png"
          alt=""
          className="pg5__img"
        />
      </div>
      <div className="pg6">
        <h2 className="pg6__subheader">Beta Pictoris b :</h2>
        <p className="content">
          an exoplanet orbiting the young debris disk A-type main sequence star
          Beta Pictoris located approximately 63 light-years (19.4 parsecs, or
          6×1014 km) away from Earth in the constellation of Pictor. It has a
          mass around 13 Jupiter masses and a radius around 46% larger than
          Jupiter's. It orbits at 9 AU from Beta Pictoris, which is about 3.5
          times farther than the orbit of Beta Pictoris c. It orbits close to
          the plane of the debris disk orbiting the star, with a low
          eccentricity and a period of 20–21 years.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Betapic_orbit_v2_reduced.gif"
          alt=""
          className="pg6__img"
        />
      </div>
      <div className="pg7">
        <h2 className="pg7__subheader">KELT 9-B :</h2>
        <p className="content">
          KELT-9b is an exoplanet and ultra-hot Jupiter that orbits the late
          B-type/early A-type star KELT-9, located about 670 light-years from
          Earth. Detected using the Kilodegree Extremely Little Telescope, the
          discovery of KELT-9b was announced in 2016. As of June 2017 ,
          <span> it is the hottest known exoplanet</span>.
        </p>
        <p className="content">
          KELT-9b is a relatively large giant planet at about 2.8 times the mass
          of Jupiter; however given that its radius is nearly twice that of
          Jupiter, its density is less than half that of it. Like many hot
          Jupiters, KELT-9b is tidally locked with its host star. The outer
          boundary of its atmosphere nearly reaches its Roche lobe, implying
          that the planet is experiencing rapid atmospheric escape driven by the
          extreme amount of radiation it receives from its host star. In 2020,
          atmospheric loss rate was measured to be equal to 18 - 68 Earth masses
          per billion years. The planet's elemental abundances remain largely
          unknown as of 2022, but a low carbon-to-oxygen ratio is strongly
          suspected.
        </p>
        <p className="content">
          The planet's elemental abundances remain largely unknown as of 2022,
          but a low carbon-to-oxygen ratio is strongly suspected.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/PIA21472_-_Hottest_Hot_Jupiter_Animation_%28Artist%27s_Concept%29.gif"
          alt=""
          className="pg7__img"
        />
      </div>
      <div className="pg8">
        <h1 className="pg8__header">NEPTUNIAN PLANETS</h1>
        <p className="content">
          - Neptunian exoplanets are similar in size to Neptune or Uranus in the
          Solar System. Neptunian exoplanets may have a mixture of interiors
          though all would be rocky with heavier metals at their cores.
          Neptunian planets typically have hydrogen.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Exo-Neptune_art.jpg/1200px-Exo-Neptune_art.jpg"
          alt=""
          className="pg8__img"
        />
      </div>
      <div className="pg9">
        <h2 className="pg9__subheader">HAT-P-11b(or Kepler-3b) :</h2>
        <p className="content">
          HAT-P-11b (or Kepler-3b) is an extrasolar planet orbiting the star
          HAT-P-11. It was discovered by the HATNet Project team in 2009 using
          the transit method, and submitted for publication on 2 January
          2009.This planet is located approximately 123 light-years (38 pc)
          distant from Earth. The HATNet Project team initially detected the
          transits of HAT-P-11b from analysis of 11470 images, taken in 2004 and
          2005, by the HAT-6 and HAT-9 telescopes. The planet was confirmed
          using 50 radial velocity measurements taken with the HIRES radial
          velocity spectrometer at W. M. Keck Observatory At the time of its
          discovery HAT-P-11b was the smallest radius transiting extrasolar
          planet discovered by a ground based transit search and was also one of
          three previously known transiting planets within the initial field of
          view of the Kepler spacecraft. There was a linear trend in the radial
          velocities indicating the possibility of another planet in the system.
          This planet, HAT-P-11c, was confirmed in 2018. On 24 September 2014,
          NASA reported that HAT-P-11b is the first Neptune-sized exoplanet
          known to have a relatively cloud-free atmosphere and, as well, the
          first time molecules, namely water vapor, of any kind have been found
          on such a relatively small exoplanet.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Neptune%27s_%28updated_color%29_compared_to_Exoplanet_HAT-P-11b.png"
          alt=""
          className="pg9__img"
        />
      </div>
      <div className="pg10">
        <h2 className="pg10__subheader">Gliese 436 b / Awohali</h2>

        <p className="content">
          Gliese 436 b /ˈɡliːzə/ (sometimes called GJ 436 b,[7] formally named
          Awohali[2]) is a Neptune-sized exoplanet orbiting the red dwarf Gliese
          436.[1] It was the first hot Neptune discovered with certainty (in
          2007) and was among the smallest-known transiting planets in mass and
          radius, until the much smaller Kepler exoplanet discoveries began
          circa 2010. In December 2013, NASA reported that clouds may have been
          detected in the atmosphere of GJ 436 b. In June 2015, scientists
          reported that the atmosphere of Awohali was evaporating,[25] resulting
          in a giant cloud around the planet and, due to radiation from the host
          star, a long trailing tail 14×106 km (9×106 mi) long.[26]
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/GJ436interior.jpg/1552px-GJ436interior.jpg"
          alt=""
          className="pg10__img1"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gliese_436_b.tiff/lossy-page1-1920px-Gliese_436_b.tiff.jpg"
          alt=""
          className="pg10__img2"
        />
      </div>
      <div className="pg11">
        <h2 className="pg11__subheader">OGLE-2005-BLG-390Lb</h2>
        <p className="content">
          (known sometimes as Hoth by NASA) is a super-Earth exoplanet orbiting
          OGLE-2005-BLG-390L, a star 21,500 ± 3,300 light-years (6,600 ± 1,000
          parsecs) from Earth near the center of the Milky Way, making it one of
          the most distant planets known.It was discovered by the method of
          gravitational microlensing. On January 25, 2006, Probing Lensing
          Anomalies NETwork/Robotic Telescope Network (PLANET/Robonet), Optical
          Gravitational Lensing Experiment (OGLE), and Microlensing Observations
          in Astrophysics (MOA) made a joint announcement of the discovery. The
          planet does not appear to meet conditions presumed necessary to
          support life.
        </p>
        <img
          className="pg11__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/ESO_OGLE-2005-BLG-390Lb.jpg/1542px-ESO_OGLE-2005-BLG-390Lb.jpg"
          alt=""
        />
      </div>
      <div className="pg12">
        <h1 className="pg12__header">SUPER EARTHS :</h1>
        <p className="content">
          A Super-Earth or super-terran is a type of exoplanet with a mass
          higher than Earth's, but substantially below those of the Solar
          System's ice giants, Uranus and Neptune, which are 14.5 and 17 times
          Earth's, respectively. The term "super-Earth" refers only to the mass
          of the planet, and so does not imply anything about the surface
          conditions or habitability. The alternative term "gas dwarfs" may be
          more accurate for those at the higher end of the mass scale, although
          "mini-Neptunes" is a more common term
        </p>
      </div>
      <div className="pg13">
        <h1 className="pg13__header">
          Some of the Super Earths discovered by NASA are as follows :
        </h1>
        <h2 className="pg13__subheader">Gliese 876 d:</h2>
        <p className="content">
          Gliese 876 d is an exoplanet 15.2 light-years (4.7 parsecs) away in
          the constellation of Aquarius. The planet was the third planet
          discovered orbiting the red dwarf Gliese 876, and is the innermost
          planet in the system. It was the lowest-mass known exoplanet apart
          from the pulsar planets orbiting PSR B1257+12 at the time of its
          discovery. Due to its low mass, it can be categorized as a
          super-Earth. Gliese 876 d was discovered by analysing changes in its
          star's radial velocity as a result of the planet's gravity. The radial
          velocity measurements were made by observing the Doppler shift in the
          star's spectral lines. At the time of discovery, Gliese 876 was known
          to host two extrasolar planets, designated Gliese 876 b and c(Both of
          which are gas giants), in a 2:1 orbital resonance. After the two
          planets were taken into account, the radial velocity still showed
          another period, at around two days. The planet, designated Gliese 876
          d, was announced on June 13, 2005 by a team led by Eugenio Rivera and
          was estimated to have a mass approximately 7.5 times that of Earth.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Artist%E2%80%99s_view_of_an_exoplanet_inspired_by_the_discovery_of_Gliese_876_d.jpg/580px-Artist%E2%80%99s_view_of_an_exoplanet_inspired_by_the_discovery_of_Gliese_876_d.jpg"
          alt=""
          className="pg13__img"
        />
      </div>
      <div className="pg14">
        <h2 className="pg14__subheader">PSR B1257+12 B or Poltergeist :</h2>
        <p className="content">
          alternatively designated PSR B1257+12 B, also named Poltergeist, is an
          extrasolar planet approximately 2,300 light-years away[3] in the
          constellation of Virgo. It was one of the first planets ever
          discovered outside the Solar System,[4][5] and is one of three pulsar
          planets known to be orbiting the pulsar Lich. Over four times as
          massive as the Earth, it circles the primary at a distance of 0.36 AU
          with an orbital period of approximately 66 days. Because it and
          Phobetor have very similar masses and orbit close to each other, they
          were expected to cause measurable perturbations in each other's
          orbits. Detecting such perturbations confirmed that the planets were
          real. Accurate masses of the two planets, as well as their
          inclinations, were calculated from how much the planets perturb each
          other.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/PSR_B1257%2B12_B.jpg"
          alt=""
          className="pg14__img"
        />
      </div>
    </div>
  );
};

export default Types;
