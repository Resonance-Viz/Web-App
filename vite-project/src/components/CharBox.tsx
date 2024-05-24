import React from 'react';
import styles from './CharBox.module.css'; 

interface CharBoxProps {
  src: string;
}
//TODO: Integrate % with DB
const CharBox: React.FC<CharBoxProps> = ({ src }) => {
  return (
    <div className={styles.charBoxContainer}>
      <div className={styles.charBoxImageWrapper}>
        <div className={styles.imageBox} style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <div className={styles.charBoxTextWrapper}>
        100% 
      </div>
    </div>
  );
};

export default CharBox;
