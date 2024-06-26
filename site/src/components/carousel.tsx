import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import PortableText from "../utils/portable-text";
import { useIsVisible } from '../hooks/useIsVisible';

import * as styles from '../styles/carousel.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

const LinkItem = ({ item, isInView, i }: { item: LinkItem, isInView: boolean, i: number }) => {
  console.log(item)

  return (
    <>
      {item?.internal?.metadata?.path?.current.includes("http") ?
        <a
          href={item.internal?.metadata?.path?.current}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Link to ${item.heading}`}
          className={`${styles.item} ${isInView ? styles.show : styles.hide}`}
          style={{
            animationDelay: `${i * 0.3}s`
          }}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className={styles.content}>
            <div className={styles.heading}>{item.heading}</div>
          </div>
        </a>
        :
        <Link
          to={item.internal?.metadata?.path?.current}
          className={`${styles.item} ${isInView ? styles.show : styles.hide}`}
          style={{
            animationDelay: `${i * 0.3}s`
          }}
        >
          <div className={styles.icon}>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className={styles.content}>
            <div className={styles.heading}>{item.heading}</div>
          </div>
        </Link>
      }
    </>
  )
}

export default function Carousel({ block, raw }: { block: any, raw: any, index: Number }) {
  const [isInView, setIsInView] = useState(false);

  const { variation, heading, links, cards } = block;

  const items = links || cards || [];

  const carouselRef = useRef<any>();

  const isVisible = useIsVisible(carouselRef);

  useEffect(() => {
    if (isVisible) {
      setIsInView(true);
    }
  }, [isVisible])

  return (
    <div className={styles.carousel}>
      {heading && <div className={styles.heading}>{heading}</div>}
      {raw.description && <PortableText blocks={raw.description} />}

      {items &&
        <div
          className={styles.track}
          ref={carouselRef}
        >
          {items?.map((item: LinkItem | CardItem, i: number) => {
            return (
              <>
                {variation === 'link' &&
                  <LinkItem
                    key={item.heading}
                    item={item}
                    isInView={isInView}
                    i={i}
                  />
                }
              </>
            )
          })}
        </div>
      }

    </div>
  )
}
