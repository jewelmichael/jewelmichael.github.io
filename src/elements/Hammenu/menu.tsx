import React, { useState } from 'react';
import styles from './menu.module.scss';

function Hammenu() {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className={`${styles.plate} ${styles.plate4} ${click ? styles.active : ''}`} onClick={() => setClick(!click)}>
      <svg className={`${styles.burger}`} version="1.1" height="100" width="100" viewBox="0 0 100 100">
        <path className={`${styles.line} ${styles.line1}`} d="M 50,35 H 30" />
        <path className={`${styles.line} ${styles.line2}`} d="M 50,35 H 70" />
        <path className={`${styles.line} ${styles.line3}`} d="M 50,50 H 30" />
        <path className={`${styles.line} ${styles.line4}`} d="M 50,50 H 70" />
        <path className={`${styles.line} ${styles.line5}`} d="M 50,65 H 30" />
        <path className={`${styles.line} ${styles.line6}`} d="M 50,65 H 70" />
      </svg>
      <svg className={`${styles.x}`} version="1.1" height="100" width="100" viewBox="0 0 100 100">
        <path className={`${styles.line}`} d="M 34,32 L 66,68" />
        <path className={`${styles.line}`} d="M 66,32 L 34,68" />
      </svg>
    </div>
  );
}

export default Hammenu;