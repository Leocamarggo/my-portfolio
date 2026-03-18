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
  ${({ theme }) => css`
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 4px;
    padding-bottom: 12px;
    text-transform: uppercase;
    color: ${theme.colors.white};
  `}
`

export const TitleLine = styled.div`
  ${({ theme }) => css`
    width: 60px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(90deg, ${theme.colors.green}, transparent);
  `}
`

export const BoxForm = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 680px;

    @media (max-width: ${theme.breakPoints.mobile}) {
      max-width: 100%;
    }
  `}
`

export const RowNameAndEmail = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    flex-direction: row;

    > div {
      flex: 1;
      display: flex;
      align-items: flex-start;
      flex-direction: column-reverse;
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      flex-direction: column;
      gap: 0;

      > div {
        width: 100%;
      }
    }
  `}
`

export const GenericInput = styled.input`
  ${({ theme }) => css`
    outline: 0;
    width: 100%;
    height: 56px;
    padding: 20px 22px;
    margin: 0.8em 0;
    border-radius: 6px;
    transition: all 0.4s ease;
    color: ${theme.colors.green};
    background: ${theme.colors.darkGray};
    border: 1px solid rgba(255, 255, 255, 0.06);
    font-family: inherit;
    font-size: 14px;
    letter-spacing: 0.5px;

    &:focus {
      border-color: ${theme.colors.green};
      box-shadow: 0 0 0 3px ${theme.colors.greenDim}, 0 0 16px ${theme.colors.greenGlow};
    }

    &:focus + label {
      color: ${theme.colors.green} !important;
    }

    &:valid {
      border-color: rgba(2, 212, 99, 0.4);
    }

    @media (max-width: ${theme.breakPoints.mobile}) {
      margin-right: 0 !important;
    }
  `}
`

export const GenericLabel = styled.label`
  ${({ theme }) => css`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: -0.4rem;
    transition: color 0.4s ease;
    color: ${theme.colors.lightGray};
    text-transform: uppercase;
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
    border-radius: 6px;
    font-size: 14px;
    font-family: inherit;
    letter-spacing: 0.5px;
    padding: 16px 22px;
    color: ${theme.colors.green};
    transition: all 0.4s ease;
    background: ${theme.colors.darkGray};
    border: 1px solid rgba(255, 255, 255, 0.06);

    &:focus {
      border-color: ${theme.colors.green};
      box-shadow: 0 0 0 3px ${theme.colors.greenDim}, 0 0 16px ${theme.colors.greenGlow};
    }

    &:focus + label {
      color: ${theme.colors.green} !important;
    }

    &:valid {
      border-color: rgba(2, 212, 99, 0.4);
    }
  `}
`

export const MessageLabel = styled.label`
  ${({ theme }) => css`
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 0.1rem;
    transition: color 0.4s ease;
    color: ${theme.colors.lightGray};
    text-transform: uppercase;
  `}
`

export const SubmitButton = styled.button`
  ${({ theme }) => css`
    font-size: 13px;
    margin-top: 28px;
    font-weight: bold;
    padding: 12px 52px;
    border-radius: 6px;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    background: transparent;
    color: ${theme.colors.green};
    border: 2px solid ${theme.colors.green};
    transition: all 0.35s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: ${theme.colors.green};
      transform: translateX(-100%);
      transition: transform 0.35s ease;
      z-index: -1;
    }

    &:hover:not(:disabled) {
      color: ${theme.colors.darkGray};
      box-shadow: 0 0 20px ${theme.colors.greenGlow};

      &::before {
        transform: translateX(0);
      }
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  `}
`

export const LoadingComponent = styled.div`
  ${() => css`
    display: inline-flex;
    gap: 10px;

    &::before,
    &::after {
      content: '';
      height: 20px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: radial-gradient(farthest-side, #02d463 95%, #0000) 35% 35%/6px 6px no-repeat
        #1a1a1a;
      transform: scaleX(var(--s, 1)) rotate(0deg);
      animation: l6 1s infinite linear;
    }

    &::after {
      --s: -1;
      animation-delay: -0.1s;
    }

    @keyframes l6 {
      100% {
        transform: scaleX(var(--s, 1)) rotate(360deg);
      }
    }
  `}
`
