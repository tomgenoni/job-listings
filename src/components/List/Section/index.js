import React from 'react';
import styles from './index.module.scss';
import Job from './Job/index';

export default function Section({ data }) {
  return (
    <div>
      {data.map(({ name, className, jobs }, i) => (
        <div key={i} className={className}>
          <div>{name}</div>
          <Job data={jobs} />
        </div>
      ))}
    </div>
  );
}
