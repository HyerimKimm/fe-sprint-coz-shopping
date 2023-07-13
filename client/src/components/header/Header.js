import React from 'react';
import styled from "styled-components";
import logo from '../../assets/images/headerLogo.png'
import hamburgerIcon from '../../assets/images/hamburgerButton.svg'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { updateIsHamburgerClick } from '../../redux/actions/isHamburgerClickAction';
import { Dropdown } from './Dropdown';

export const HeaderContainer = styled.header`
    box-sizing: border-box;
    background-color: lightblue;
    margin: 0;
    padding: 0 50px 0 40px;
    position: sticky;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.10);
    z-index: 999;
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
const StyledLink = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: black;
`
export const Header = () => {
    const dispatch = useDispatch();
    const selector = useSelector(state=>state);

    const onClickHandler = () => {
        dispatch(updateIsHamburgerClick());
    }

    return (
        <HeaderContainer>
            <StyledLink to='/'>
                <HeaderLogoIconImg src={logo}/>
            </StyledLink>
            <HeaderLogoTitle>COZ Shopping</HeaderLogoTitle>
            <HeaderHamburgerImg src={hamburgerIcon} onClick={onClickHandler}/>
            {
                selector.isHamburgerClickReducer?<Dropdown/>:null
            }
       </HeaderContainer>
    );
};