import React from 'react';
import { styled } from 'styled-components';

export const MainContainer = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    height: 81vh;
`;

export const MainPage = () => {
    return (
        <MainContainer>
            This is Main Page
        </MainContainer>
    );
};