import React from 'react';
import styles from './index.module.scss';

interface SelectProps {
  onChange: (value: string, event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  data: string[];
  id: string;
  name: string;
}

const Select: React.FC<SelectProps> = ({ onChange, value, data, id, name }) => {
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
