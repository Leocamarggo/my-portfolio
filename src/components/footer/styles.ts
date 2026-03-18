import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  ${({ theme }) => css`
    min-height: 10vh;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, ${theme.colors.green}, transparent);
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      min-height: 15vh;
    }
  `}
`

export const FooterContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;

    @media (max-width: ${theme.breakPoints.mobile}) {
      flex-direction: column;
    }
  `}
`

export const LinksContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    gap: 20px;

    @media (max-width: ${theme.breakPoints.mobile}) {
      width: 100%;
      margin: 20px 0;
      justify-content: center;
    }
  `}
`

export const LinkIcon = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.08);
    transition: all 0.35s ease;

    > i {
      cursor: pointer;
      font-size: 18px;
      transition: all 0.35s ease;
      color: ${theme.colors.lightGray};
    }

    &:hover {
      border-color: ${theme.colors.green};
      box-shadow: 0 0 14px ${theme.colors.greenGlow};
      transform: translateY(-3px);

      > i {
        color: ${theme.colors.green};
      }
    }
  `}
`

export const CopyrightContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-end;
    flex: 1;

    @media (max-width: ${theme.breakPoints.mobile}) {
      width: 100%;
      justify-content: center;
      margin-bottom: 20px;
    }
  `}
`

export const CopyrightText = styled.span`
  ${({ theme }) => css`
    font-size: 14px;
    letter-spacing: 1px;
    color: ${theme.colors.lightGray};

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 12px;
    }
  `}
`
