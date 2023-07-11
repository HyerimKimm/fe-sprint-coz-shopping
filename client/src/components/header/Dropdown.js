import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import triangle from '../../assets/images/dropdownTriangle.svg'
import dropdownLogoProductList from '../../assets/images/dropdownLogoProductList.svg'
import dropdownLogoBookmark from '../../assets/images/dropdownLogoBookmark.svg'

export const DropdownContainer = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
`;
const DropdownTriangleImg = styled.img`
    margin-left: 130px;
`
const DropdownItemContainer = styled.section`
    background-color: #fff;
    width: 200px;
    height: 50px;
    border-radius: ${(props)=>
        props.position==='top'?'10px 10px 0px 0px'
        :props.position==='bottom'?'0px 0px 10px 10px':0 };
    background-color: #fff;
    border-color: rgba(0, 0, 0, 0.10);
    border-top-style: ${(props)=>props.position===''?'solid':'none'};
    border-bottom-style: ${(props)=>props.position===''?'solid':'none'};
    cursor: ${(props)=>props.position==='top'?'default':'pointer'};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
export const Dropdown = () => {
    const onClickHandler = () => {    }

    return (
        <DropdownContainer>
            <DropdownTriangleImg src={triangle}/>
            <DropdownItemContainer position='top'>
                <DropdownTitle position='top'>{`김혜림님 안녕하세요!`}</DropdownTitle>
            </DropdownItemContainer>
            <DropdownItemContainer position='' onClick={()=>{onClickHandler()}}>
                <DropdownSmallLogoImg src={dropdownLogoProductList}/>
                <DropdownTitle position=''>상품리스트 페이지</DropdownTitle>
            </DropdownItemContainer>
            <DropdownItemContainer position='bottom' onClick={()=>{onClickHandler()}}>
                <DropdownSmallLogoImg src={dropdownLogoBookmark}/>
                <DropdownTitle position='bottom'>북마크 페이지</DropdownTitle>
            </DropdownItemContainer>
        </DropdownContainer>
    );
};

