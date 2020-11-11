import React from 'react';
import styles from './index.module.scss';

export default function Select({ onChange, value, data }) {
  return (
    <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value, e)}>
      {data.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  );
}
