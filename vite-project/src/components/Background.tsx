import React from 'react';
import background from '../assets/bg/T_Bgloadin1_UI.png';

const Background: React.FC = () => {
  return (
    <div style={styles.background}>
      <img src={background} alt="background" style={styles.image} />
    </div>
  );
};

const styles = {
  background: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    filter: 'saturate(90%) brightness(20%)',
  },
};

export default Background;
