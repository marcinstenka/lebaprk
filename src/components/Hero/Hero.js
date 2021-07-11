import { useEffect, useState } from 'react';

import Logo from '../../assets/logo.png';
import Covid from '../../assets/hero-covid.png';
import Lead from '../../assets/lead.png';
import { Scene } from 'react-scrollmagic';
const Hero = ({ HeroRef }) => {
  const [duration, setDuration] = useState(0);
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      const height = document.querySelector('.hero-container').offsetHeight;
      setDuration(height);
    }, 100);
    return () => window.clearTimeout(timeout);
  }, []);
  return (
    <div className="hero-container" ref={HeroRef}>
      <Scene duration={duration} classToggle={['.nav-1', 'active']}>
        <div className="hero-logo">
          <img src={Logo} alt="Logo parku dinozaurów Łeba" />
        </div>
      </Scene>
      <div className="hero-covid">
        <img
          src={Covid}
          alt="Informacje o pracy parku podczas pandemii oraz możliwość zakupienia biletu online"
        />

        <h2 className="covid-button">KUP BILET ONLINE</h2>
      </div>
      <div className="hero-lead">
        <p className="lead-info">
          Wizyta u nas to niezwykła, fantastyczna przygoda w przeszłość, aż do
          epoki kredy. Tylko w Łebie w Parku Dinozaurów na 20ha spotkasz
          trójwymiarowe gady naturalnej wielkości.
        </p>
        <div className="lead-img">
          <img src={Lead} alt="Trasa pełna przygód!" />
        </div>
        <p className="lead-info">
          Pełna przygód i atrakcji trasa, niezapomniane widoki i przeżycia,
          które na zawsze pozostaną w pamięci małego człowieka. Fantastyczna
          przygoda edukacyjna dla małych i doskonała zabawa dla dużych
          miłośników największych gadów w historii.
        </p>
      </div>
    </div>
  );
};

export default Hero;
