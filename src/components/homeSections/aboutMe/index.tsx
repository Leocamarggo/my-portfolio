import * as T from './styles';
import { about, technologies } from './texts';
import CardTechnologies from './cardTechnologies';

const AboutMe = () => {
  return (
    <T.AboutMeContainer>
      <T.AboutMeContent className="container">
        <T.TextAndTechsColumn className="col-6">
          <div>
            <T.TitleAboutText>Quem sou</T.TitleAboutText>
            <T.ParagraphAbout dangerouslySetInnerHTML={{ __html: about }}></T.ParagraphAbout>
          </div>
          <T.TechnologiesContainer>
            <T.TitleKnowledge>Conhecimentos</T.TitleKnowledge>
            <T.CardsContainer>
              {technologies.map((item, key) => {
                return <CardTechnologies key={key} name={item.name} image={item.icon} />;
              })}
            </T.CardsContainer>
          </T.TechnologiesContainer>
        </T.TextAndTechsColumn>

        <T.MyImageColumn className="col-6">
          <img src="/assets/images/me.png" alt="Eu - Leonardo Camargo" />
        </T.MyImageColumn>
      </T.AboutMeContent>
    </T.AboutMeContainer>
  );
};

export default AboutMe;
