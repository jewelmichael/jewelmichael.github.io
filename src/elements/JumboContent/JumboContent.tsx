import React, { FC } from 'react';
import { JumboContentProps } from './JumboContentProps';
import styles from "./JumboContent.module.scss";

export const JumboContent: FC<JumboContentProps> = (props) => {
  return (
    <div className={styles.jumboContent}>
      <h1 className={styles.jumboContent_title}>{props.title}</h1>
      <p className={styles.jumboContent_content}>{props.description || props.children}</p>
    </div>
  );
};

export default JumboContent;