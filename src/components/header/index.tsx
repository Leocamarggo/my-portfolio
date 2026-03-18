import React from 'react';
import * as T from './styles';
import { useState } from 'react';
import { IHeaderProps } from 'interfaces/header';
import { useLanguage } from 'contexts/LanguageContext';

const Header = (itemsMenu: IHeaderProps[]) => {
  const { language, toggleLanguage } = useLanguage();
  const [menuMobileIsOpen, setMobileIsOpen] = useState(false);

  const handleMobileItemClick = (ref: React.RefObject<HTMLDivElement>) => {
    setMobileIsOpen(false);
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <T.Container>
      <T.DesktopMenu className="container">
        <T.NavItems>
          {itemsMenu.map(({ name, ref }, i) => (
            <T.DesktopContent onClick={() => ref.current?.scrollIntoView({ behavior: 'smooth' })} key={i}>
              <T.DesktopText>{name}</T.DesktopText>
            </T.DesktopContent>
          ))}
          <T.LangButton onClick={toggleLanguage}>
            <T.LangOption active={language === 'pt-BR'}>PT</T.LangOption>
            <T.LangSep>|</T.LangSep>
            <T.LangOption active={language === 'en-US'}>EN</T.LangOption>
          </T.LangButton>
        </T.NavItems>
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
          <T.MobileLangButton onClick={toggleLanguage}>
            <T.LangOption active={language === 'pt-BR'}>PT</T.LangOption>
            <T.LangSep>|</T.LangSep>
            <T.LangOption active={language === 'en-US'}>EN</T.LangOption>
          </T.MobileLangButton>
          {itemsMenu.map(({ name, ref }, i) => (
            <T.MobileText
              key={i}
              onClick={() => handleMobileItemClick(ref as React.RefObject<HTMLDivElement>)}>
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
