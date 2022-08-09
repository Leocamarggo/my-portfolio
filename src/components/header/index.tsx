import * as T from './styles';
import { useState, useEffect } from 'react';
import { IHeaderProps } from 'interfaces/header';

const Header = (itemsMenu: IHeaderProps[]) => {
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
        {itemsMenu.map(({ name, ref }, i) => (
          <T.DesktopContent onClick={() => ref.current?.scrollIntoView()} key={i}>
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
          {itemsMenu.map(({ name, ref }, i) => (
            <T.MobileText
              key={i}
              onClick={() => {
                setMobileIsOpen(!menuMobileIsOpen);
                ref.current?.scrollIntoView();
              }}>
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
