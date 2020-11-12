import React from 'react';
import Job from './Job/index';

export default function Section({ data }) {
  return (
    <>
      {data.map(({ name, className, jobs }, i) => (
        <div key={i} className={`mb8 ${className}`}>
          <div className='flex items-center pb4 m_pb0 m_mt10'>
            <div className='mr3'>
              <img
                src={`/img/${className}.png`}
                srcSet={`/img/${className}.png 1x, /img/${className}@2x.png 2x`}
                width='40'
                height='40px'
                alt={`${name} icon`}
              />
            </div>
            <div className='fs3 lh3'>{name}</div>
          </div>
          <Job data={jobs} />
        </div>
      ))}
    </>
  );
}
