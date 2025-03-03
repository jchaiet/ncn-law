import React, { useEffect, useState, useRef } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import * as styles from '../styles/header.module.scss';

const pages = [
  {
    id: 0,
    text: "Practice Areas",
    destination: "/practice-areas"
  },
  {
    id: 1,
    text: "Attorneys",
    destination: "/attorneys"
  },
  {
    id: 2,
    text: "Resources",
    destination: "/resources"
  }
]
export default function Header({ location }: { location: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`${styles.siteHeader} ${location.pathname === "/" ? styles.absolute : ""}`}>
      <div className={styles.logoContainer}>
        <Link
          to={"/"}
        >
          <StaticImage
            className={styles.logo}
            src="../images/ncn-logo.jpg"
            alt="Naness, Chaiet & Naness"
          />
        </Link>

        <button onClick={() => setIsMenuOpen(prevState => !prevState)} aria-label="Toggle mobile menu" className={`${styles.toggle} ${isMenuOpen ? styles.open : styles.closed}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`${styles.mainNav} ${isMenuOpen ? styles.open : styles.closed}`}>
        <ul>
          {pages.map(page => (
            <li key={page.id}>
              <Link to={page.destination}>{page.text}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`${styles.overlay} ${isMenuOpen ? styles.open : styles.closed}`} />
    </header>
  )
}