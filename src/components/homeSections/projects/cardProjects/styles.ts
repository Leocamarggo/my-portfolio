import styled, { css } from 'styled-components'

export const CardProjectsContainer = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 300px;
        position: relative;
        border-radius: 0.5rem;
        background-color: ${theme.colors.white};
    `}
`

export const PreviewProject = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
`

export const AboutProjectRow = styled.div`
    opacity: 1;
    z-index: 100;
    display: flex;
    margin-top: -50px;
    align-items: center;
    transition: all 0.5s ease 0s;
    justify-content: center;

    /* &:hover{
        opacity: 1;
    } */

    &:before{
        content: "";
        top: 0px;
        left: 0px;
        z-index: 10;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        position: absolute;
        border-radius: 0.4rem !important;
        background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8), rgb(0, 0, 0));
    }
`

export const TextsRow = styled.div`
    ${({ theme }) => css`
        top: -20px;
        z-index: 12;
        text-align: left;
        margin-left: 20px;
        position: relative;
        color: ${theme.colors.black};

        > strong {
            font-size: 18px;
            letter-spacing: 1px;
            color: ${theme.colors.white};
        }

        > span {
            color: ${theme.colors.white};
        }
    `}
`

export const AccessProjectRow = styled.button`
    ${({ theme }) => css`
        top: -20px;
        z-index: 12;
        border: none;
        background: none;
        position: relative;
        margin-right: 20px;

        > i {
            font-size: 25px;
            color: ${theme.colors.green};
        }
    `}
`


