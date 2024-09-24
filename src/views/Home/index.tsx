import * as T from './styles';
import { useRef } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import { IHeaderProps } from 'interfaces/header';
import { options } from '../../utils/particlesOptions';
import { AboutMe, Projects, Contact, Header, Footer } from 'components';

const HomePage = () => {
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const ItemsHeader: IHeaderProps[] = [
    {
      name: 'About me',
      ref: aboutRef
    },
    {
      name: 'Projects',
      ref: projectsRef
    },
    {
      name: 'Contact',
      ref: contactRef
    }
  ];

  return (
    <>
      {Header(ItemsHeader)}

      <T.IntroductionContainer className="container">
        <T.Presentation className="col-6">
          <T.IAmTitle>Hi, i&apos;m</T.IAmTitle>
          <T.Name>Leonardo Camargo.</T.Name>
          <T.Profession>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('Software Engineer.').start();
              }}
            />
          </T.Profession>
          <T.SeeMoreButton
            onClick={() => {
              aboutRef.current?.scrollIntoView();
            }}>
            See more
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
