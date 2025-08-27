import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useState } from 'react';
import Split from './views/split';
import Card from './views/card';
import Track from './views/track';
import Images from './views/images';
import Parallax from './views/parallax';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export default function Layout() {
  const [selected, setSelected] = useState('images');

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [selected]);

  return (
    <>
      <header className="header">
        <nav>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', width: '100%', overflowX: 'auto' }}>
            <li>
              <button onClick={() => setSelected('images')}>Images</button>
            </li>
            <li>
              <button onClick={() => setSelected('card')}>Card</button>
            </li>
            <li>
              <button onClick={() => setSelected('track')}>Track</button>
            </li>
            <li>
              <button onClick={() => setSelected('parallax')}>Clamp</button>
            </li>
            <li>
              <button onClick={() => setSelected('split')}>Split</button>
            </li>
          </ul>
        </nav>
      </header>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          {selected === 'images' && <Images />}
          {selected === 'card' && <Card />}
          {selected === 'track' && <Track />}
          {selected === 'parallax' && <Parallax />}
          {selected === 'split' && <Split />}
        </div>
      </div>
    </>
  );
}
