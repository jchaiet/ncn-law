import React, { useEffect, useState, useRef } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PortableText from "../utils/portable-text";
import { useIsVisible } from '../hooks/useIsVisible'

import Button from './button';

import * as styles from '../styles/bioGrid.module.scss';

const BioItem = ({ item, isInView, i }: { item: BioItem, isInView: boolean, i: number }) => {
  return (
    <div
      key={item._key}
      className={`${styles.item} ${isInView ? styles.show : styles.hide}`}
      style={{
        animationDelay: `${i * 0.3}s`
      }}
    >
      {item.image &&
        <GatsbyImage
          image={item.image.asset.gatsbyImageData}
          alt={item.name}
          className={styles.itemImage}
          objectFit='contain'
        />
      }
      <div className={styles.details}>
        <p className={styles.name}>{item.name}</p>
        <p>{item.position}</p>
      </div>

      <div className={styles.cta}>
        <Button
          text={"View profile"}
          destination={item.internal?.metadata?.path?.current || '/'}
          style={"transparent"}
          icon={"arrow"}
        />
      </div>
    </div>
  )
}

export default function BioGrid({ block, raw, index }: { block: any, raw: any, index: Number }) {
  const [isInView, setIsInView] = useState(false);

  const { heading, items } = block;

  const gridRef = useRef<any>();
  const isVisible = useIsVisible(gridRef)

  useEffect(() => {
    if (isVisible) {
      setIsInView(true);
    }
  }, [isVisible])

  return (
    <div className={styles.bioGrid}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {raw.description && <PortableText blocks={raw.description} />}

      <div
        className={styles.flex}
        ref={gridRef}
      >
        {items?.map((item: BioItem, i: number) => (
          <BioItem
            key={item._key}
            item={item}
            isInView={isInView}
            i={i}
          />
        ))}
      </div>
    </div>
  )
}
