import React from 'react'
import PortableTextBlock from "../utils/portable-text";

import * as styles from '../styles/contact.module.scss';

export default function Contact({ block, raw }: { block: any, raw: any, index: Number }) {
  const { heading } = block;

  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.form}>
          {heading && <div className={styles.heading}>{heading}</div>}
          {raw.description && <PortableTextBlock blocks={raw.description} />}

          <form>
            <div className={styles.inputRow}>
              <label>Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.inputRow}>
              <label>Email</label>
              <input type="email" name="email" />
            </div>
          </form>
        </div>

        <div className={styles.info}>
          {raw.info && <PortableTextBlock blocks={raw.info} />}
        </div>
      </div>
    </div>
  )
}
