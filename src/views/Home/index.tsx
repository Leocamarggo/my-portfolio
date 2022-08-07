import * as T from './styles';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import { options } from './particlesOptions';
import { AboutMe, Projects, Header, Footer } from 'components';

const HomePage = () => {
  return (
    <>
      <Header />

      <T.IntroductionContainer className="container">
        <T.Presentation className="col-6">
          <T.IAmTitle>Olá, eu sou</T.IAmTitle>
          <T.Name>Leonardo Camargo.</T.Name>
          <T.Profession>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Desenvolvedor Front-end.').start();
              }}
            />
          </T.Profession>
          <T.SeeMoreButton>Ver mais</T.SeeMoreButton>
        </T.Presentation>

        <T.Illustration className="col-6">
          <img src="/assets/images/illustration.png" alt="Illustração de Homem programando" />
        </T.Illustration>
      </T.IntroductionContainer>

      <AboutMe />

      <Projects />

      <Footer />

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
