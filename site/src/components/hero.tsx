import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import PortableText from "../utils/portable-text";

import * as styles from '../styles/hero.module.scss';

export default function Hero({ block, raw }: { block: any, raw: any, index: Number }) {
  const { image, heading, includeLogo } = block;

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: `url(${image?.asset.url})`
      }}
    >
      <div className={styles.container}>
        <div className={`${styles.heading} ${includeLogo ? styles.withLogo : styles.noLogo}`}>
          {includeLogo &&
            <StaticImage
              className={styles.logo}
              src="../images/ncn-logo.jpg"
              alt="Naness, Chaiet & Naness"
            />
          }
          {heading && <h1>{heading}</h1>}
          <PortableText blocks={raw.description} />
        </div>
      </div>
    </section>
  )
}
