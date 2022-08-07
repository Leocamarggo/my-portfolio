import styled, { css } from 'styled-components'

export const AboutMeContainer = styled.div`
    ${({ theme }) => css`
        border-top: 1px solid ${theme.colors.white};
        background-color: ${theme.colors.middleGray};
        border-bottom: 1px solid ${theme.colors.white};
    `}
`

export const AboutMeContent = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 100px 0 100px;
    justify-content: center;
`

export const TextAndTechsColumn = styled.div``

export const TitleAboutText = styled.h1`
    font-size: 30px;
    font-weight: bold;
`

export const ParagraphAbout = styled.p`
    font-size: 15px;
    max-width: 100%;
`

export const MyImageColumn = styled.div`
    display: flex;
    justify-content: flex-end;

    > img {
        width: 60%;
        border-radius: 10px;
        filter: drop-shadow(0px 7px 10px rgba(255, 255, 255, 0.25)) !important;
    }
`

export const TechnologiesContainer = styled.div`
    margin-top: 90px;
`

export const TitleKnowledge = styled.p`
    font-size: 20px;
    max-width: 485px;
    font-weight: bold;
`

export const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 570px;
`


