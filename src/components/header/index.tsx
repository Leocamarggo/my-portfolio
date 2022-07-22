import * as T from './styles';
import { useState, useEffect } from 'react';

const itemsMenu = [
  {
    name: 'Quem sou'
  },
  {
    name: 'Projetos'
  },
  {
    name: 'Contato'
  }
];

const Header = () => {
  const [menuMobileIsOpen, setMobileIsOpen] = useState(false);

  useEffect(() => {
    menuMobileIsOpen ? (document.body.style.overflow = 'hidden') : null;

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuMobileIsOpen]);

  return (
    <T.Container>
      <T.DesktopMenu className="container">
        {itemsMenu.map(({ name }, i) => (
          <T.DesktopContent key={i}>
            <T.DesktopText>{name}</T.DesktopText>
          </T.DesktopContent>
        ))}
      </T.DesktopMenu>

      <T.MobileMenu>
        <T.MobileMenuButton
          onChange={() => setMobileIsOpen(!menuMobileIsOpen)}
          checked={menuMobileIsOpen}
        />
        <T.MobileMenuIcon>
          <span className="navicon"></span>
        </T.MobileMenuIcon>
        <T.MobileContent className="menuMobile">
          {itemsMenu.map(({ name }, i) => (
            <T.MobileText key={i} onClick={() => setMobileIsOpen(!menuMobileIsOpen)}>
              {name}
            </T.MobileText>
          ))}
        </T.MobileContent>
        <T.Background className="background" />
      </T.MobileMenu>
    </T.Container>
  );
};

export default Header;
