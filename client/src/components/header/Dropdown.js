import React from 'react';
import { styled } from 'styled-components';
import { Link } from "react-router-dom";
import triangle from '../../assets/images/dropdownTriangle.svg'
import dropdownLogoProductList from '../../assets/images/dropdownLogoProductList.svg'
import dropdownLogoBookmark from '../../assets/images/dropdownLogoBookmark.svg'

export const DropdownContainer = styled.section`
    position: absolute;
    top:70%;
    right: 2vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;
const DropdownTriangleImg = styled.img`
    margin-left: 140px;
    filter: drop-shadow(0px -3px 2px rgba(0,0,0,0.1))
`
const DropdownItemContainer = styled.section`
    background-color: #fff;
    width: 200px;
    height: 50px;
    border-radius: ${(props)=>
        props.position==='top'?'10px 10px 0px 0px'
        :props.position==='bottom'?'0px 0px 10px 10px':0 };
    background-color: #fff;
    cursor: ${(props)=>props.position==='top'?'default':'pointer'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1);
`
const DropdownSmallLogoImg = styled.img`
    margin-left: 20px;
    margin-right: 20px;
    width: 20px;
    height: 20px;
`
const DropdownTitle = styled.span`
    width: 150px;
    text-align: ${(props)=>props.position==='top'?'center':'start'};
    flex-grow: 1;
`
const StyledLink = styled(Link)`
    text-decoration-line : none;
    text-decoration : none;
    color: black;
`

export const Dropdown = () => {
    return (
        <DropdownContainer>
            <DropdownTriangleImg src={triangle} border='0'/>
            <DropdownItemContainer position='top'>
                <DropdownTitle position='top'>{`김혜림님 안녕하세요!`}</DropdownTitle>
            </DropdownItemContainer>
            <StyledLink to='/products/list'>
                <DropdownItemContainer position=''>
                    <DropdownSmallLogoImg src={dropdownLogoProductList}/>
                    <DropdownTitle position=''>상품리스트 페이지</DropdownTitle>
                </DropdownItemContainer>
            </StyledLink>
            <StyledLink to='/bookmark'>
                <DropdownItemContainer position='bottom'>
                     <DropdownSmallLogoImg src={dropdownLogoBookmark}/>
                    <DropdownTitle position='bottom'>북마크 페이지</DropdownTitle>
                </DropdownItemContainer>
            </StyledLink>
        </DropdownContainer>
    );
};

