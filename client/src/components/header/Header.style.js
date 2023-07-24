import styled from "styled-components";
import { Link } from "react-router-dom";
import tokens from '../../tokens/tokens.json'

const { DefaultShadow, White, Black, Heading1 } = tokens.global;

export const HeaderContainer = styled.header`
    position: sticky;
    top:0;
    box-sizing: border-box;
    margin: 0;
    padding: 0 50px 0 40px;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: ${White.value};
    box-shadow: ${DefaultShadow.value.x}px ${DefaultShadow.value.y}px ${DefaultShadow.value.blur}px ${DefaultShadow.value.spread}px ${DefaultShadow.value.color};
    z-index: 1;
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
    font-size: ${Heading1.value}px;
    text-align: start;
`
export const HeaderHamburgerImg = styled.img`
    cursor: pointer;
`
export const StyledLink = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: ${Black.value};
`