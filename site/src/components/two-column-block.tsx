import React from 'react';
import PortableTextBlock from "../utils/portable-text";

import * as styles from '../styles/twoColumnBlock.module.scss';

export default function TwoColumnBlock({ block, raw, index }: { block: any, raw: any, index: Number }) {
  const { image, heading, textPosition } = block;

  return (
    <div className={styles.twoColumnBlock}>
      <div className={`${styles.container} ${textPosition.toLowerCase() === "start" ? "" : styles.reverse}`}>
        <div className={styles.content}>
          <h3>{heading}</h3>
          <PortableTextBlock blocks={raw.description} />
        </div>

        <div
          className={styles.image}
          style={{                  
            backgroundImage: `url(${image?.asset.url})`
          }}
        />
      </div>
    </div>
  )
}
