import React, { useState, useEffect } from 'react';
import styles from './menu.module.scss';

function Hammenu() {
  const [count, setCount] = useState<boolean>(false);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className={`${styles.plate} ${styles.plate4} ${count ? styles.active : ''}`} onClick={() => setCount(!count)}>
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