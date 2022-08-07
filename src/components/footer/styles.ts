import styled, { css } from "styled-components";

export const FooterContainer = styled.div`
    ${({ theme }) => css`
        height: 10vh;
        display: flex;
        align-items: center;

        @media (max-width: ${theme.breakPoints.mobile}) {
            height: 15vh;
        }
    `}
`

export const FooterContent = styled.div`
    ${({ theme }) => css`
        display: flex;
        align-items: center;

        @media (max-width: ${theme.breakPoints.mobile}) {
            flex-direction: column;
        }
    `}
`

export const LinksContainer = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: flex-start;

        @media (max-width: ${theme.breakPoints.mobile}) {
            width: 100%;
            margin: 20px 0;
            justify-content: center;
        }
    `}
`

export const LinkIcon = styled.a`
    ${({ theme }) => css`
        > i {
            cursor: pointer;
            font-size: 25px;
            transition: all 0.4s ease 0s;
            color: ${theme.colors.lightGray};
            &:hover{
                color:${theme.colors.green} !important
            }
        }
    `}
`

export const CopyrightContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakPoints.mobile}) {
            width: 100%;
            justify-content: center;
        }
    `}
`

export const CopyrightText = styled.span`
    ${({ theme }) => css`
        font-size: 15px;
        letter-spacing: 0.5px;
        color: ${theme.colors.lightGray};

        @media (max-width: ${theme.breakPoints.mobile}) {
            font-size: 13px;
        }
    `}
`