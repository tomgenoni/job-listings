import React from 'react';
import styles from './index.module.scss';

function Label({ text, htmlFor }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
}

export default Label;
