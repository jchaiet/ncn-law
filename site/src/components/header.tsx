import * as React from "react"
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
  },
  {
    id: 3,
    text: "Contact",
    destination: "/contact"
  }
]

const Header = ({ location }: { location: any }) => (
  <header className={`${styles.siteHeader} ${location.pathname === "/" ? styles.absolute : ""}`}>
    <div>
      <Link
        to={"/"}
      >
        <StaticImage
          className={styles.logo}
          src="../images/ncn-logo.jpg"
          alt="Naness, Chaiet & Naness"
        />
      </Link>
    </div>
    <nav>
      <ul>
        {pages.map(page => (
          <li key={page.id}>
            <Link to={page.destination}>{page.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
)

export default Header
