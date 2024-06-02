import React from 'react';
import styles from './CharBox.module.css'; 
import { Box } from '@mui/material';

interface CharBoxProps {
  src: string;
  usage: string;
}

const CharBox: React.FC<CharBoxProps> = ({ src, usage }) => {
  return (
    <Box sx={{ transform: {xs:'scale(0.75)', sm:'scale(0.95)', md:'scale(1.0)', lg:'scale(1.25)'} }} className={styles.charBoxContainer}>
      <div className={styles.charBoxImageWrapper}>
        <div className={styles.imageBox} style={{ backgroundImage: `url(${src})` }}></div>
      </div>
      <div className={styles.charBoxTextWrapper}>
        {usage}
      </div>
    </Box>
  );
};

export default CharBox;
