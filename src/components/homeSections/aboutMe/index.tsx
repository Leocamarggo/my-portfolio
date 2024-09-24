import * as T from './styles';
import { about, technologies } from './texts';
import CardTechnologies from './cardTechnologies';
import { IRefProps } from 'interfaces/genericInterfaces';

const AboutMe = ({ reference }: IRefProps) => {
  return (
    <T.AboutMeContainer ref={reference}>
      <T.AboutMeContent className="container">
        <T.TextAndTechsColumn className="col-6">
          <div>
            <T.TitleRow>
              <T.TitleAboutMe>About me</T.TitleAboutMe>
            <T.LineTitle />
            </T.TitleRow>
            <T.ParagraphAbout dangerouslySetInnerHTML={{ __html: about }}></T.ParagraphAbout>
          </div>
          <T.TechnologiesContainer>
            <T.TitleKnowledge>My Skills</T.TitleKnowledge>
            <T.CardsContainer>
              {technologies.map((item, key) => {
                return <CardTechnologies key={key} name={item.name} image={item.icon} />;
              })}
            </T.CardsContainer>
          </T.TechnologiesContainer>
        </T.TextAndTechsColumn>
      </T.AboutMeContent>
    </T.AboutMeContainer>
  );
};

export default AboutMe;
