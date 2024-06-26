import React from 'react';
import { Link } from 'gatsby';
import { useIcon } from '../hooks/useIcon';

import * as styles from '../styles/button.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Button(props: Button) {
  let {
    text,
    destination,
    style,
    icon
  } = props;

  const btnIcon = useIcon(icon);

  return (
    <>
      {destination.includes("http") ?
        <a
          href={destination}
          className={`${styles.link} ${styles[style]}`} 
          target="_blank"
          rel="noopener noreferrer"
          aria-label={text}
        >
          {text}
          {btnIcon && <FontAwesomeIcon icon={btnIcon} />}
        </a>
        :
        <Link
          to={destination}
          className={`${styles.link} ${styles[style]}`}
        >
          {text}
          {btnIcon && <FontAwesomeIcon icon={btnIcon} />}
        </Link>
      }
    </>
  )
}
