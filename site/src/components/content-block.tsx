import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableTextBlock from "../utils/portable-text";

import * as styles from '../styles/contentBlock.module.scss';

export default function ContentBlock({ block, raw, index }: { block: any, raw: any, index: Number }) {
  const { theme, orientation, heading } = block;

  return (
    <div className={`${styles.contentBlock} ${styles[theme]}`}>
      <div className={`${styles.container} ${orientation === "heading-left" ? styles.row : styles.column}`}>
        {heading && <div className={styles.heading}>{heading}</div>}

        <div className={styles.content}>
          <PortableTextBlock blocks={raw.description} />
        </div>
      </div>
    </div>
  )
}
