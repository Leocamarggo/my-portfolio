import styled, { css } from 'styled-components'

export const IntroductionContainer = styled.div`
  ${({ theme }) => css`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: ${theme.breakPoints.tablet}) {
      min-height: 80vh;
      padding: 40px 0;
    }
  `}
`

export const Presentation = styled.div`
  animation: fadeInUp 0.9s ease both;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${({ theme }) => css`
    @media (max-width: ${theme.breakPoints.tablet}) {
      align-items: center;
      text-align: center;
      width: 100% !important;
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      align-items: flex-start;
      text-align: left;
    }
  `}
`

export const IAmTitle = styled.p`
  ${({ theme }) => css`
    font-size: 20px;
    margin: 0 0 10px 2px;
    font-weight: normal;
    letter-spacing: 5px;
    text-transform: uppercase;
    color: ${theme.colors.green};
    animation: glowPulse 3s ease-in-out infinite;

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 14px;
    }
  `}
`

export const Name = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    font-size: 4.5rem;
    font-weight: bold;
    letter-spacing: 2px;
    color: ${theme.colors.white};
    text-shadow: 0 2px 30px rgba(2, 212, 99, 0.15);

    @media (max-width: ${theme.breakPoints.tablet}) {
      font-size: 3.2rem;
    }
    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 2.4rem !important;
    }
  `}
`

export const Profession = styled.p`
  ${({ theme }) => css`
    font-size: 22px;
    margin: 10px 0 0 2px;
    font-weight: normal;
    color: ${theme.colors.textMuted};
    letter-spacing: 1px;

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 17px !important;
    }
  `}
`

export const Divider = styled.div`
  ${({ theme }) => css`
    width: 60px;
    height: 3px;
    margin: 20px 0;
    border-radius: 2px;
    background: linear-gradient(90deg, ${theme.colors.green}, transparent);
  `}
`

export const SeeMoreButton = styled.button`
  ${({ theme }) => css`
    z-index: 1;
    font-size: 13px;
    font-weight: bold;
    margin-top: 30px;
    padding: 12px 50px;
    border-radius: 4px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    color: ${theme.colors.green};
    border: 2px solid ${theme.colors.green};
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${theme.colors.green};
      transform: translateX(-100%);
      transition: transform 0.35s ease;
      z-index: -1;
    }

    &:hover {
      color: ${theme.colors.darkGray};
      box-shadow: 0 0 22px ${theme.colors.greenGlow};
      letter-spacing: 3px;

      &::before {
        transform: translateX(0);
      }
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      font-size: 15px;
      padding: 12px 36px;
    }
  `}
`
