import { nanoid } from 'nanoid';
import { icons } from './images';
import CharBox from './CharBox';
import CharBox4 from './CharBox4';
import { StructuredData } from '../App';
import Box from '@mui/material/Box';

interface LargeContainerProps {
  data: StructuredData[];
}

const Rarities: { [key: string]: number } = {
  "Aalto": 4,
  "Baizhi": 4,
  "Calcharo": 5,
  "Chixia": 4,
  "Danjin": 4,
  "Encore": 5,
  "Jianxin": 5,
  "Jiyan": 5,
  "Lingyang": 5,
  "Mortefi": 4,
  "Rover": 5,
  "Sanhua": 4,
  "Taoqi": 4,
  "Verina": 5,
  "Yangyang": 4,
  "Yinlin": 5,
  "Yuanwu": 4,
};

function LargeContainer({ data }: LargeContainerProps) {
  return (
    <Box 
      sx={{ 
        paddingTop: '5%',
      }}
    >
      <Box sx={{ 
                bgcolor: '#1a1a1a',
                borderRadius: 5,
                display: 'flex', 
                flexWrap: 'wrap',
                p: { xs: 0, sm: 3, md: 5, lg: 12, xl: 12 },
                justifyContent: 'center',
                gap: { xs: 0, sm: 0, md: 1, lg: 12, xl: 12 }, // Responsive gap
      }}>
        {data.map((character: StructuredData) => {
          const imgSrc = icons[character.Name];
          const whole = character.Usage * 100;
          const percent = `${whole}%`;

          if (Rarities[character.Name] === 5) {
            return (
              <Box key={nanoid()}>
                <CharBox src={imgSrc} usage={percent} />
              </Box>
            );
          } else if (Rarities[character.Name] === 4) {
            return (
              <Box key={nanoid()}>
                <CharBox4 src={imgSrc} usage={percent} />
              </Box>
            );
          } else {
            return null;
          }
        })}
      </Box>
    </Box>
  );
}

export default LargeContainer;
