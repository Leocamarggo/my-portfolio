import styled, { css } from 'styled-components'

export const AboutMeContainer = styled.div`
    ${({ theme }) => css`
        border-top: 1px solid ${theme.colors.white};
        background-color: ${theme.colors.middleGray};
        border-bottom: 1px solid ${theme.colors.white};
    `}
`

export const AboutMeContent = styled.div`
    ${({ theme }) => css`
        height: 100%;
        display: flex;
        padding-top: 100px;
        text-align: justify;
        align-items: center;
        padding-bottom: 100px;
        justify-content: center;

        @media (max-width: ${theme.breakPoints.tablet}) {
            flex-direction: column-reverse;
        }
    `}
`

export const TextAndTechsColumn = styled.div`
    ${({ theme }) => css`
        @media (max-width: ${theme.breakPoints.tablet}) {
            width: 100%;
        }
    `}
`

export const TitleAboutText = styled.h1`
    ${({ theme }) => css`
        font-size: 30px;
        font-weight: bold;
        
        @media (max-width: ${theme.breakPoints.tablet}) {
            font-size: 25px;
        }
    `}
`

export const ParagraphAbout = styled.p`
    ${({ theme }) => css`
        font-size: 15px;
        max-width: 100%;
        
        @media (max-width: ${theme.breakPoints.mobile}) {
            margin-top: 15px
        }
    `}
`

export const MyImageColumn = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-end;

        > img {
            width: 60%;
            border-radius: 10px;
            filter: drop-shadow(0px 7px 10px rgba(255, 255, 255, 0.25)) !important;
            
            @media (max-width: ${theme.breakPoints.tablet}) {
                display: none !important;
            }
        }
    `}
`

export const TechnologiesContainer = styled.div`
    ${({ theme }) => css`
        margin-top: 90px;

        @media (max-width: ${theme.breakPoints.tablet}) {
            margin-top: 60px !important;
        }
    `}
`

export const TitleKnowledge = styled.p`
    ${({ theme }) => css`
        font-size: 20px;
        max-width: 485px;
        font-weight: bold;

        @media (max-width: ${theme.breakPoints.tablet}) {
            max-width: 100%;
        }
    `}
`

export const CardsContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-wrap: wrap;
        max-width: 570px;

        @media (max-width: ${theme.breakPoints.tablet}) {
            max-width: 100%;
            justify-content: space-between;
        }
    `}
`


