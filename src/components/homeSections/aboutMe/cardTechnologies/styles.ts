import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 18px 10px;
    text-align: center;
    border-radius: 10px;
    background-color: ${theme.colors.darkGray};
    border: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
    cursor: default;

    &:hover {
      border-color: ${theme.colors.green};
      box-shadow: 0 0 18px ${theme.colors.greenGlow}, 0 4px 20px rgba(0, 0, 0, 0.4);
      transform: translateY(-4px);
    }
  `}
`

export const NameTechnology = styled.p`
  ${({ theme }) => css`
    font-size: 9px;
    margin-bottom: 12px;
    letter-spacing: 1px;
    color: ${theme.colors.lightGray};
    transition: color 0.3s ease;
    text-transform: uppercase;

    ${Container}:hover & {
      color: ${theme.colors.green};
    }
  `}
`

export const ImageTechnology = styled.img`
  width: 36px;
  transition: transform 0.3s ease;
  filter: drop-shadow(0px 4px 3px rgba(255, 255, 255, 0.1));

  ${Container}:hover & {
    transform: scale(1.15);
    filter: drop-shadow(0px 5px 6px rgba(2, 212, 99, 0.3));
  }
`
