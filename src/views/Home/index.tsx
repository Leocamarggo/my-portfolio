import * as T from './styles';
import { Header } from 'components';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { options } from './particlesOptions';

const HomePage = () => {
  return (
    <>
      <Header />

      <T.IntroductionContainer className="container">
        <T.Presentation className="col-6">
          <T.IAmTitle>Olá, eu sou</T.IAmTitle>
          <T.Name>Leonardo Camargo.</T.Name>
          <T.Profession>Desenvolvedor Front-end</T.Profession>
          <T.SeeMoreButton>Ver mais</T.SeeMoreButton>
        </T.Presentation>

        <T.Illustration className="col-6">
          <img src="/assets/images/illustration.png" alt="Illustração de Homem programando" />
        </T.Illustration>
      </T.IntroductionContainer>

      <Particles
        id="tsparticles"
        options={options}
        init={async (main) => {
          await loadFull(main);
        }}
      />
    </>
  );
};

export default HomePage;
