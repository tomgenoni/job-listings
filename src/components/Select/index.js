import React from 'react';
import styles from './index.module.scss';

function Select({ onChange, value, data, id, name }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(e) => onChange(e.target.value, e)}
      id={id}
      name={name}
    >
      {data.map((item, i) => (
        <option value={item} key={i}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
