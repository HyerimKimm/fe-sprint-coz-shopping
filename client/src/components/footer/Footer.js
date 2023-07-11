import React from 'react';
import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100vw;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 0.10);
    background: #FFF;
`
export const FooterContent = styled.div`
    margin: 5px;
    color: #888;
    font-size: 12px;
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