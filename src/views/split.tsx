import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './split.css';

const images = [
  'https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg',
  'https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg',
  'https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg',
  'https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg',
  'https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg',
  'https://assets.codepen.io/756881/dawid-zawila-TN8inGqMH7k-unsplash.jpg',
];

export default function Split() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    const smoother = ScrollSmoother.create({
      wrapper: wrapperRef.current,
      content: contentRef.current,
      smooth: 2,
      speed: 3,
      effects: true,
    });
    smoother.effects('.hero__image-cont', {
      speed: () => gsap.utils.random(0.55, 0.85, 0.05),
    });
    gsap.to('.anim-swipe', {
      yPercent: 300,
      delay: 0.2,
      duration: 3,
      stagger: {
        from: 'random',
        each: 0.1,
      },
      ease: 'sine.out',
    });
    gsap.to('.hero__image-cont > img', {
      scale: 1.5,
      xPercent: 20,
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: '+=3000px',
        scrub: true,
      },
    });
    return () => {
      smoother.kill();
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div id="wrapper" style={{ position: 'absolute' }} ref={wrapperRef}>
      <div id="content" ref={contentRef}>
        <section className="hero">
          <div className="hero__inner constrain">
            {images.map((src, idx) => (
              <div className="hero__image-cont" key={idx}>
                <img src={src} alt="hero" />
                <div className="anim-swipe"></div>
              </div>
            ))}
          </div>
        </section>
        <section className="spacer"></section>
      </div>
      <img
        className="scroll"
        srcSet="https://img.icons8.com/glyph-neue/128/ffffff/circled-down-2.png 2x"
        alt="scroll down"
        loading="lazy"
      />
    </div>
  );
}
