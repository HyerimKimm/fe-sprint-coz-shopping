import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    position: sticky;
    top:0;
    box-sizing: border-box;
    background-color: lightblue;
    margin: 0;
    padding: 0 50px 0 40px;
    width: 100vw;
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #FFF;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.10);
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
    text-align: start;
`
export const HeaderHamburgerImg = styled.img`
    cursor: pointer;
`
export const StyledLink = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: black;
`