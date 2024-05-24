import React from 'react';
import styles from './CharBox.module.css'; 

interface ImageComponentProps {
  src: string;
}
//TODO: Replace static 100% text with character usage % retrieved from db
const CharBox: React.FC<ImageComponentProps> = ({ src }) => {
  return (
    <div className={styles.charBoxContainer}>
      <div className={styles.charBoxImageWrapper}>
        <img src={src} alt="Example" style={{ width: '100px', height: '100px' }} />
      </div>
      <div className={styles.charBoxTextWrapper}>
        100% 
      </div>
    </div>
  );
};

export default CharBox;
