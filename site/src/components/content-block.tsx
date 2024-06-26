import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from "../utils/portable-text";

import * as styles from '../styles/contentBlock.module.scss';

export default function ContentBlock({ block, raw, index }: { block: any, raw: any, index: Number }) {
  const { image, heading } = block;

  return (
    <section>
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        alt="NCN"
        className={`${styles.item}`}
        imgClassName={styles.itemImage}
      />
      <h1>{heading}</h1>
      <PortableText blocks={raw.description} />
    </section>
  )
}
