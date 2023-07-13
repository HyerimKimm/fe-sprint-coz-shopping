import React from 'react';
import logo from '../../assets/images/headerLogo.png'
import hamburgerIcon from '../../assets/images/hamburgerButton.svg'
import { useSelector, useDispatch } from 'react-redux'
import { updateIsHamburgerClick } from '../../redux/actions/isHamburgerClickAction';
import { Dropdown } from './Dropdown';
import { HeaderContainer, HeaderHamburgerImg, HeaderLogoIconImg, HeaderLogoTitle, StyledLink } from './Header.style';

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