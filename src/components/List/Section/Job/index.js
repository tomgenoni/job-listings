import React from 'react';
import styles from './index.module.scss';

const url = 'https://airtable.com/jobs';

function Job({ data }) {
  return (
    <ul className='grid grid-wide'>
      {data.map(({ title, offices, id }, i) => (
        <li key={i} className='col-6 m_col-4 mt6 m_mt8'>
          <a href={`${url}/${id}`} className={styles.job}>
            <div className='fw500 fs1 lh3 gray-600 mb2'>
              {(offices = offices.map((item) => item.name).join(', '))}
            </div>
            <div className='fw500 fs2 lh3 gray-800'>{title}</div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Job;
