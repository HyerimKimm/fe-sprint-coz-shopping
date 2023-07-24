import React from 'react';
import styled from "styled-components";
import tokens from '../../tokens/tokens.json'

const { Gray, White, SmallText, Border } = tokens.global;

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${Border.value};
    background: ${White.value};
`
export const FooterContent = styled.div`
    margin: 5px;
    color: ${Gray.value};
    font-size: ${SmallText.value}px;
    font-style: normal;
    font-weight: 400;
    line-height: 88.023%;
`

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterContent>개인정보 처리방침 | 이용 약관</FooterContent>
            <FooterContent>All rights reserved @ Codestates</FooterContent>
        </FooterContainer>
    );
};