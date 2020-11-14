import React from 'react';
import styles from './index.module.scss';

import { LabelTypes } from 'common/interfaces';

const Label: React.FC<LabelTypes> = ({ text, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
