import React from 'react';
import { styled } from 'styled-components';

export const BackgroundContainer= styled.div`
    background-color: rgba(255,255,255,0.4);
    position: sticky;
    width: 100vw;
    height: 100vh;
`

export const Modal = ({imgUrl}) => {
    return (
        <BackgroundContainer>
            
        </BackgroundContainer>
    );
};