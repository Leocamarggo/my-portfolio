import * as T from './styles';

const links = [
  {
    url: 'https://github.com/Leocamarggo',
    icon: 'fa-brands fa-github'
  },
  {
    url: 'https://www.linkedin.com/in/leonardo-camargo-5a8163194/',
    icon: 'fa-brands fa-linkedin',
    class: 'mx-5'
  },
  {
    url: 'mailto:leonardo.camarggo@outlook.com/',
    icon: 'fa-solid fa-envelope'
  }
];

const Footer = () => {
  return (
    <T.FooterContainer>
      <T.FooterContent className="container">
        <T.LinksContainer className="col-6">
          {links.map((item, index) => {
            return (
              <T.LinkIcon
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={item.class && item.class}>
                <i className={item.icon}></i>
              </T.LinkIcon>
            );
          })}
        </T.LinksContainer>
        <T.CopyrightContainer className="col-6">
          <T.CopyrightText>Com 🤍 by Léo</T.CopyrightText>
        </T.CopyrightContainer>
      </T.FooterContent>
    </T.FooterContainer>
  );
};

export default Footer;
