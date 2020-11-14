import React from 'react';
import styles from './index.module.scss';

import { SelectTypes } from 'common/interfaces';

const Select: React.FC<SelectTypes> = ({ onChange, value, data, id, name }) => {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={(event): void => onChange(event.target.value, event)}
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
};

export default Select;
