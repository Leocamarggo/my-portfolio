import * as T from './styles';
import { IRefProps } from 'interfaces/genericInterfaces';
import { useLanguage } from 'contexts/LanguageContext';

const socialLinks = [
  {
    id: 'linkedin',
    icon: 'fa-brands fa-linkedin-in',
    name: 'LinkedIn',
    handle: '/in/leonardo-camargo',
    url: 'https://www.linkedin.com/in/leonardo-camarggo/',
    color: '#0A66C2',
  },
  {
    id: 'github',
    icon: 'fa-brands fa-github',
    name: 'GitHub',
    handle: '@Leocamarggo',
    url: 'https://github.com/Leocamarggo',
    color: '#ffffff',
  },
  {
    id: 'email',
    icon: 'fa-solid fa-envelope',
    name: 'E-mail',
    handle: 'leonardo.camarggo@outlook.com',
    url: 'mailto:leonardo.camarggo@outlook.com',
    color: '#02d463',
  },
];

const Contact = ({ reference }: IRefProps) => {
  const { t } = useLanguage();

  return (
    <T.ContactContainer ref={reference}>
      <T.ContactContent className="container">
        <T.LeftColumn>
          <T.SectionTag>{`// ${t.contact.sectionTag}`}</T.SectionTag>
          <T.Headline dangerouslySetInnerHTML={{ __html: t.contact.headline }} />
          <T.Subtitle>{t.contact.subtitle}</T.Subtitle>
        </T.LeftColumn>

        <T.RightColumn>
          <T.CardsRow>
            {socialLinks.map((social) => (
              <T.SocialCard
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                accentColor={social.color}>
                <T.CardIconWrapper accentColor={social.color}>
                  <i className={social.icon}></i>
                </T.CardIconWrapper>
                <T.CardInfo>
                  <T.CardName>{social.name}</T.CardName>
                  <T.CardHandle>{social.handle}</T.CardHandle>
                </T.CardInfo>
                <T.CardArrow>
                  <i className="fa-solid fa-arrow-right"></i>
                </T.CardArrow>
              </T.SocialCard>
            ))}
          </T.CardsRow>
        </T.RightColumn>
      </T.ContactContent>
    </T.ContactContainer>
  );
};

export default Contact;
