import React from 'react';
import styles from './CharBox.module.css'; 

interface CharBoxProps {
  src: string;
  usage: string;
}

const CharBox: React.FC<CharBoxProps> = ({ src, usage }) => {
  return (
    <div className={styles.charBoxContainer}>
      <div className={styles.charBoxImageWrapper}>
        <div className={styles.imageBox} style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <div className={styles.charBoxTextWrapper}>
        {usage}
      </div>
    </div>
  );
};

export default CharBox;
