import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from "../utils/portable-text";

import * as styles from '../styles/bio.module.scss';

export default function Bio({ block, raw, index }: { block: any, raw: any, index: Number }) {

  const { name, position, image } = block;

  return (
    <div className={styles.bio}>
      <div>
        <div className={styles.details}>
          {name && <h1>{name}</h1>}
          {position && <p>{position}</p>}
        </div>

        {image &&
          <GatsbyImage
            image={image.asset.gatsbyImageData}
            alt={name}
            className={styles.itemImage}
            objectFit='contain'
          />
        }
      </div>
      <div
        className={styles.flex}
      >
        <PortableText blocks={raw.details} />
      </div>
    </div>
  )
}
