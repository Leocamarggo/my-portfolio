import styled, { css } from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
`

export const DesktopMenu = styled.ul`
  ${({ theme }) => css`
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;

    @media (max-width: ${theme.breakPoints.tablet}) {
      display: none;
    }
  `}
`

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

export const DesktopContent = styled.li`
  padding: 10px 16px;
`

export const DesktopText = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: 16px;
    cursor: pointer;
    position: relative;
    font-weight: normal;
    padding-bottom: 5px;
    letter-spacing: 0.5px;
    transition: color 0.3s ease;

    &:before,
    &:after {
      top: 0;
      left: 0;
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      transition: transform 0.4s ease;
      border-bottom: solid ${theme.colors.green};
    }

    &:before {
      transform: scaleX(0);
      border-width: 2px 0 2px 0;
    }

    &:after {
      transform: scaleY(0);
      border-width: 0 2px 0 2px;
    }

    &:hover {
      color: ${theme.colors.green};
    }

    &:hover:before,
    &:hover:after {
      transform: scale(1, 1);
    }
  `}
`

export const LangButton = styled.button`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.greenBorder};
    background: transparent;
    border-radius: 4px;
    padding: 5px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-left: 16px;
    transition: all 0.3s ease;

    &:hover {
      border-color: ${theme.colors.green};
      box-shadow: 0 0 10px ${theme.colors.greenGlow};
    }
  `}
`

export const MobileLangButton = styled(LangButton)`
  margin: 0 0 30px 0;
  width: fit-content;
`

interface ILangOptionProps {
  active: boolean
}

export const LangOption = styled.span<ILangOptionProps>`
  ${({ theme, active }) => css`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: color 0.3s ease;
    color: ${active ? theme.colors.green : theme.colors.lightGray};
  `}
`

export const LangSep = styled.span`
  ${({ theme }) => css`
    font-size: 10px;
    color: ${theme.colors.gray};
  `}
`

export const MobileMenu = styled.div`
  ${({ theme }) => css`
    z-index: 5;
    width: 100%;
    height: 50px;
    display: none;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: ${theme.breakPoints.tablet}) {
      display: block;
    }
  `}
`

export const MobileContent = styled.ul`
  top: 0;
  left: 0;
  z-index: 5;
  width: 280px;
  height: 100vh;
  padding: 50px 35px 30px;
  position: absolute;
  list-style-type: none;
  background: transparent;
  transform-origin: 0% 0%;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transform: translate(-110%, 0);
  -webkit-font-smoothing: antialiased;
`

export const MobileText = styled.li`
  ${({ theme }) => css`
    margin: 36px 0;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${theme.colors.white};
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.green};
    }
  `}
`

export const MobileMenuButton = styled.input.attrs(() => ({
  type: 'checkbox',
  id: 'menu-btn',
}))`
  display: none;
  &:checked ~ .menuMobile {
    transform: none;
  }
  &:checked ~ .background {
    transform: none;
  }
  &:checked ~ label .navicon {
    background: transparent;
  }
  &:checked ~ label .navicon:before {
    transform: rotate(-45deg);
    width: 30px !important;
  }
  &:checked ~ label .navicon:after {
    transform: rotate(45deg);
  }
  &:checked ~ label:not(.steps) .navicon:before {
    top: 0;
  }
  &:checked ~ label:not(.steps) .navicon:after {
    top: 0;
  }
`

export const MobileMenuIcon = styled.label.attrs(() => ({
  htmlFor: 'menu-btn',
}))`
  ${({ theme }) => css`
    z-index: 6;
    float: right;
    cursor: pointer;
    user-select: none;
    position: relative;
    padding: 15px 25px 10px 30px;

    > span {
      height: 2px;
      width: 15px;
      display: block;
      background: ${theme.colors.white};
      position: relative;
      transition: background 0.2s ease-out;

      &:before {
        right: 0;
        top: 10px;
        content: '';
        width: 20px;
        height: 100%;
        display: block;
        background: ${theme.colors.white};
        position: absolute;
        transition: all 0.2s ease-out;
      }

      &:after {
        right: 0;
        top: -10px;
        content: '';
        width: 30px;
        height: 100%;
        display: block;
        background: ${theme.colors.white};
        position: absolute;
        transition: all 0.2s ease-out;
      }
    }
  `}
`

export const Background = styled.div`
  ${({ theme }) => css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 100vh;
    position: fixed;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    transform: translate(0, -250%);
    background: linear-gradient(135deg, ${theme.colors.greenDim} 0%, rgba(0, 0, 0, 0.92) 40%);
    backdrop-filter: blur(10px);
  `}
`
