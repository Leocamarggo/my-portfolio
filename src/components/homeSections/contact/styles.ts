import styled, { css } from 'styled-components'

export const ContactContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.middleGray};
    position: relative;

    &::before,
    &::after {
      content: '';
      display: block;
      height: 1px;
      background: linear-gradient(90deg, transparent, ${theme.colors.green}, transparent);
    }
  `}
`

export const ContactContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 80px;
    padding: 90px 0;
    align-items: center;

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      gap: 50px;
      padding: 70px 0;
      align-items: flex-start;
    }
  `}
`

export const LeftColumn = styled.div`
  ${({ theme }) => css`
    flex: 1;

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
    }
  `}
`

export const RightColumn = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;

    @media (max-width: ${theme.breakPoints.tablet}) {
      width: 100%;
    }
  `}
`

export const SectionTag = styled.span`
  ${({ theme }) => css`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${theme.colors.green};
    display: block;
    margin-bottom: 16px;
  `}
`

export const Headline = styled.h2`
  ${({ theme }) => css`
    font-size: 2.8rem;
    font-weight: bold;
    line-height: 1.2;
    letter-spacing: 1px;
    color: ${theme.colors.white};
    margin-bottom: 16px;
    max-width: 600px;

    > span {
      color: ${theme.colors.green};
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      font-size: 2.2rem;
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 1.8rem;
    }
  `}
`

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: 15px;
    line-height: 1.7;
    color: ${theme.colors.textMuted};
    max-width: 480px;
    margin-bottom: 60px;
  `}
`

export const CardsRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

interface ISocialCardProps {
  accentColor: string
}

export const SocialCard = styled.a<ISocialCardProps>`
  ${({ theme, accentColor }) => css`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px 24px;
    border-radius: 12px;
    background: ${theme.colors.darkGray};
    border: 1px solid rgba(255, 255, 255, 0.05);
    text-decoration: none;
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 3px;
      background: ${accentColor};
      border-radius: 12px 0 0 12px;
      opacity: 0;
      transition: opacity 0.35s ease;
    }

    &:hover {
      border-color: ${accentColor}40;
      box-shadow: 0 8px 32px ${accentColor}20, 0 2px 8px rgba(0, 0, 0, 0.4);
      transform: translateX(6px);

      &::before {
        opacity: 1;
      }
    }
  `}
`

export const CardIconWrapper = styled.div<ISocialCardProps>`
  ${({ accentColor }) => css`
    width: 46px;
    height: 46px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${accentColor}18;
    border: 1px solid ${accentColor}30;
    flex-shrink: 0;
    transition: all 0.35s ease;

    > i {
      font-size: 20px;
      color: ${accentColor};
    }

    ${SocialCard}:hover & {
      background: ${accentColor}28;
      border-color: ${accentColor}60;
    }
  `}
`

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`

export const CardName = styled.span`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.5px;
    color: ${theme.colors.white};
  `}
`

export const CardHandle = styled.span`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.lightGray};
    letter-spacing: 0.3px;
  `}
`

export const CardArrow = styled.div`
  ${({ theme }) => css`
    flex-shrink: 0;
    transition: all 0.35s ease;
    color: ${theme.colors.lightGray};

    > i {
      font-size: 14px;
    }

    ${SocialCard}:hover & {
      transform: translateX(4px);
      color: ${theme.colors.green};
    }
  `}
`
