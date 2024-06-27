import React, { useEffect, useState, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useIsVisible } from '../hooks/useIsVisible';
import PortableTextBlock from "../utils/portable-text";

import * as styles from '../styles/imageGrid.module.scss';

export default function ImageGrid({ block, raw }: { block: any, raw: any, index: Number }) {
  const [isInView, setIsInView] = useState(false);

  const { heading, images } = block;

  const gridRef = useRef<any>();
  const isVisible = useIsVisible(gridRef);

  useEffect(() => {
    if (isVisible) {
      setIsInView(true);
    }
  }, [isVisible])

  return (
    <div className={styles.imageGrid}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {raw.description && <PortableTextBlock blocks={raw.description} />}

      {images &&
        <div
          className={styles.grid}
          ref={gridRef}
        >
          {images?.map((image: Image, i: number) => {
            return (
              <React.Fragment key={image?._key}>
                <GatsbyImage
                  image={image.asset.gatsbyImageData}
                  alt="NCN"
                  className={`${styles.item} ${isInView ? styles.show : styles.hide}`}
                  imgClassName={styles.itemImage}
                  objectFit='contain'
                  style={{
                    animationDelay: `${i * 0.3}s`
                  }}
                />
              </React.Fragment>
            )
          })}
        </div>
      }

    </div>
  )
}
