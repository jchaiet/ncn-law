import React, { useRef, useEffect, useState } from 'react';
import { useIsVisible } from '../hooks/useIsVisible';
import PortableText from "../utils/portable-text";

import Button from './button';

import * as styles from '../styles/cardGrid.module.scss';

const CardItem = ({ item, isInView, i }: {item: CardItem, isInView: boolean, i: number}) => {
  console.log(item)

  return (
    <div
      className={`${styles.item} ${isInView ? styles.show : styles.hide}`}
      style={{
        animationDelay: `${i * 0.3}s`
      }}
    >
      <div className={styles.content}>
        <div className={styles.heading}>{item.heading}</div>
        {item._rawDescription && <PortableText blocks={item._rawDescription} />}
      </div>

      {item?.internal?.metadata?.path?.current &&
        <div className={styles.cta}>
          <Button
            text={item.ctaText}
            destination={item.internal?.metadata?.path?.current}
            style={item.ctaStyle}
            icon={item.ctaIcon}
          />
        </div>
      }
    </div>
  )
}

export default function CardGrid({ block, raw }: { block: any, raw: any, index: Number }) {
  const [isInView, setIsInView] = useState(false);

  const { heading, items } = block;

  const gridRef = useRef<any>();

  const isVisible = useIsVisible(gridRef);

  useEffect(() => {
    if(isVisible) {
      setIsInView(true);
    }
  }, [isVisible])

  return (
    <div className={styles.cardGrid}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {raw.description && <PortableText blocks={raw.description} />}

      {items &&
        <div
          className={styles.flex}
          ref={gridRef}
        >
          {items?.map((item: CardItem, i: number) => {
            return (
              <CardItem
                key={item._key}
                item={item}
                isInView={isInView}
                i={i}
              />
            )
          })}
        </div>
      }

    </div>
  )
}
