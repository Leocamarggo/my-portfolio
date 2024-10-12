import styled, { css } from "styled-components";

export const ContactContainer = styled.div`
    ${({ theme }) => css`
        border: 1px solid ${theme.colors.white};
        border-left: none;
        border-right: none;
        background-color: ${theme.colors.middleGray};
    `}
`

export const ContactContent = styled.div`
    height: 100%;
    display: flex;
    padding-top: 100px;
    padding-bottom: 100px;
    flex-direction: column;
    justify-content: center;
`

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const TitleProject = styled.h1`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 3px;
    padding-bottom: 10px;
    text-transform: uppercase;
`

export const TitleLine = styled.div`
    ${({ theme }) => css`
        width: 100px;
        border-top: 2px solid ${theme.colors.white}
    `}
`

export const BoxForm = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const FormContainer = styled.div`
    ${({ theme }) => css`
        @media (max-width: ${theme.breakPoints.mobile}) {
            width: 100%;
        }
    `}
`

export const RowNameAndEmail = styled.div`
    ${({ theme }) => css`
        display: flex;
        margin-bottom: 20px;
        flex-direction: row;
        justify-content: center;

        > div {
            display: flex;
            align-items: flex-start;
            flex-direction: column-reverse;

            @media (max-width: ${theme.breakPoints.mobile}) {
                width: 100%;
            }
        }

        @media (max-width: ${theme.breakPoints.mobile}) {
            flex-direction: column !important;
        }
    `}
`

export const GenericInput = styled.input`
    ${({ theme }) => css`
        outline: 0;
        height: 60px;
        padding: 25px;
        margin: 0.8em 0;
        border-radius: 3px;
        transition: all 0.8s ease 0s;
        color: ${theme.colors.green};
        background:  ${theme.colors.darkGray};
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;
        border: 2px solid ${theme.colors.darkGray};

        &:focus{
            border-color: ${theme.colors.green} !important
        }
        &:focus + label{
            color: ${theme.colors.green} !important
        }
        &:valid {
            border-color: ${theme.colors.green} !important
        }

        @media (max-width: ${theme.breakPoints.mobile}) {
            width: 100%;
            margin-right: 0 !important;
        }
    `}

`

export const GenericLabel = styled.label`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: -0.5rem;
        transition: all 0.8s ease 0s;
        color: ${theme.colors.white};
        text-shadow: black 0px 0px 10px;
    `}
`

export const RowMessage = styled.div`
    > div {
        display: flex;
        align-items: flex-start;
        flex-direction: column-reverse;
    }
`

export const MessageTextarea = styled.textarea`
    ${({ theme }) => css`
        width: 100%;
        resize: none;
        outline: none;
        height: 200px;
        margin-top: 6px;
        border-radius: 4px;
        font-size: inherit;
        padding: 15px 25px;
        color: ${theme.colors.green};
        transition: all 0.8s ease 0s;
        background: ${theme.colors.darkGray};
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;
        border: 2px solid ${theme.colors.darkGray};

        &:focus{
            border-color: ${theme.colors.green} !important
        }
        &:focus + label{
            color: ${theme.colors.green} !important
        }
        &:valid{
            border-color: ${theme.colors.green} !important
        }
    `}
`

export const MessageLabel = styled.label`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        margin-bottom: 0.1rem;
        transition: all 0.8s ease 0s;
        color: ${theme.colors.white};
        text-shadow: ${theme.colors.black} 0px 0px 10px;
    `}
`

export const SubmitButton = styled.button`
    ${({ theme }) => css`
        border: none;
        font-size: 15px;
        margin-top: 30px;
        font-weight: bold;
        padding: 10px 40px;
        border-radius: 4px;
        letter-spacing: 1px;
        color: ${theme.colors.white};
        transition-timing-function: ease;
        background: ${theme.colors.green};
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    `}
`

export const LoadingComponent = styled.div`
    ${() => css`
        display: inline-flex;
        gap: 10px;

        &::before, &::after{
            content: "";
            height: 20px;
            aspect-ratio: 1;
            border-radius: 50%;
            background:
            radial-gradient(farthest-side,#000 95%,#0000) 35% 35%/6px 6px no-repeat
            #fff;
            transform: scaleX(var(--s,1)) rotate(0deg);
            animation: l6 1s infinite linear;
        }

        &::after{
            --s: -1;
            animation-delay:-0.1s;
        }

        @keyframes l6 {
            100% {transform:scaleX(var(--s,1)) rotate(360deg);}
        }
    `}
`
