import React from 'react';
import PortableTextBlock from "../utils/portable-text";

import * as styles from '../styles/banner.module.scss';

export default function Banner({ block, raw }: { block: any, raw: any, index: Number }) {
  const { theme, heading } = block;

  return (
    <div className={`${styles.banner} ${styles[theme]}`}>
      <div className={styles.container}>
        {heading && <div className={styles.heading}>{heading}</div>}
        {raw.description && <PortableTextBlock blocks={raw.description} />}
      </div>
    </div>
  )
}
