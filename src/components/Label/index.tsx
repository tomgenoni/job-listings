import React from 'react';
import styles from './index.module.scss';

interface LabelProps {
  text: string;
  htmlFor: string;
}

const Label: React.FC<LabelProps> = ({ text, htmlFor }) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
};

export default Label;
