import styled, { css } from 'styled-components'

export const CardProjectsContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 300px;
    position: relative;
    border-radius: 0.6rem;
    overflow: hidden;
    border: 1px solid ${theme.colors.greenBorder};
    transition: all 0.4s ease;

    &:hover {
      border-color: ${theme.colors.green};
      box-shadow: 0 8px 32px ${theme.colors.greenGlow}, 0 2px 10px rgba(0, 0, 0, 0.5);
      transform: translateY(-6px);
    }
  `}
`

export const PreviewProject = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.6rem;
  transition: transform 0.5s ease;

  ${CardProjectsContainer}:hover & {
    transform: scale(1.06);
  }
`

export const AboutProjectRow = styled.div`
  opacity: 1;
  z-index: 100;
  display: flex;
  margin-top: -60px;
  align-items: center;
  transition: all 0.4s ease;
  justify-content: space-between;

  &:before {
    content: '';
    top: 0px;
    left: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    position: absolute;
    border-radius: 0.5rem;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.95) 100%
    );
  }
`

export const TextsRow = styled.div`
  ${({ theme }) => css`
    top: -16px;
    z-index: 12;
    text-align: left;
    margin-left: 20px;
    position: relative;
    color: ${theme.colors.white};

    > strong {
      font-size: 16px;
      letter-spacing: 1.5px;
      color: ${theme.colors.white};
    }

    > span {
      display: block;
      margin-top: 4px;
      font-size: 13px;
      color: ${theme.colors.lightGray};
    }
  `}
`

export const AccessProjectRow = styled.button`
  ${({ theme }) => css`
    top: -16px;
    z-index: 12;
    border: none;
    background: none;
    position: relative;
    margin-right: 20px;
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.greenBorder};
    transition: all 0.3s ease;

    &:hover {
      background: ${theme.colors.green};
      border-color: ${theme.colors.green};
      box-shadow: 0 0 14px ${theme.colors.greenGlow};
    }

    > i {
      font-size: 14px;
      color: ${theme.colors.green};
      transition: color 0.3s ease;
    }

    &:hover > i {
      color: ${theme.colors.darkGray};
    }
  `}
`
