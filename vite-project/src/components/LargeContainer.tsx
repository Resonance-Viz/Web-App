// File: LargeContainer.tsx
import { nanoid } from 'nanoid';
import { icons } from './images';
import CharBox from './CharBox';
import { StructuredData } from '../App';

interface LargeContainerProps {
  data: StructuredData[];
}

function LargeContainer({ data }: LargeContainerProps) {
  return (
    <div>
      {data.map((character: StructuredData) => {
        const imgSrc = icons[character.Name];
        const whole = character.Usage * 100;
        const percent = `${whole}%`;
        return (
          <CharBox key={nanoid()} src={imgSrc} usage={percent} />
        );
      })}
    </div>
  );
}

export default LargeContainer;
