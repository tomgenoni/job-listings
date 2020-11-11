import React from 'react';
import styles from './index.module.scss';

export default function Label({ text }) {
  return <label className={styles.label}>{text}</label>;
}
