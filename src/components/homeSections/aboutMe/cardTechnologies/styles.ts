import styled, { css } from 'styled-components'

export const Container = styled.div`
    ${({ theme }) => css`
        padding: 20px 25px;
        text-align: center;
        border-radius: 10px;
        margin: 0 30px 30px 0;
        background-color: ${theme.colors.darkGray};
    `}
`

export const NameTechnology = styled.p`
    font-size: 10px;
    margin-bottom: 20px;
`

export const ImageTechnology = styled.img`
    width: 50px;
    filter: drop-shadow(0px 7px 5px rgba(255, 255, 255, 0.25)) !important
`

