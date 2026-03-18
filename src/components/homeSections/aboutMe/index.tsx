import * as T from './styles';
import { technologies } from './texts';
import CardTechnologies from './cardTechnologies';
import { IRefProps } from 'interfaces/genericInterfaces';
import { useLanguage } from 'contexts/LanguageContext';

const AboutMe = ({ reference }: IRefProps) => {
  const { t } = useLanguage();

  const highlights = [
    { number: '6+', label: t.about.highlightYears },
    { number: '20+', label: t.about.highlightProjects },
    { number: '10+', label: t.about.highlightTech },
  ];

  return (
    <T.AboutMeContainer ref={reference}>
      <T.AboutMeContent className="container">
        <T.LeftColumn>
          <T.SectionTag>{`// ${t.about.sectionTag}`}</T.SectionTag>
          <T.TitleAboutMe dangerouslySetInnerHTML={{ __html: t.about.title }} />
          <T.BioText dangerouslySetInnerHTML={{ __html: t.about.bio }} />
          <T.HighlightsRow>
            {highlights.map((item, i) => (
              <T.HighlightCard key={i}>
                <T.HighlightNumber>{item.number}</T.HighlightNumber>
                <T.HighlightLabel>{item.label}</T.HighlightLabel>
              </T.HighlightCard>
            ))}
          </T.HighlightsRow>
        </T.LeftColumn>

        <T.RightColumn>
          <T.SkillsTitle>{`// ${t.about.skillsTitle}`}</T.SkillsTitle>
          <T.CardsContainer>
            {technologies.map((item, key) => (
              <CardTechnologies key={key} name={item.name} image={item.icon} />
            ))}
          </T.CardsContainer>
        </T.RightColumn>
      </T.AboutMeContent>
    </T.AboutMeContainer>
  );
};

export default AboutMe;
