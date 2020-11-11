import React from 'react';
import styles from './index.module.scss';

export default function Job({ data }) {
  return (
    <ul>
      {data.map(({ title, offices, id }, i) => (
        <li key={i}>
          <div>
            {title}: {id}
          </div>
          <div>{(offices = offices.map((item) => item.name).join(', '))}</div>
        </li>
      ))}
    </ul>
  );
}
