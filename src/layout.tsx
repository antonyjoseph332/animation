import { NavLink, Outlet, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export default function Layout() {
  const { pathname } = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [pathname]);

  return (
    <>
      <header className="header">
        <nav>
          <ul>
             <li>
              <NavLink to="/">All</NavLink>
            </li>
            <li>
              <NavLink to="/image">Images</NavLink>
            </li>
            <li>
              <NavLink to="/card">Card</NavLink>
            </li>
            <li>
              <NavLink to="/track">Track</NavLink>
            </li>
            {/* <li>
              <NavLink to="/clamp">Clamp</NavLink>
            </li> */}
            <li>
              <NavLink to="/split">Split</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}
