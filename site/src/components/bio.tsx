import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableTextBlock from '../utils/portable-text';
import * as styles from '../styles/bio.module.scss';

export default function Bio({ block, raw, index }: { block: any, raw: any, index: Number }) {

  const { name, position, image } = block;

  return (
    <section className={styles.bio}>
      <div className={styles.container}>
        <div className={styles.heading}>
          {image &&
            <div className={styles.image}>
              <GatsbyImage
                image={image.asset.gatsbyImageData}
                alt={name}
                className={styles.itemImage}
                objectFit='contain'
              />
            </div>
          }

          <div className={styles.info}>
            {name && <h1>{name}</h1>}
            {position && <p>{position}</p>}
          </div>
        </div>
        <div className={styles.details}>
          <PortableTextBlock blocks={raw.details} />
        </div>
      </div>
    </section>
  )
}
