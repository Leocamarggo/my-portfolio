import * as S from './styles';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { options } from '../Home/particlesOptions';

const InMaintenance = () => {
  return (
    <S.Container>
      <h1>SITE EM MANUTENÇÃO 😉</h1>
      <p>Logo logo ta de volta...</p>
      <Particles
        id="tsparticles"
        options={options}
        init={async (main) => {
          await loadFull(main);
        }}
      />
    </S.Container>
  );
};

export default InMaintenance;
