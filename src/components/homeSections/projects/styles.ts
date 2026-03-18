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
    letter-spacing: 4px;
    padding-bottom: 12px;
    text-transform: uppercase;
    color: ${theme.colors.white};

    @media (max-width: ${theme.breakPoints.mobile}) {
      font-size: 24px;
    }
  `}
`

export const LineTitle = styled.div`
  ${({ theme }) => css`
    width: 60px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, ${theme.colors.green}, transparent);
  `}
`

export const ProjectsRow = styled.div`
  ${({ theme }) => css`
    gap: 2rem;
    display: grid;
    margin-top: 70px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: ${theme.breakPoints.desktop}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakPoints.tablet}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      grid-template-columns: 1fr;
    }
  `}
`

export const GitHubRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 60px;
`

export const TitleGitHub = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    text-align: center;
    font-size: 15px;
    letter-spacing: 1px;
    color: ${theme.colors.green};
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s ease;
    padding: 10px 20px;
    border: 1px solid ${theme.colors.greenBorder};
    border-radius: 4px;

    > i {
      font-size: 18px;
    }

    &:hover {
      box-shadow: 0 0 16px ${theme.colors.greenGlow};
      border-color: ${theme.colors.green};
      transform: translateY(-2px);
    }
  `}
`
