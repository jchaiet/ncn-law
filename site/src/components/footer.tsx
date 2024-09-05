import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from "gatsby-plugin-image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPhone,
  faFax,
  faAt
} from '@fortawesome/free-solid-svg-icons';

import * as styles from '../styles/footer.module.scss';

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

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.address}>
            <StaticImage
              className={styles.logo}
              src="../images/ncn-logo.jpg"
              alt="Naness, Chaiet & Naness"
            />

            <div>
              <p>Naness Chaiet & Naness</p>
              <p>375 North Broadway, Suite 202</p>
              <p>Jericho, NY 11753</p>
            </div>
          </div>

          <div className={styles.contact}>
            <div className={styles.heading}>Get in touch</div>

            <a href="tel:5168274300">
              <FontAwesomeIcon icon={faPhone} />
              516.827.4300
            </a>

            <a href="tel:5168270202">
              <FontAwesomeIcon icon={faFax} />
              516.827.0202
            </a>

            <a href="mailto:info@ncnlaw.com">
              <FontAwesomeIcon icon={faAt} />
              info@ncnlaw.com
            </a>
          </div>

          <div>
            <div className={styles.heading}>Explore</div>
            <nav>
              <ul>
                {pages.map(page => (
                  <li key={page.id}>
                    <Link to={page.destination}>{page.text}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className={styles.copy}>
          Copyright &copy; {new Date().getFullYear()} Naness Chaiet & Naness. All Rights Reserved.
        </div>
      </div>


    </footer>
  )
}
