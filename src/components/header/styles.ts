import styled, { css } from 'styled-components'

export const Container = styled.div`
    margin-top: 30px;
`
export const DesktopMenu = styled.ul`
    padding: 0;
    display: flex;
    overflow: hidden;
    list-style: none;
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    @media (max-width: 999px) {
        display: none;
    }
`

export const DesktopContent = styled.li`
    padding: 15px;
`

export const DesktopText = styled.span`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-size: 18px;
        cursor: pointer;
        font-style: normal;
        position: relative;
        font-weight: normal;
        padding-bottom: 5px;

        &:before, &:after {
            top: 0;
            left: 0;
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            transition: transform 0.5s ease;
            border-bottom: solid ${theme.colors.green};
        };

        &:before {
            transform: scaleX(0);
            border-width: 2px 0 2px 0;
        };

        &:after {
            transform: scaleY(0);
            border-width: 0 2px 0 2px;
        };

        &:hover:before, &:hover:after {
            transform: scale(1, 1);
        };
    `}
`

export const MobileMenu = styled.div`
    z-index: 5;
    width: 100%;
    height: 50px;
    display: none;
    align-items: center;
    justify-content: flex-end;
    @media (max-width: 999px) {
        display: block;
    }
`

export const MobileContent = styled.ul`
    top: 0;
    left: 0;
    z-index: 5;
    width: 250px;
    height: 100vh;
    padding: 30px;
    position: absolute;
    list-style-type: none;
    background: transparent;
    transform-origin: 0% 0%;
    transition: transform 0.5s;
    transform: translate(-150%, 0);
    -webkit-font-smoothing: antialiased;
`

export const MobileText = styled.li`
    ${({ theme }) => css` 
        color: ${theme.colors.white};
        margin: 40px 0;
        font-size: 20px;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 1px;
    `}
`

export const MobileMenuButton = styled.input.attrs(() => ({
  type: 'checkbox',
  id: 'menu-btn'
}))`
    display: none;
    &:checked ~ .menuMobile {
        transform: none
    }
    &:checked ~ .background {
        transform: none
    }
    &:checked ~ label .navicon {
        background: transparent
    }
    &:checked ~ label .navicon:before {
        transform: rotate(-45deg);
        width: 30px !important;
    }
    &:checked ~ label .navicon:after {
        transform: rotate(45deg)
    }   
    &:checked ~ label:not(.steps) .navicon:before {
        top: 0
    }
    &:checked ~ label:not(.steps) .navicon:after {
        top: 0
    }
`

export const MobileMenuIcon = styled.label.attrs(() => ({
  htmlFor: 'menu-btn'
}))`
    ${({ theme }) => css`
        z-index: 2;
        float: right;
        cursor: pointer;
        user-select: none;
        position: relative;
        padding: 10px 25px 10px 30px;

        > span {
            height: 2px;
            width: 15px;
            display: block;
            background: ${theme.colors.white};
            position: relative;
            transition: background .2s ease-out;

            &:before{
                right: 0;
                top: 10px;
                content: '';
                width: 20px;
                height: 100%;
                display: block;
                background: ${theme.colors.white};
                position: absolute;
                transition: all .2s ease-out;
            }

            &:after{
                right: 0;
                top: -10px;
                content: '';
                width: 30px;
                height: 100%;
                display: block;
                background: ${theme.colors.white};
                position: absolute;
                transition: all .2s ease-out;
            }
        }
    `}
`

export const Background = styled.div`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    height: 100vh;
    position: fixed;
    transition: transform 0.5s;
    transform: translate(0, -250%);
    background-color: rgba(0, 0, 0, 0.85);
`
