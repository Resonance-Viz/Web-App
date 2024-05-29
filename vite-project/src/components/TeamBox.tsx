import React from 'react';
import styles from './CharBox.module.css'; 


const TeamBox: React.FC = (data: object[]) => {
  return (
    <div className={styles.teamBoxContainer}>
      {data.map(({data.image, data.usage}) => (
        <div className={styles.teamBoxImageWrapper}>
          <div className={styles.imageBox} style={{ backgroundImage: `url(${image})` }}></div>
        </div>
      ))}
      <div className={styles.teamBoxTextWrapper}>
        {usage}
      </div>
    </div>
  );
};


export default TeamBox
