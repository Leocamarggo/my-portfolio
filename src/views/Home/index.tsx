import * as T from './styles';
import { useRef } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import { options } from './particlesOptions';
import { IHeaderProps } from 'interfaces/header';
import { AboutMe, Projects, Contact, Header, Footer } from 'components';

const HomePage = () => {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const ItemsHeader: IHeaderProps[] = [
    {
      name: 'Quem sou',
      ref: aboutRef
    },
    {
      name: 'Projetos',
      ref: projectsRef
    },
    {
      name: 'Contato',
      ref: contactRef
    }
  ];

  return (
    <>
      {Header(ItemsHeader)}

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
          <T.SeeMoreButton
            onClick={() => {
              aboutRef.current?.scrollIntoView();
            }}>
            Ver mais
          </T.SeeMoreButton>
        </T.Presentation>

        <T.Illustration className="col-6">
          <img src="/assets/images/illustration.png" alt="Illustração de Homem programando" />
        </T.Illustration>
      </T.IntroductionContainer>

      <AboutMe reference={aboutRef} />

      <Projects reference={projectsRef} />

      <Contact reference={contactRef} />

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
