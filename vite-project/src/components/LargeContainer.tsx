import { nanoid } from 'nanoid';
import { icons } from './images';
import CharBox from './CharBox';
import CharBox4 from './CharBox4';
import { StructuredData } from '../App';
import Grid from '@mui/material/Grid';
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
    <Box sx={{ maxWidth: { xs: 400, sm: 600, md: 800, lg: 1000, xl: 1200 } }} style={{ display: 'flex', justifyContent: 'center'}} bgcolor={'#1a1a1a'} borderRadius={5}>
      <Box sx={{ maxWidth: { xs: 400, sm: 600, md: 800, lg: 1000, xl: 1200 }, justifyContent: 'center' }}>
        <Grid container spacing={2}>
          {data.map((character: StructuredData) => {
            const imgSrc = icons[character.Name];
            const whole = character.Usage * 100;
            const percent = `${whole}%`;

            if (Rarities[character.Name] === 5) {
              return (
                <Grid item  key={nanoid()}>
                  <CharBox src={imgSrc} usage={percent} />
                </Grid>
              );
            } else if (Rarities[character.Name] === 4) {
              return (
                <Grid item  key={nanoid()}>
                  <CharBox4 src={imgSrc} usage={percent} />
                </Grid>
              );
            } else {
              return null;
            }
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default LargeContainer;
