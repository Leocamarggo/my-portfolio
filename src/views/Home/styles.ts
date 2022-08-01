import styled, { css } from 'styled-components'

export const IntroductionContainer = styled.div`
    ${({ theme }) => css`
        height: 90vh;
        display: flex;
        align-items: center;
        justify-content: center;

        @media (max-width: ${theme.breakPoints.tablet}) {
            flex-direction: column-reverse
        }
    `}
`

export const Presentation = styled.div`
    ${({ theme }) => css`
        @media (max-width: ${theme.breakPoints.tablet}) {
            text-align: center;
            width: 100% !important;
        }
        @media (max-width: ${theme.breakPoints.mobile}) {
            text-align: left !important
        }
    `}
`
export const IAmTitle = styled.p`
    ${({ theme }) => css`
        font-size: 30px;
        margin: 0 0 0 1.5px;
        font-weight: normal;
        color: ${theme.colors.white};

        @media (max-width: ${theme.breakPoints.tablet}) {
            margin: 0;
            letter-spacing: 0.5px;
            max-width: 100% !important;
            margin-top: 10px !important;
        }

        @media (max-width: ${theme.breakPoints.mobile}) {
            font-size: 23px !important;
            margin-bottom: 10px !important;
        }
    `}
`

export const Name = styled.h1`
    ${({ theme }) => css`
        margin: 0;
        font-size: 3rem;
        font-weight: normal;
        color: ${theme.colors.white};
        @media (max-width: ${theme.breakPoints.tablet}) {
            font-size: 45px;
            line-height: 35px;
        }
        @media (max-width: ${theme.breakPoints.mobile}) {
            font-size: 33px !important
        }
    `}
`

export const Profession = styled.p`
    ${({ theme }) => css`
        font-size: 25px;
        margin: 0 0 0 1.5px;
        font-weight: normal;
        color: ${theme.colors.white};
        
        @media (max-width: ${theme.breakPoints.mobile}) {
            font-size: 21px !important
        }
    `}
`

export const SeeMoreButton = styled.button`
    ${({ theme }) => css`
        z-index: 1;
        border: none;
        font-size: 13px;
        margin-top: 10px;
        font-weight: bold;
        padding: 8px 45px;
        border-radius: 4px;
        transition: all 1s;
        letter-spacing: 1px;
        color: ${theme.colors.darkGray};
        background: ${theme.colors.green};
        transition-timing-function: ease;
        &:hover{
            padding: 8px 60px;
            letter-spacing: 2px;
        }

        @media (max-width: ${theme.breakPoints.tablet}) {
            font-size: 16px;
            padding: 10px 25px;
            margin-top: 20px !important;
        }

        @media (max-width: ${theme.breakPoints.mobile}) {
            font-size: 16px;
            padding: 10px 45px !important;
        }
    `}
`

export const Illustration = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-end;

        > img {
            width: 80%;
        }

        @media (max-width: ${theme.breakPoints.tablet}) {
            display: none !important;
        }
    `}
`
