import React from 'react';
import styled from "styled-components";
import logo from '../../assets/images/headerLogo.png'
import hamburgerIcon from '../../assets/images/hamburgerButton.svg'

export const HeaderContainer = styled.header`
    box-sizing: border-box;
    background-color: lightblue;
    margin: 0;
    padding: 0 30px 0 30px;
    position: sticky;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.10);
`;
export const HeaderLogoIconImg = styled.img`
    box-sizing: border-box;
    width: 50px;
    height: 25px;
    cursor: pointer;
    margin-right: 20px;
`
export const HeaderLogoTitle = styled.h1`
    flex-grow: 1;
    text-align: start;
`
export const HeaderHamburgerImg = styled.img`
    cursor: pointer;
`

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogoIconImg src={logo}/>
            <HeaderLogoTitle>COZ Shopping</HeaderLogoTitle>
            <HeaderHamburgerImg src={hamburgerIcon}/>
       </HeaderContainer>
    );
};