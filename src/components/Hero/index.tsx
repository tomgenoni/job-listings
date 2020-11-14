import React from 'react';
import styles from './index.module.scss';

function Hero() {
  return (
    <section className='mt9 m_mt11'>
      <div className='m_grid justify-between'>
        <div className='m_col-6'>
          <div className='fw-500 lh3 ls1 gray-600 ttu mb4'>Open Positions</div>
          <h1 className='fw-500 fs4 m_fs5 lh2 m_lh2 mb5 m_mb6'>
            Help us create the future of software
          </h1>
          <p className='gray-600 fs2 m_fs3 mb7 m_mb0'>
            The ability to make software opens up tremendous creative possibilities, and we want to
            empower people to bring these possibilities to life—no matter how ambitious. The good
            news is that creating software doesn’t have to mean writing code. What will you create?
          </p>
        </div>
        <div className={`m_col-5 ${styles.illuWrap}`}>
          <img
            src='img/open-positions.png'
            srcSet='img/open-positions.png 1x,img/open-positions@2x.png 2x'
            alt='Open positions illustration'
            className={`m_ph6 center ${styles.img} ${styles.static}`}
          />
          <img
            src='img/open-positions.gif'
            alt='Open positions animated illustration'
            className={`m_ph6 center ${styles.img} ${styles.animated}`}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
