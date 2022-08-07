import styled, { css } from 'styled-components'

export const ProjectsContainer = styled.div`
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
`

export const TitleRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const TitleProjects = styled.h1`
    ${({ theme }) => css`
        font-size: 30px;
        font-weight: bold;
        text-align: center;
        letter-spacing: 3px;
        padding-bottom: 10px;
        text-transform: uppercase;

        @media (max-width: ${theme.breakPoints.mobile}) {
            font-size: 25px
        }
    `}
`

export const LineTitle = styled.div`
    ${({ theme }) => css`
        width: 80px;
        border-top: 2px solid ${theme.colors.white}
    `}
`

export const ProjectsRow = styled.div`
    ${({ theme }) => css`
        gap: 3rem;
        display: grid;
        margin-top: 80px;
        position: relative;
        place-items: center;
        place-content: center;
        grid-template-rows: auto;
        justify-content: stretch;
        grid-template-columns: repeat(3, minmax(10rem, 1fr));

        @media (max-width: ${theme.breakPoints.desktop}) {
            grid-template-columns: repeat(2, auto)
        }

        @media (max-width: ${theme.breakPoints.mobile}) {
            padding: 0 10px;
            grid-template-columns: repeat(1, auto)
        }
    `}
`

export const GitHubRow = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`

export const TitleGitHub = styled.div`
    ${({ theme }) => css`
        cursor: pointer;
        margin-top: 30px;
        text-align: center;
        color: ${theme.colors.green}
    `}
`

export const LineGitHub = styled.div`
    ${({ theme }) => css`
        width: 100px;
        border-top: 2px solid ${theme.colors.green}
    `}
`



