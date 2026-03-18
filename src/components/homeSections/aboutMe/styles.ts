import styled, { css } from 'styled-components'

export const AboutMeContainer = styled.div`
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

export const AboutMeContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 80px;
    padding: 90px 0;
    align-items: flex-start;

    @media (max-width: ${theme.breakPoints.tablet}) {
      flex-direction: column;
      gap: 60px;
      padding: 70px 0;
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

export const TitleAboutMe = styled.h2`
  ${({ theme }) => css`
    font-size: 2.4rem;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 1.2;
    color: ${theme.colors.white};
    margin-bottom: 28px;

    > span {
      color: ${theme.colors.green};
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 1.8rem;
    }
  `}
`

export const BioText = styled.p`
  ${({ theme }) => css`
    font-size: 15px;
    line-height: 1.9;
    color: ${theme.colors.textMuted};
    padding-left: 16px;
    border-left: 2px solid ${theme.colors.green};
  `}
`

export const HighlightsRow = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 24px;
    margin-top: 40px;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakPoints.mobile}) {
      gap: 16px;
    }
  `}
`

export const HighlightCard = styled.div`
  ${({ theme }) => css`
    flex: 1;
    min-width: 90px;
    padding: 18px 16px;
    border-radius: 8px;
    text-align: center;
    background: ${theme.colors.darkGray};
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;

    &:hover {
      border-color: ${theme.colors.greenBorder};
      box-shadow: 0 0 14px ${theme.colors.greenGlow};
      transform: translateY(-3px);
    }
  `}
`

export const HighlightNumber = styled.span`
  ${({ theme }) => css`
    display: block;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${theme.colors.green};
    line-height: 1;
    margin-bottom: 6px;
  `}
`

export const HighlightLabel = styled.span`
  ${({ theme }) => css`
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${theme.colors.lightGray};
  `}
`

export const SkillsTitle = styled.p`
  ${({ theme }) => css`
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: ${theme.colors.green};
    margin-bottom: 24px;
  `}
`

export const CardsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    @media (max-width: ${theme.breakPoints.desktop}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`
