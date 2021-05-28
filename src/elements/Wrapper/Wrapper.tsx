import React, { FC, useEffect, useState } from 'react';
import styles from "./Wrapper.module.scss";

export const Wrapper: FC = (props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [loading])

  return (
    <div className={`${styles.wrapper} ${!loading && styles.active}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
