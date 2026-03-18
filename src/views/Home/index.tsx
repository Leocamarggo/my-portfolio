import * as T from './styles';
import { useRef } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import Typewriter from 'typewriter-effect';
import { IHeaderProps } from 'interfaces/header';
import { options } from '../../utils/particlesOptions';
import { AboutMe, Projects, Contact, Header, Footer } from 'components';
import { useLanguage } from 'contexts/LanguageContext';

const HomePage = () => {
  const { t } = useLanguage();
  const aboutRef = useRef<null | HTMLDivElement>(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const ItemsHeader: IHeaderProps[] = [
    {
      name: t.header.about,
      ref: aboutRef,
    },
    {
      name: t.header.projects,
      ref: projectsRef,
    },
    {
      name: t.header.contact,
      ref: contactRef,
    },
  ];

  return (
    <>
      {Header(ItemsHeader)}

      <T.IntroductionContainer className="container">
        <T.Presentation>
          <T.IAmTitle>{t.hero.greeting}</T.IAmTitle>
          <T.Name>Leonardo Camargo.</T.Name>
          <T.Divider />
          <T.Profession>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(t.hero.profession).start();
              }}
              options={{ cursor: '|' }}
            />
          </T.Profession>
          <T.SeeMoreButton
            onClick={() => {
              aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
            }}>
            {t.hero.seeMore}
          </T.SeeMoreButton>
        </T.Presentation>
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
